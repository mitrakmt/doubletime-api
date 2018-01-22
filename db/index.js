// Connect to database
let db = require('./db.config')
let Sequelize = require('sequelize')

// Set table schema
let Teams = require('./team')(db)
let Users = require('./user')(db)

// Create join tables
const UsersTeams = db.define('UsersTeams', {
  isAdmin: Sequelize.BOOLEAN
})

// Teams:Users (n:m)
Teams.belongsToMany(Users, { through: UsersTeams, foreignKey: 'team_id' })
Users.belongsToMany(Teams, { through: UsersTeams, foreignKey: 'team_id' })

// // HELPER TO DROP ALL TABLES
// db.sync({force: true}).then(() => {
//   console.log('Tables have been dropped')
// })
db.sync().then(() => {
  console.log('Tables have been Created')
})

module.exports = {
  db,
  Teams,
  Users,
  UsersTeams
}
