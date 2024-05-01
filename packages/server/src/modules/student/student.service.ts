import { Student } from "@prisma/client";
import { databaseClient } from "../../database";
import { Classmate, Me } from "../../utils/types";

export const studentService = {
  createStudent: async (student: Student): Promise<Me> => {
    const newStudent = await databaseClient.student.create({
      data: student
    });

    const { id, name, tshirtSize, note } = newStudent;

    return {
      id,
      name,
      tshirtSize,
      note,
      votes: [],
      turnedIn: false
    };
  },

  getMyInfo: async (studentId: number): Promise<Me | null> => {
    const student = await databaseClient.student.findUnique({
      where: { id: studentId },
      include: { votes: true, nerd: true }
    });

    if (!student) return null;
    const { id, name, tshirtSize, note, votes, nerd } = student;

    return {
      id,
      name,
      tshirtSize,
      note,
      votes,
      turnedIn: nerd.length === 1
    };
  },

  editMyInfo: async (
    studentId: number,
    note: string,
    tshirtSize: string
  ): Promise<Me | null> => {
    await databaseClient.student.update({
      where: { id: studentId },
      data: { note, tshirtSize }
    });

    const student = await databaseClient.student.findUnique({
      where: { id: studentId },
      include: { votes: true, nerd: true }
    });

    if (!student) return null;
    const { id, name, votes, nerd } = student;

    return {
      id,
      name,
      tshirtSize,
      note,
      votes,
      turnedIn: nerd.length === 1
    };
  },

  getClassmate: async (studentId: number): Promise<Classmate | null> => {
    const student = await databaseClient.student.findUnique({
      where: { id: studentId },
      include: {
        nicknames: {
          include: {
            votes: true
          }
        },
        comments: true
      }
    });

    if (!student) return null;

    const sortedNicknames = student.nicknames.sort((a, b) => {
      return b.votes.length - a.votes.length;
    });

    student.nicknames = sortedNicknames;

    return student;
  },

  getAllClassmates: async (studentId: number): Promise<Classmate[] | null> => {
    const students = await databaseClient.student.findMany({
      where: { NOT: { id: studentId } },
      include: { nicknames: true, comments: true }
    });

    if (!students) return null;
    return students;
  }
};
