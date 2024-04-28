import { Router } from "express";
import { neoStudentController } from "./student.controller";

export const neoStudentRouter = Router();

neoStudentRouter.get("/me/:myId/get", neoStudentController.getMyInfo);
