import ZerothRound from '../models/ZerothRound.js';

export const registerZerothRound = async (req, res) => {
  try {
    const team = await ZerothRound.create(req.body);
    res.status(201).json(team);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
