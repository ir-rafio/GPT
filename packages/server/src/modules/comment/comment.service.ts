import { Comment } from "@prisma/client";
import { databaseClient } from "../../database";

export const commentService = {
  createComment: async (
    comment: Omit<Comment, "id" | "createdAt" | "updatedAt">
  ): Promise<Comment> => {
    const newComment = await databaseClient.comment.create({
      data: comment
    });
    return newComment;
  },

  deleteComment: async (id: string) => {
    await databaseClient.comment.delete({
      where: { id }
    });
  },

  editComment: async (id: string, text: string): Promise<Comment | null> => {
    const comment = await databaseClient.comment.update({
      where: { id },
      data: { text }
    });

    if (!comment) return null;
    return comment;
  },

  getSender: async (id: string): Promise<number | null> => {
    const comment = await databaseClient.comment.findUnique({
      where: { id }
    });

    if (!comment) return null;
    const { sender } = comment;
    return sender;
  }
};
