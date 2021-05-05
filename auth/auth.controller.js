const crypto = require('../tools/crypto');
const { to } = require('../tools/to');

const AuthModel = require('./auth.model');

//Esto es para limpiar los test
const clearUpUser = () => {
  return new Promise(async (resolve, reject) => {
    await AuthModel.deleteMany({}).exec();
    resolve();
  });
}

const registerUser = (email, password) => {
  return new Promise(async (resolve, reject) => {
    let hashedPwd = crypto.hashPasswordSync(password);
    let newUser = new AuthModel({
      email: email,
      password: hashedPwd
    });
    await newUser.save();
    resolve();
  });
}

registerUser('test@gmail.com', '123456');

const getUserIdFromUserName = (email) => {
  return new Promise(async (resolve, reject) => {
    let [err, result] = await to(AuthModel.findOne({email: email}).exec());
    if (err) {
      return reject(err);
    }
    resolve(result);
  });  
}

const checkUserCredentials = (email, password) => {
  return new Promise(async (resolve, reject) => {
    let [err, user] = await to(getUserIdFromUserName(email));

    if (!err || user) {
      crypto.comparePassword(password, user.password, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    } else {
      reject('Missing user');
    }
  });
}

module.exports = {
  checkUserCredentials,
  registerUser,
  getUserIdFromUserName,
  clearUpUser
}
