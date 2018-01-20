const _ = require('lodash');
const User = require('../db/user')

function createUser(email) {
  return User.create(user, (err, res) => {
    if (err) return err;
    return {
      res
    }
  })
}

function findUser(userId) {
  return User.findOne({
    _id: userId
  })
    .then((user, err) => {
      if (err) return err;
      return {
        user
      }
    })
}

function updateUser(userId) {
  return User.findOneAndUpdate({
    _id: userId
  }, {
      $push: {

      }
    })
    .then((user, err) => {
      if (err) return err;
      return user
    })
}

function deleteUser(userId) {
  return User.remove({
    _id: userId
  })
    .then((err) => {
      if (err) return err;
      return {
        message: 'success'
      }
    })
}

module.exports = {
  createUser,
  findUser,
  updateUser,
  deleteUser
}
