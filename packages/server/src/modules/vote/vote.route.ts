import { Router } from "express";
import { voteController } from "./vote.controller";

export const voteRouter = Router();

voteRouter.put("/add", voteController.addVote);
voteRouter.put("/delete", voteController.deleteVote);
