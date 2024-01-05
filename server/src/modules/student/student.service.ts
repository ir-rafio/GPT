import { databaseClient } from '../../database';
import { Classmate, Me } from '../../utils/types';

export const studentService = {
  getMyInfo: async (studentId: number): Promise<Me | null> => {
    const student = await databaseClient.student.findUnique({
      where: { id: studentId },
      include: { votes: true, scientist: true },
    });

    if (!student) return null;
    const { id, name, tshirtSize, note, votes, scientist } = student;

    return {
      id,
      name,
      tshirtSize,
      note,
      votes,
      amAScientist: scientist.length === 1,
    };
  },

  getClassmate: async (studentId: number): Promise<Classmate | null> => {
    const student = await databaseClient.student.findUnique({
      where: { id: studentId },
      include: { nicknames: true },
    });

    if (!student) return null;
    return student;
  },

  getAllClassmates: async (studentId: number): Promise<Classmate[] | null> => {
    const students = await databaseClient.student.findMany({
      where: { NOT: { id: studentId } },
      include: { nicknames: true },
    });

    if (!students) return null;
    return students;
  },
};
