import { z } from 'zod';

const emailPattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const contactsValidation = z.object({
  address: z
    .string({ required_error: 'Поле повинно бути заповнене' })
    .min(1, 'Поле повинно бути заповнене')
    .refine(
      (value) =>
        !value || /^[а-яА-ЯҐґЄєІіЇїa-zA-Z\s\d'’.,-_:;"()!?]+$/.test(value),
      {
        message: 'Введіть коректну адресу',
      }
    ),
  email: z
    .string({ required_error: 'Поле повинно бути заповнене' })
    .min(1, 'Поле повинно бути заповнене')
    .refine((value) => !value || emailPattern.test(value), {
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
