import { z } from 'zod';
import { formatBytes } from '@/helpers/formatBytes';

const MAX_FILE_SIZE = 1024 * 1024 * 3;

const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
  'for-url',
];

export const teamValidation = z.object({
  image: z
    .any()
    .refine((value) => value?.length > 0, 'Додайте зображення')
    .refine((value) => {
      value && value?.[0]?.size === 0 && value?.[0]?.type === 'for-url';
      return true;
    })
    .refine(
      (value) => value && value?.[0]?.size <= MAX_FILE_SIZE,
      `Максимальний розмір зображення ${formatBytes(MAX_FILE_SIZE)}`
    )
    .refine(
      (value) => value && ACCEPTED_IMAGE_TYPES.includes(value?.[0]?.type),
      'Оберіть фото в форматі .jpg, .jpeg, .png або .webp.'
    ),
  nameUa: z
    .string()
    .min(3, 'Ім’я має містити мінімум 3 символи')
    .max(40, 'Ім’я має містити максимум 40 символів')
    .refine((value) => /^[а-яА-ЯҐґЄєІіЇї\s\d'’.,:;"()!?-]+$/.test(value), {
      message: 'Введіть коректне ім’я українською мовою',
    }),
  nameEn: z
    .string()
    .min(3, 'Ім’я має містити мінімум 3 символи')
    .max(40, 'Ім’я має містити максимум 40 символів')
    .refine((value) => /^[a-zA-Z\s\d'’.,-:;"()!?-]+$/.test(value), {
      message: 'Введіть коректне ім’я англійською мовою',
    }),
  nameIt: z
    .string()
    .min(3, 'Ім’я має містити мінімум 3 символи')
    .max(40, 'Ім’я має містити максимум 40 символів')
    .refine((value) => /^[a-zA-ZàèéìòùÀÈÉÌÒÙ\s\d'’.,\-:;"()!?]+$/.test(value), {
      message: 'Введіть коректне ім’я італійською мовою',
    }),
});

export type TTeamScheme = z.infer<typeof teamValidation>;
