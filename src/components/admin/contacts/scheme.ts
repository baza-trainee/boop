import { z } from 'zod';
import { EMAIL_PATTERN } from '@/constants';

export const contactsValidation = z.object({
  addressUa: z
    .string({ required_error: 'Поле повинно бути заповнене' })
    .min(1, 'Поле повинно бути заповнене')
    .refine(
      (value) => !value || /^[а-яА-ЯҐґЄєІіЇї\s\d'’.,-_:;"()!?]+$/.test(value),
      {
        message: 'Введіть коректну адресу українською мовою',
      }
    ),
  addressEn: z
    .string({ required_error: 'Поле повинно бути заповнене' })
    .min(1, 'Поле повинно бути заповнене')
    .refine((value) => !value || /^[a-zA-Z\s\d'’.,-_:;"()!?]+$/.test(value), {
      message: 'Введіть коректну адресу англійською мовою',
    }),
  addressIt: z
    .string({ required_error: 'Поле повинно бути заповнене' })
    .min(1, 'Поле повинно бути заповнене')
    .refine(
      (value) =>
        !value || /^[a-zA-ZàèéìòùÀÈÉÌÒÙ\s\d'’.,-_:;"()!?]+$/.test(value),
      {
        message: 'Введіть коректну адресу італійською мовою',
      }
    ),
  email: z
    .string({ required_error: 'Поле повинно бути заповнене' })
    .min(1, 'Поле повинно бути заповнене')
    .refine((value) => !value || EMAIL_PATTERN.test(value), {
      message: 'Введіть коректну адресу електронної пошти',
    }),
  phone: z
    .string({ required_error: 'Поле повинно бути заповнене' })
    .min(1, 'Поле повинно бути заповнене'),
  facebook: z
    .string({ required_error: 'Поле повинно бути заповнене' })
    .min(1, 'Поле повинно бути заповнене')
    .refine(
      (value) =>
        !value ||
        /^(https?:\/\/)?(www\.)?facebook\.com\/[a-zA-Z0-9./-]{5,}(\?.*)?$/.test(
          value
        ),
      {
        message: 'Введіть дійсний URL Facebook',
      }
    ),
  instagram: z
    .string({ required_error: 'Поле повинно бути заповнене' })
    .min(1, 'Поле повинно бути заповнене')
    .refine(
      (value) =>
        !value ||
        /^(https?:\/\/)?(www\.)?instagram\.com\/[a-zA-Z0-9_.]{1,30}\/?$/.test(
          value
        ),
      {
        message: 'Введіть дійсний URL Instagram',
      }
    ),
});

export type TContactsScheme = z.infer<typeof contactsValidation>;
