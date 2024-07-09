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

export const testimonialValidation = z.object({
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
    .min(2, 'Ім’я має містити мінімум 2 символи')
    .max(20, 'Ім’я має містити максимум 20 символів')
    .refine((value) => /^[а-яА-ЯҐґЄєІіЇї\s\d'`’.,:;"()!?-]+$/.test(value), {
      message: 'Введіть коректне ім’я українською мовою',
    }),
  nameEn: z
    .string()
    .min(2, 'Ім’я має містити мінімум 2 символи')
    .max(20, 'Ім’я має містити максимум 20 символів')
    .refine((value) => /^[a-zA-Z\s\d'`’.,-:;"()!?-]+$/.test(value), {
      message: 'Введіть коректне ім’я англійською мовою',
    }),
  nameIt: z
    .string()
    .min(2, 'Ім’я має містити мінімум 2 символи')
    .max(20, 'Ім’я має містити максимум 20 символів')
    .refine(
      (value) => /^[a-zA-ZàèéìòùÀÈÉÌÒÙ\s\d'`’.,\-:;"()!?]+$/.test(value),
      {
        message: 'Введіть коректне ім’я італійською мовою',
      }
    ),
  reviewUa: z
    .string()
    .min(20, 'Довжина тексту має бути мінімум 20 символів')
    .max(300, 'Довжина тексту має бути максимум 300 символів')
    .refine((value) => /^[а-яА-ЯҐґЄєІіЇї\s\d'`’.,:;"()!?-]+$/.test(value), {
      message: 'Введіть коректний текст українською мовою',
    }),
  reviewEn: z
    .string()
    .min(20, 'Довжина тексту має бути мінімум 20 символів')
    .max(300, 'Довжина тексту має бути максимум 300 символів')
    .refine((value) => /^[a-zA-Z\s\d'`’.,-:;"()!?-]+$/.test(value), {
      message: 'Введіть коректний текст англійською мовою',
    }),
  reviewIt: z
    .string()
    .min(20, 'Довжина тексту має бути мінімум 20 символів')
    .max(300, 'Довжина тексту має бути максимум 300 символів')
    .refine(
      (value) => /^[a-zA-ZàèéìòùÀÈÉÌÒÙ\s\d'`’.,\-:;"()!?]+$/.test(value),
      {
        message: 'Введіть коректний текст італійською мовою',
      }
    ),
});

export type TTestimonialScheme = z.infer<typeof testimonialValidation>;
