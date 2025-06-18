import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema({
  teamName: String,
  leaderName: String,
  leaderPhone: String,
  leaderEmail: String,
  Enrollment: String,
  ideaName: String,
  members: [
    {
      name: String,
      enrollment: String
    }
  ]
});

export default mongoose.model('ZerothRound', teamSchema);
