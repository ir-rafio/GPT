import { Request, Response } from 'express';
import { handleLibraryError } from '../../utils/error/error.util';
import { Classmate, Me } from '../../utils/types';
import { studentService } from './student.service';

export const studentController = {
  getMyInfo: async (req: Request, res: Response) => {
    const { myId } = req.params;

    try {
      const student: Me = await studentService.getMyInfo(Number(myId));
      return res.status(200).json({ student });
    } catch (error) {
      return handleLibraryError(error, res);
    }
  },

  getClassmate: async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const student: Classmate = await studentService.getClassmate(Number(id));
      return res.status(200).json({ student });
    } catch (error) {
      return handleLibraryError(error, res);
    }
  },

  getAllClassmates: async (req: Request, res: Response) => {
    const { myId } = req.params;

    try {
      const students: Classmate[] = await studentService.getAllClassmates(
        Number(myId)
      );
      return res.status(200).json({ students });
    } catch (error) {
      return handleLibraryError(error, res);
    }
  },
};
