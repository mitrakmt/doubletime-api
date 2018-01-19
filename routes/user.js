import { Router } from 'express';
import { checkJwt } from '../middleware/auth'

import userController from '../controllers/user';

const userRoute = Router();

userRoute.route('/')
  .get(checkJwt, userController.findUser)
  .post(checkJwt, userController.createUser)
  .delete(checkJwt, userController.deleteUser)

export default userRoute
