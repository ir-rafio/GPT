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

    let newnickname;

    try {
      newnickname = await nicknameService.createNickname(nickname);
    } catch (error) {
      return handleLibraryError(error, res);
    }

    if (!newnickname)
      return handleClientError(500, 'Could not add nickname.', res);

    return res.status(201).json({ nickname: newnickname });
  },
};
