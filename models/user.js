const _ = require('lodash');
const User = require('../db').Users

function createUser(email, team_id, role, first_name, last_name) {
  return User.findOrCreate({ where: { email, team_id, role, first_name, last_name } })
    .spread((user, created) => {
      console.log('user', user)
      console.log('created', created)
      return user.get({
        plain: true
      })
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
