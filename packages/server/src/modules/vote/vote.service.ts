import { Vote } from "@prisma/client";
import { databaseClient } from "../../database";

export const voteService = {
  addVote: async (vote: Omit<Vote, "updatedAt">): Promise<Vote> => {
    const { name, voter, receiver } = vote;

    const newVote = await databaseClient.vote.upsert({
      where: { voter_receiver: { voter, receiver } },
      update: { name },
      create: { ...vote }
    });
    return newVote;
  }
};
