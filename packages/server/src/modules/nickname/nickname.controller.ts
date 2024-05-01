import { Request, Response } from "express";
import {
  handleClientError,
  handleLibraryError
} from "../../utils/error/error.util";
import { CreateNicknameBody, DeleteNicknameBody } from "./nickname.schema";
import { nicknameService } from "./nickname.service";

export const nicknameController = {
  createNickname: async (
    req: Request<{}, {}, CreateNicknameBody>,
    res: Response
  ) => {
    const { data } = req.body;
    const { nickname } = data;
    const myId = res.locals.user.studentId;

    let newNickname;

    try {
      newNickname = await nicknameService.createNickname({
        ...nickname,
        sender: myId
      });
    } catch (error) {
      return handleLibraryError(error, res);
    }

    if (!newNickname)
      return handleClientError(500, "Could not add nickname.", res);

    return res.status(201).json({ nickname: newNickname });
  },

  deleteNickname: async (
    req: Request<{}, {}, DeleteNicknameBody>,
    res: Response
  ) => {
    const { data } = req.body;
    const { name, receiver } = data;
    const myId = res.locals.user.studentId;

    try {
      const sender = await nicknameService.getSender(name, receiver);

      if (!sender)
        return handleClientError(500, "Could not delete nickname.", res);
      if (sender !== myId)
        return handleClientError(
          401,
          "You are not authorized to delete this nickname.",
          res
        );

      const voteCount = await nicknameService.countVotes(name, receiver);
      if (voteCount > 0)
        return handleClientError(
          401,
          "This nickname can not be deleted because it has votes.",
          res
        );

      await nicknameService.deleteNickname(name, receiver);
    } catch (error) {
      return handleLibraryError(error, res);
    }

    return res.status(200).json({ message: "Successfully deleted nickname" });
  }
};
