const mongoose = require('mongoose')
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
  },
  first_name: {
    type: String,
  },
  last_name: {
    type: String
  },
  team: {
    type: Number
  }
});

module.exoprts = mongoose.model('User', userSchema)
