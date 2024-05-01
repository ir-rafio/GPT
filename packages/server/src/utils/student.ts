import { databaseClient } from "@/database";
import { nicknames, students } from "./information";

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

export const seedNicknames = async () => {
  for (const nickname of nicknames) {
    const { name, sender, receiver } = nickname;
    await databaseClient.nickname.upsert({
      where: { name_receiver: { name, receiver } },
      update: { sender },
      create: { ...nickname }
    });
  }
};
