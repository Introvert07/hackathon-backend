import mongoose from 'mongoose';

const firstRoundSchema = new mongoose.Schema({
  teamName: String,
  leaderName: String,
  leaderPhone: String,
  leaderEmail: String,
  pptLink: String
});

export default mongoose.model('FirstRound', firstRoundSchema);
