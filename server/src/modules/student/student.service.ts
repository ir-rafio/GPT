import { databaseClient } from '../../database';
import { Classmate, Me } from '../../utils/types';

export const StudentService = {
  getMyInfo: async (studentId: number): Promise<Me> => {
    const student = await databaseClient.student.findUnique({
      where: { id: studentId },
      include: { votes: true, scientist: true },
    });

    if (!student) throw ''; // TODO: Add and handle error message.
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

  getClassmate: async (studentId: number): Promise<Classmate> => {
    const student = await databaseClient.student.findUnique({
      where: { id: studentId },
      include: { nicknames: true },
    });

    if (!student) throw ''; // TODO: Add and handle error message.
    return student;
  },

  getAllClassmates: async (studentId: number): Promise<Classmate[]> => {
    const students = await databaseClient.student.findMany({
      where: { NOT: { id: studentId } },
      include: { nicknames: true },
    });

    if (!students) throw ''; // TODO: Add and handle error message.
    return students;
  },
};
