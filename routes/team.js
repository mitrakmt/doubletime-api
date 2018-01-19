const Router = require('express')
const teamController = require('../controllers/team')

const teamRoute = Router();

teamRoute.route('/')
  .post(teamController.createTeam)

teamRoute.route('/:teamId')
  .get(teamController.findTeam)
  .patch(teamController.updateTeam)
  .delete(teamController.deleteTeam)

module.exports = teamRoute
