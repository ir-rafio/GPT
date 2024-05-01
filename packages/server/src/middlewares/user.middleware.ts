import { Request, Response, NextFunction } from "express";

import { handleClientError } from "@/utils/error/error.util";
import Session from "supertokens-node/recipe/session";

export const authenticateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const session = await Session.getSession(req, res);
    if (!session) {
      return handleClientError(401, "Invalid session", res);
    }
    const userId = session.getUserId();
    const accessTokenPayload = session.getAccessTokenPayload();
    res.locals.user = {
      userId,
      name: accessTokenPayload.name,
      studentId: accessTokenPayload.studentId
    };
    return next();
  } catch (err) {
    return handleClientError(500, "Couldnt authenticate user", res);
  }
};
