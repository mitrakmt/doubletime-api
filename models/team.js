const _ = require('lodash');
const Team = require('../db').Teams

function createTeam(name, admin) {
  return Team
    .findOrCreate({ where: { name, admin } })
    .spread((team, created) => {
      console.log('user', user)
      console.log(team.get({
        plain: true
      }))
      console.log('created', created)
    })
}

module.exports = {
  createTeam
}
