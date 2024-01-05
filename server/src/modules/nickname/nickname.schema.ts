import { z } from 'zod';

export const nicknameSchema = {
  createNicknameSchema: z.object({
    body: z.object({
      data: z.object({
        nickname: z.object({
          name: z.string(),
          studentId: z.number(),
        }),
      }),
    }),
  }),
};

export type CreateNicknameBody = z.infer<
  typeof nicknameSchema.createNicknameSchema
>['body'];
