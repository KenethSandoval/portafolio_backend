const crypto = require('../tools/crypto');

let authDatabase = {};

const registerUser = (email, password) => {
  let hashedPwd = crypto.hashPasswordSync(password);

  let userId = '412412-214f42-3113fe';
  authDatabase[userId] = {
    email: email,
    password: hashedPwd
  }
}

const getUserIdFromUserName = (email) => {
  for (let user in authDatabase) {
    if (authDatabase[user].email === email) {
      let userData = authDatabase[user];
      userData.userId = user;
      return userData;
    }
  }
}

const checkUserCredentials = (email, password, done) => {
  let user = getUserIdFromUserName(email);

  if (user) {
    crypto.comparePassword(password, user.password, done);
  } else {
    done('Missing user');
  }
}
