import { Nickname } from "@prisma/client";
import { databaseClient } from "../../database";

export const nicknameService = {
  createNickname: async (nickname: Nickname): Promise<Nickname> => {
    const newNickname = await databaseClient.nickname.create({
      data: nickname
    });
    return newNickname;
  },

  deleteNickname: async (name: string, receiver: number) => {
    await databaseClient.nickname.delete({
      where: { name_receiver: { name, receiver } }
    });
  },

  getSender: async (name: string, receiver: number): Promise<number | null> => {
    const nickname = await databaseClient.nickname.findUnique({
      where: { name_receiver: { name, receiver } }
    });

    if (!nickname) return null;
    const { sender } = nickname;
    return sender;
  },

  countVotes: async (name: string, receiver: number): Promise<number> => {
    const count = await databaseClient.vote.count({
      where: { name, receiver }
    });
    return count;
  }
};
