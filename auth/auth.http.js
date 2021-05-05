const jwt = require('jsonwebtoken');
const authController = require('./auth.controller');
const { to } = require('../tools/to');

const loginUser = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({message: 'Missing data'});
  } else if (!req.body.email || !req.body.password) {
    return res.status(400).json({message: 'Missing data'});
  }

  let [err, result] = await to(authController.checkUserCredentials(req.body.email, req.body.password));

  if (err || !result) {
    return res.status(401).json({message: 'Invalid credentials'});
  }

  let user = await authController.getUserIdFromUserName(req.body.email);
  let token = jwt.sign({userId: user._id}, 'secretPassword');
  res.status(200).json({token: token});
}

exports.loginUser = loginUser;
