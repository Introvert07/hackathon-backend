import mongoose from 'mongoose';

const secondRoundSchema = new mongoose.Schema({
  teamName: String,
  leaderName: String,
  projectLink: String
});

export default mongoose.model('SecondRound', secondRoundSchema);
