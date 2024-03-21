import express, { Response } from "express";
import { SessionRequest } from "supertokens-node/framework/express";
import { verifySession } from "supertokens-node/recipe/session/framework/express";
import UserMetadata from "supertokens-node/recipe/usermetadata";

export const userRouter = express.Router();

userRouter.use(verifySession());

userRouter.get("/data", async (req: SessionRequest, res: Response) => {
  const userId = req.session?.getUserId() as string;
  const { metadata } = await UserMetadata.getUserMetadata(userId);
  return res.status(200).json({ metadata, userId });
});
