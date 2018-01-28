require('dotenv').config()
const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.DATABASE_URI, {
  dialect: 'postgres'
})
// const sequelize = new Sequelize(process.env.DB_URL, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
//   dialect: 'postgres'
// })

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch((err) => {
    console.log('Unable to connect to the database:', err)
  })

module.exports = sequelize