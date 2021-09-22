import {Router} from 'express'

import * as teachersController from '@controllers/teachers.controller'

const teachersRouter = Router();

teachersRouter.post('/', teachersController.createTeacher)

export {teachersRouter}