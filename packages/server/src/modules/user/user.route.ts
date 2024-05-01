import { authenticateUser } from "@/middlewares/user.middleware";
import express, { Response } from "express";

export const userRouter = express.Router();

userRouter.use(authenticateUser);

userRouter.get("/data", async (_, res: Response) => {
  return res.status(200).json({ ...res.locals });
});
