import { Request, Response } from 'express';
import {
  handleClientError,
  handleLibraryError,
} from '../../utils/error/error.util';
import { CreateNicknameBody } from './nickname.schema';
import { nicknameService } from './nickname.service';

export const nicknameController = {
  createNickname: async (
    req: Request<{}, {}, CreateNicknameBody>,
    res: Response
  ) => {
    const { data } = req.body;
    const { nickname } = data;

    let newNickname;

    try {
      newNickname = await nicknameService.createNickname(nickname);
    } catch (error) {
      return handleLibraryError(error, res);
    }

    if (!newNickname)
      return handleClientError(500, 'Could not add nickname.', res);

    return res.status(201).json({ nickname: newNickname });
  },
};
