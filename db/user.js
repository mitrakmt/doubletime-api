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
      type: Sequelize.STRING,
      unique: true
    },
    role: {
      type: Sequelize.STRING
    },
    team_id: {
      type: Sequelize.INTEGER
    }
  })

  return Users
}
