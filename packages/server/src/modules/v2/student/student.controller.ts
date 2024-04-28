import { databaseClient } from "@/database";
import { Request, Response } from "express";

export const neoStudentController = {
  getMyInfo: async (req: Request, res: Response) => {
    const id = Number(req.params.myId);
    const student = await databaseClient.studentData.findUnique({
      where: { id: id }
    });

    if (!student) return res.status(404).json({ error: "Student not found." });

    return res.status(200).json({ student });
  }
};
