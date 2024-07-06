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

export const logoValidation = z.object({
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
  urlLink: z
    .string()
    .min(10, 'Мінімальна кількість символів 10')
    .max(2048, 'Максимальна кількість символів 2048')
    .url('Некоректний формат посилання(http:)'),
});

export type TLogoScheme = z.infer<typeof logoValidation>;

export const logoEditValidation = z
  .object({
    image: z
      .any()
      // .refine(
      //   (value) =>
      //     value === undefined ||
      //     (Array.isArray(value) && value.length === 0) ||
      //     (Array.isArray(value) &&
      //       value.length > 0 &&
      //       value[0]?.size <= MAX_FILE_SIZE),
      //   {
      //     message: `Максимальний розмір зображення ${formatBytes(MAX_FILE_SIZE)}`,
      //     path: ['image'],
      //   }
      // )
      // .refine(
      //   (value) =>
      //     value === undefined ||
      //     (Array.isArray(value) && value.length === 0) ||
      //     ACCEPTED_IMAGE_TYPES.includes(value[0]?.type),
      //   {
      //     message: 'Оберіть фото в форматі .jpg, .jpeg, .png або .webp.',
      //     path: ['image'],
      //   }
      // )
      .optional(),
    urlLink: z.string().optional(),
    // .refine(
    //   (value) =>
    //     value === undefined ||
    //     value === '' ||
    //     (value.length >= 10 &&
    //       value.length <= 2048 &&
    //       /^https?:\/\/\S+$/.test(value)),
    //   {
    //     message:
    //       'Некоректний формат посилання(http:), мінімальна кількість символів 10, максимальна 2048',
    //     path: ['urlLink'],
    //   }
    // ),
  })
  .refine(
    (data) =>
      (data.image && data.image.length > 0) ||
      (data.urlLink && data.urlLink.length > 0),
    'Необхідно додати або зображення, або посилання'
  );

export type TLogoEditScheme = z.infer<typeof logoEditValidation>;
