import { z } from 'zod';

export const studentSchema = {
  editStudentSchema: z.object({
    body: z.object({
      data: z.object({
        myId: z.number(),
        note: z.string(),
        tshirtSize: z.union([
          z.literal('S'),
          z.literal('M'),
          z.literal('L'),
          z.literal('XL'),
          z.literal('XXL'),
        ]),
      }),
    }),
  }),
};

export type EditStudentBody = z.infer<
  typeof studentSchema.editStudentSchema
>['body'];
