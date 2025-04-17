import { z } from "zod";
const serviceUpdateValidation = z.object({
  body: z.object({
    serviceDate: z.date().optional(),
    completionDate:z.date().optional(),
    description: z.string().email().optional(),
    status: z.enum(['pending', 'in_progress', 'done']).optional(),
  }),
});

export const serviceValidationSchema = { serviceUpdateValidation };