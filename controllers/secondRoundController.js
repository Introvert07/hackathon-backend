import SecondRound from '../models/SecondRound.js';

export const submitSecondRound = async (req, res) => {
  try {
    const submission = await SecondRound.create(req.body);
    res.status(201).json(submission);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
