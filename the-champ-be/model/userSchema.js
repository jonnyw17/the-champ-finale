const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  twitterhandle: { type: String, unique: true },
  currentchamp: { type: Boolean, default: false },
  provoked: {
    wasprovoked: {type: Boolean, default: false},
    challengeaccepted: {type: Boolean, default: false}
  }
});

const User = mongoose.model('thechampusers', userSchema);

module.exports = User
