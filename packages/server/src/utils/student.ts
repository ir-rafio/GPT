import { databaseClient } from "@/database";
import { students } from "./information";

export const seedStudents = async () => {
  for (const student of students) {
    await databaseClient.student.upsert({
      where: { id: student.id },
      create: {
        id: student.id,
        name: student.name
      },
      update: {
        name: student.name
      }
    });
  }
};
