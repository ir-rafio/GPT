import { z } from 'zod';

export const voteSchema = {
  addVoteSchema: z.object({
    body: z.object({
      data: z.object({
        vote: z.object({
          name: z.string(),
          voter: z.number(),
          receiver: z.number(),
        }),
      }),
    }),
  }),
};

export type AddVoteBody = z.infer<typeof voteSchema.addVoteSchema>['body'];
