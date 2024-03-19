import { z } from 'zod';

const tshirtSizeSchema = z.union([
  z.literal('S'),
  z.literal('M'),
  z.literal('L'),
  z.literal('XL'),
  z.literal('XXL'),
]);

export const studentSchema = {
  createStudentSchema: z.object({
    body: z.object({
      data: z.object({
        student: z.object({
          id: z.number(),
          name: z.string(),
          oauthToken: z.string(),
          tshirtSize: tshirtSizeSchema,
          note: z.string(),
        }),
      }),
    }),
  }),

  editStudentSchema: z.object({
    body: z.object({
      data: z.object({
        myId: z.number(),
        tshirtSize: tshirtSizeSchema,
        note: z.string(),
      }),
    }),
  }),
};

export type CreateStudentBody = z.infer<
  typeof studentSchema.createStudentSchema
>['body'];

export type EditStudentBody = z.infer<
  typeof studentSchema.editStudentSchema
>['body'];
