const _ = require('lodash');
const User = require('../db/user')

function createUser(email, teamId) {
  User
    .findOrCreate({ where: { email, teamId } })
    .spread((user, created) => {
      console.log('user', user)
      console.log(user.get({
        plain: true
      }))
      console.log('created', created)
    })
}

function findUser(id) {
  return Users.findOne({
    where: {
      [Op.eq]: id
    }
  })
    .then(user => {
      return user
    })
    .catch(err => {
      return { err: err }
    })
}

function updateUser(userId) {
  // return User.findOneAndUpdate({
  //   _id: userId
  // }, {
  //     $push: {

  //     }
  //   })
  //   .then((user, err) => {
  //     if (err) return err;
  //     return user
  //   })
}

function deleteUser(id) {
  return Users.findOne({
    where: {
      [Op.eq]: id
    }
  })
    .then(user => {
      return user.destroy()
        .then(status => {
          return 'User record deleted'
        })
    })
}

module.exports = {
  createUser,
  findUser,
  updateUser,
  deleteUser
}
