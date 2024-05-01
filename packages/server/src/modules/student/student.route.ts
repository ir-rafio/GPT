import { Router } from "express";
import { studentController } from "./student.controller";

export const studentRouter = Router();

studentRouter.post("/create", studentController.createStudent);

studentRouter.get("/me/:myId/get", studentController.getMyInfo);

studentRouter.post("/edit/post", studentController.editMyInfo);

studentRouter.get("/classmate/:id/get", studentController.getClassmate);

studentRouter.get("/classmate/list", studentController.getAllClassmates);
