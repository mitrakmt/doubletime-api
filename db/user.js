let Sequelize = require('sequelize')

module.exports = (db) => {
  const Users = db.define('users', {
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    role: {
      type: Sequelize.STRING
    },
    imageteamUrl: {
      type: Sequelize.NUMBER
    }
  })

  return Users
}
