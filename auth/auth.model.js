const { Schema, model } = require('mongoose');

const authSchema = new Schema({
  email: String,
  password: String
});

module.exports = model('authModel', authSchema);
