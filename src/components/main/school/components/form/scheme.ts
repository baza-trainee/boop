import { EMAIL_PATTERN } from '@/constants';
import { z } from 'zod';

export const applicationValidation = z.object({
  name: z
    .string()
    .min(2, 'Form.nameMin')
    .max(30, 'Form.nameMax')
    .refine(
      (value) =>
        /^(?![\d\s'`’.,:;"()!?-]+$)[a-zA-ZàèéìòùÀÈÉÌÒÙа-яА-ЯҐґЄєІіЇї\d\s'`’.,:;"()!?-]+$/.test(
          value
        ),
      {
        message: 'Form.invalidName',
      }
    ),
  phone: z
    .string({ required_error: 'Form.required' })
    .min(1, 'Form.required')
    .refine((value) => /^\+380\d{9}$/.test(value), {
      message: 'Form.invalidPhone',
    }),
  email: z
    .string({ required_error: 'Form.required' })
    .min(1, 'Form.required')
    .refine((value) => !value || EMAIL_PATTERN.test(value), {
      message: 'Form.invalidEmail',
    }),
  social: z
    .string()
    .refine(
      (value) =>
        !value ||
        /https?:\/\/(www\.)?(facebook|instagram|twitter|linkedin|youtube)\.com\/[A-Za-z0-9_.-]+\/?/.test(
          value
        ),
      {
        message: 'Form.invalidLink',
      }
    )
    .optional(),
});

export type TApplication = z.infer<typeof applicationValidation>;
