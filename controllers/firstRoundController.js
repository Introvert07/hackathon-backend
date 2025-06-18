import FirstRound from '../models/FirstRound.js';

export const submitFirstRound = async (req, res) => {
  try {
    const submission = await FirstRound.create(req.body);
    res.status(201).json(submission);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
