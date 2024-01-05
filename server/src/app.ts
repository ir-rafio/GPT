import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import { studentRouter } from './modules/student/student.route';

dotenv.config();

const app = express();

// Configuration
app.set('port', Number(process.env.PORT) || 4001);
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

//Routes
app.use(studentRouter);

export default app;
