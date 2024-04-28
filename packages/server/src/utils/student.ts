import { databaseClient } from "@/database";

export const seedStudents = async () => {
  const students = [
    {
      id: 190041101,
      name: "Md. Tariquzzman"
    },
    {
      id: 190041102,
      name: "Prerana Tarannum"
    },
    {
      id: 190041103,
      name: "Tanvir Hossain Saikat"
    },
    {
      id: 190041104,
      name: "Alif Arshad Bakshi"
    },
    {
      id: 190041105,
      name: "Sadia Alam Nishita"
    }
  ];

  for (const student of students) {
    await databaseClient.studentData.upsert({
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
