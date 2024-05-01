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
  console.log(nicknames.length);
  let missingId = [];
  for (const nickname of nicknames) {
    const { name, sender, receiver } = nickname;
    try {
      await databaseClient.nickname.upsert({
        where: { name_receiver: { name, receiver } },
        update: { sender },
        create: { ...nickname }
      });
    } catch (error) {
      missingId.push(receiver);
      console.log(nickname);
      // console.log(error);
    }
  }
  const unique = [...new Set(missingId)];
  for (const id of unique) {
    console.log(id);
  }
};
