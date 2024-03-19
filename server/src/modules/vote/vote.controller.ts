import { Request, Response } from 'express';
import {
  handleClientError,
  handleLibraryError,
} from '../../utils/error/error.util';
import { AddVoteBody } from './vote.schema';
import { voteService } from './vote.service';

export const voteController = {
  addVote: async (req: Request<{}, {}, AddVoteBody>, res: Response) => {
    const { data } = req.body;
    const { vote } = data;

    let newVote;

    try {
      newVote = await voteService.addVote(vote);
    } catch (error) {
      return handleLibraryError(error, res);
    }

    if (!newVote) return handleClientError(500, 'Could not add vote.', res);

    return res.status(200).json({ vote: newVote });
  },
};
