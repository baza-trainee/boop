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

export const blogValidation = z.object({
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
  titleUA: z
    .string()
    .min(5, 'Назва статті має містити мінімум 5 символів')
    .max(150, 'Назва статті має містити максимум 150 символів')
    .refine((value) => /^[a-zA-Zа-яА-ЯҐґЄєІіЇї\d\s\W]+$/.test(value), {
      message: 'Введіть коректну назву українською мовою',
    }),
  titleEN: z
    .string()
    .min(5, 'Назва статті має містити мінімум 5 символів')
    .max(150, 'Назва статті має містити максимум 150 символів')
    .refine(
      (value) =>
        /^[a-zA-Z\d\s.,?!'";:()\-@#$%^&*[\]{}<>+=_~`|\\/]+$/.test(value),
      {
        message: 'Введіть коректну назву англійською мовою',
      }
    ),
  titleIT: z
    .string()
    .min(5, 'Назва новини має містити мінімум 5 символів')
    .max(150, 'Назва новини має містити максимум 150 символів')
    .refine(
      (value) =>
        /^[a-zA-ZàèéìòùÀÈÉÌÒÙçÇ\d\s.,?!'";:()\-@#$%^&*[\]{}<>+=_~`|\\/]+$/.test(
          value
        ),
      {
        message: 'Введіть коректну назву італійською мовою',
      }
    ),
  textUA: z
    .string()
    .min(300, 'Текст статті має містити мінімум 300 знаків')
    .max(9000, 'Текст статті  має містити максимум 9000 знаків')
    .refine((value) => /^[a-zA-Zа-яА-ЯҐґЄєІіЇї\d\s\W]+$/.test(value), {
      message: 'Введіть коректний текст українською мовою',
    }),
  textEN: z
    .string()
    .min(300, 'Текст статті має містити мінімум 300 знаків')
    .max(9000, 'Текст статті  має містити максимум 9000 знаків')
    .refine(
      (value) =>
        /^[a-zA-Z\d\s.,?!‘’'";:()\-@#$%^&*[\]{}<>+=_~`|\\/]+$/.test(value),
      {
        message: 'Введіть коректний текст англійською мовою',
      }
    ),
  textIT: z
    .string()
    .min(300, 'Текст статті має містити мінімум 300 знаків')
    .max(9000, 'Текст статті має містити максимум 9000 знаків')
    .refine(
      (value) =>
        /^[a-zA-ZàèéìòùÀÈÉÌÒÙçÇ\d\s.,?!‘’'";:()\-@#$%^&*[\]{}<>+=_~`|\\/]+$/.test(
          value
        ),
      {
        message: 'Введіть коректний текст італійською мовою',
      }
    ),
});

export type TBlogScheme = z.infer<typeof blogValidation>;
