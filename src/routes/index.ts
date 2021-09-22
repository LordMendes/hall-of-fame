
import { Router } from 'express';

import {teachersRouter} from './teacher.routes';
const routes = Router();

routes.use('/teachers', teachersRouter);

export default routes;
