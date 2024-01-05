import { Router } from 'express';
import { nicknameController } from './nickname.controller';

export const nicknameRouter = Router();

nicknameRouter.post('/create', nicknameController.createNickname);
