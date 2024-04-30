import { Request, Response } from "express";
import {
  handleClientError,
  handleLibraryError
} from "../../utils/error/error.util";
import { AddVoteBody } from "./vote.schema";
import { voteService } from "./vote.service";

export const voteController = {
  addVote: async (req: Request<{}, {}, AddVoteBody>, res: Response) => {
    const { data } = req.body;
    const { vote, myId } = data;
    const { voter } = vote;

    if (voter !== myId)
      return handleClientError(
        401,
        "You are not authorized to delete this comment.",
        res
      );

    let newVote;

    try {
      newVote = await voteService.addVote(vote);
    } catch (error) {
      return handleLibraryError(error, res);
    }

    if (!newVote) return handleClientError(500, "Could not add vote.", res);

    return res
      .status(200)
      .json({ vote: newVote, message: "Successfully added vote" });
  },

  deleteVote: async (req: Request<{}, {}, AddVoteBody>, res: Response) => {
    const { data } = req.body;
    const { vote, myId } = data;
    const { voter } = vote;

    if (voter !== myId)
      return handleClientError(
        401,
        "You are not authorized to delete this comment.",
        res
      );

    let deletedVote;

    try {
      deletedVote = await voteService.deleteVote(vote);
    } catch (error) {
      return handleLibraryError(error, res);
    }

    if (!deletedVote)
      return handleClientError(500, "Could not delete vote.", res);

    return res
      .status(200)
      .json({ vote: deletedVote, message: "Successfully deleted vote" });
  }
};
