import ZerothRound from '../models/ZerothRound.js';

export const registerZerothRound = async (req, res) => {
  try {
    const { teamName, leaderEmail, Enrollment } = req.body;

    // Check if the team name already exists
    const teamExists = await ZerothRound.findOne({ teamName: teamName.trim() });
    if (teamExists) {
      return res.status(400).json({ message: 'Team name not available. Try something new.' });
    }

    // Check if the leader is already registered with this email or enrollment
    const leaderExists = await ZerothRound.findOne({
      $or: [
        { leaderEmail: leaderEmail.trim().toLowerCase() },
        { Enrollment: Enrollment.trim().toLowerCase() }
      ]
    });

    if (leaderExists) {
      return res.status(400).json({ message: 'You have already registered a team.' });
    }

    // Save the new team
    const newTeam = await ZerothRound.create(req.body);
    res.status(201).json({ message: 'Team registered successfully!', team: newTeam });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};
