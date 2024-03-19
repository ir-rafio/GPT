import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import { nicknameRouter } from './modules/nickname/nickname.route';
import { studentRouter } from './modules/student/student.route';
import { voteRouter } from './modules/vote/vote.route';

dotenv.config();

const app = express();

// Configuration
app.set('port', Number(process.env.PORT) || 4001);
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

//Routes
app.use('/student', studentRouter);
app.use('/nickname', nicknameRouter);
app.use('/vote', voteRouter);

export default app;
