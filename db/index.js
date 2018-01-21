// Connect to database
let db = require('./db.config')
let Sequelize = require('sequelize')

// Set table schema
let Teams = require('./teams')(db)
let Users = require('./users')(db)

// Create join tables
const UsersTeams = db.define('UsersTeams', {
  isAdmin: Sequelize.BOOLEAN
})

// Teams:Users (n:m)
Teams.belongsToMany(Users, { through: UsersTeams, foreignKey: 'teamId' })
Users.belongsToMany(Teams, { through: UsersTeams, foreignKey: 'userId' })

// // HELPER TO DROP ALL TABLES
// db.sync({force: true}).then(() => {
//   console.log('Tables have been dropped')
// })
db.sync().then(() => {
  console.log('Tables have been Created')
})

module.exports = {
  db: db,
  Teams: Teams,
  Users: Users,
  UsersTeams: UsersTeams
}
