import { z } from "zod";

export const commentSchema = {
  createCommentSchema: z.object({
    body: z.object({
      data: z.object({
        comment: z.object({
          text: z.string(),
          sender: z.number(),
          receiver: z.number()
        })
      })
    })
  }),

  deleteCommentSchema: z.object({
    query: z.object({
      data: z.object({
        myId: z.number(),
        commentId: z.string()
      })
    })
  }),

  editCommentSchema: z.object({
    body: z.object({
      data: z.object({
        myId: z.number(),
        commentId: z.string(),
        text: z.string()
      })
    })
  })
};

export type CreateCommentBody = z.infer<
  typeof commentSchema.createCommentSchema
>["body"];

export type DeleteCommentQuery = z.infer<
  typeof commentSchema.deleteCommentSchema
>["query"];

export type EditCommentBody = z.infer<
  typeof commentSchema.editCommentSchema
>["body"];
