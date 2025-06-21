import SecondRound from '../models/SecondRound.js';
import ZerothRound from '../models/ZerothRound.js';

export const submitSecondRound = async (req, res) => {
  try {
    const { teamName, leaderName, projectLink } = req.body;

    // Check required fields
    if (!teamName || !leaderName || !projectLink) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Check if team exists in ZerothRound
    const registeredTeam = await ZerothRound.findOne({
      teamName: teamName.trim(),
      leaderName: leaderName.trim()
    });

    if (!registeredTeam) {
      return res.status(403).json({
        message: 'Your team is not registered in the Zeroth Round.',
      });
    }

    // Check if already submitted for second round
    const alreadySubmitted = await SecondRound.findOne({
      teamName: teamName.trim()
    });

    if (alreadySubmitted) {
      return res.status(400).json({
        message: 'Your team has already submitted for the Second Round.',
      });
    }

    // Save submission
    const submission = await SecondRound.create({
      teamName: teamName.trim(),
      leaderName: leaderName.trim(),
      projectLink: projectLink.trim()
    });

    return res.status(201).json({
      message: 'Second round submitted successfully!',
      submission
    });

  } catch (err) {
    console.error('Second Round Submission Error:', err);
    return res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};
