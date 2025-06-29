import FirstRound from '../models/FirstRound.js';
import ZerothRound from '../models/ZerothRound.js';

export const submitFirstRound = async (req, res) => {
  try {
    const { teamName, pptLink, leaderName, leaderPhone, leaderEmail } = req.body;

    // ✅ Validation: Check required fields
    if (!teamName || !pptLink || !leaderName || !leaderPhone || !leaderEmail) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // ✅ Check if the team is registered in Zeroth Round
    const registeredTeam = await ZerothRound.findOne({
  teamName: { $regex: `^${teamName.trim()}$`, $options: 'i' },
  leaderEmail: leaderEmail.trim().toLowerCase()
});


    if (!registeredTeam) {
      return res.status(403).json({
        message: 'Your team is not registered in the Zeroth Round.',
      });
    }

    // ✅ Prevent duplicate submission
    const alreadySubmitted = await FirstRound.findOne({
      teamName: teamName.trim()
    });

    if (alreadySubmitted) {
      return res.status(400).json({
        message: 'Your team has already submitted for the First Round.',
      });
    }

    // ✅ Save the submission
    const submission = await FirstRound.create({
      teamName: teamName.trim(),
      pptLink: pptLink.trim(),
      leaderName: leaderName.trim(),
      leaderPhone: leaderPhone.trim(),
      leaderEmail: leaderEmail.trim().toLowerCase()
    });

    return res.status(201).json({
      message: 'First round submitted successfully!',
      
      submission
    });

  } catch (err) {
    console.error('First Round Submission Error:', err);
    return res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};
