import express, { Response } from "express";
import { authenticateUser } from "./user.middleware";

export const userRouter = express.Router();

userRouter.use(authenticateUser);

userRouter.get("/data", async (_, res: Response) => {
  const userId = res.locals.userId;
  return res.status(200).json({ userId });
});
