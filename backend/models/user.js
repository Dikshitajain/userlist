const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true },
  region: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);
