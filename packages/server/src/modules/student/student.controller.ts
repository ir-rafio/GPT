import { Request, Response } from "express";
import {
  handleClientError,
  handleLibraryError
} from "../../utils/error/error.util";
import { Classmate, Me } from "../../utils/types";
import { CreateStudentBody, EditStudentBody } from "./student.schema";
import { studentService } from "./student.service";

export const studentController = {
  createStudent: async (
    req: Request<{}, {}, CreateStudentBody>,
    res: Response
  ) => {
    const { data } = req.body;
    const { student } = data;
    student.id = res.locals.user.studentId;

    let newStudent;

    try {
      newStudent = await studentService.createStudent(student);
    } catch (error) {
      return handleLibraryError(error, res);
    }

    if (!newStudent)
      return handleClientError(500, "Could not add nickname.", res);

    return res.status(201).json({ nickname: newStudent });
  },

  getMyInfo: async (req: Request, res: Response) => {
    const myId = res.locals.user.studentId;

    try {
      const student: Me | null = await studentService.getMyInfo(Number(myId));

      if (!student)
        return handleClientError(500, "Could not find student.", res);

      return res.status(200).json({ student });
    } catch (error) {
      return handleLibraryError(error, res);
    }
  },

  editMyInfo: async (req: Request<{}, {}, EditStudentBody>, res: Response) => {
    const { data } = req.body;
    const { note, tshirtSize } = data;
    const myId = res.locals.user.studentId;

    try {
      const student: Me | null = await studentService.editMyInfo(
        myId,
        note,
        tshirtSize
      );

      if (!student)
        return handleClientError(500, "Could not find student.", res);

      return res.status(200).json({ student });
    } catch (error) {
      return handleLibraryError(error, res);
    }
  },

  getClassmate: async (req: Request, res: Response) => {
    const { id } = req.params;
    const myId = res.locals.user.studentId;
    if (id == myId) {
      return handleClientError(401, "You can't see your own page", res);
    }

    try {
      const student: Classmate | null = await studentService.getClassmate(
        Number(id)
      );

      if (!student)
        return handleClientError(500, "Could not find student.", res);

      return res.status(200).json({ student });
    } catch (error) {
      return handleLibraryError(error, res);
    }
  },

  getAllClassmates: async (req: Request, res: Response) => {
    const myId = res.locals.user.studentId;

    try {
      const students: Classmate[] | null =
        await studentService.getAllClassmates(Number(myId));

      if (!students)
        return handleClientError(500, "Could not find student.", res);

      return res.status(200).json({ students });
    } catch (error) {
      return handleLibraryError(error, res);
    }
  }
};
