import { Router } from 'express';
import { commentController } from './comment.controller';

export const commentRouter = Router();

commentRouter.post('/add', commentController.createComment);

commentRouter.delete('/delete', commentController.deleteComment);

commentRouter.put('/edit', commentController.editComment);
