const bcrypt = require('bcrypt');

const hashPassword = (plaintTextPwd, done) => {
  bcrypt.hash(plaintTextPwd, 10, done);
}

const hashPasswordSync = (plaintText) => {
  bcrypt.compareSync(plaintText, 10)
}

const comparePassword = (plaintTextPwd, hashPwd, done) => {
  bcrypt.compare(plaintTextPwd, hashPwd, done);
}

module.exports = {
  hashPassword,
  hashPasswordSync,
  comparePassword
}

