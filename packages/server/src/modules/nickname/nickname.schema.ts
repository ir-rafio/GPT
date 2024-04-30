import { z } from "zod";

export const nicknameSchema = {
  createNicknameSchema: z.object({
    body: z.object({
      data: z.object({
        nickname: z.object({
          name: z.string(),
          sender: z.number(),
          receiver: z.number()
        })
      })
    })
  }),

  deleteNicknameSchema: z.object({
    body: z.object({
      data: z.object({
        myId: z.number(),
        name: z.string(),
        receiver: z.number()
      })
    })
  })
};

export type CreateNicknameBody = z.infer<
  typeof nicknameSchema.createNicknameSchema
>["body"];

export type DeleteNicknameBody = z.infer<
  typeof nicknameSchema.deleteNicknameSchema
>["body"];
