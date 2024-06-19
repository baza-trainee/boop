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

export const photoValidation = z.object({
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
  location: z.string().min(1, 'Оберіть місце розташування фото'),
});

export type TPhotoScheme = z.infer<typeof photoValidation>;
