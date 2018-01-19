import mongoose from 'mongoose'
mongoose.Promise = Promise;

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    required: true
  }
});

export default mongoose.model('User', userSchema);
