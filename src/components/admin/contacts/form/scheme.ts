import { z } from 'zod';

export const contactsValidation = z.object({
  phone: z
    .string()
    .refine((value) => !value.length || /^[\d()+-]+$/.test(value), {
      message: 'Введіть коректну назву документу',
    }),
  email: z.string(),
  address: z.string(),
  facebook: z.string(),
  instagram: z.string(),
});

export type TContactsScheme = z.infer<typeof contactsValidation>;
