import { Router } from 'express';
import { studentController } from './student.controller';

export const studentRouter = Router();

studentRouter.get('/me/:myId/get', studentController.getMyInfo);

studentRouter.get('/classmate/:id/get', studentController.getClassmate);

studentRouter.get('/classmate/:myId/list', studentController.getAllClassmates);
