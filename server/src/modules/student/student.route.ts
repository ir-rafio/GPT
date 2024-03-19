import { Router } from 'express';
import { studentController } from './student.controller';

export const studentRouter = Router();

studentRouter.post('/student/create', studentController.createStudent);

studentRouter.get('/me/:myId/get', studentController.getMyInfo);

studentRouter.post('/me/edit/post', studentController.editMyInfo);

studentRouter.get('/classmate/:id/get', studentController.getClassmate);

studentRouter.get('/classmate/:myId/list', studentController.getAllClassmates);
