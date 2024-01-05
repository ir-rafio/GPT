import { Nickname } from '@prisma/client';
import { databaseClient } from '../../database';

export const nicknameService = {
  createNickname: async (nickname: Nickname) => {
    const newNickname = await databaseClient.nickname.create({
      data: nickname,
    });
    return newNickname;
  },
};
