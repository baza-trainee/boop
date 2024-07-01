import { z } from 'zod';
import { formatBytes } from '@/helpers/formatBytes';

const MAX_FILE_SIZE = 1024 * 1024;

const ACCEPTED_IMAGE_TYPES = ['application/pdf', 'for-url'];

export const pdfValidation = z.object({
  terms_of_use: z
    .any()
    .refine((value) => value?.length > 0, 'Додайте документ')
    .refine((value) => {
      value && value[0]?.size === 0 && value[0]?.type === 'for-url';
      return true;
    })
    .refine(
      (value) => value?.[0]?.size <= MAX_FILE_SIZE,
      `Максимальний розмір документу ${formatBytes(MAX_FILE_SIZE)}`
    )
    .refine(
      (value) => ACCEPTED_IMAGE_TYPES.includes(value?.[0]?.type),
      'Документ має бути в форматі .pdf'
    ),
  privacy_policy: z
    .any()
    .refine((value) => value?.length > 0, 'Додайте документ')
    .refine((value) => {
      value && value[0]?.size === 0 && value[0]?.type === 'for-url';
      return true;
    })
    .refine(
      (value) => value?.[0]?.size <= MAX_FILE_SIZE,
      `Максимальний розмір документу ${formatBytes(MAX_FILE_SIZE)}`
    )
    .refine(
      (value) => ACCEPTED_IMAGE_TYPES.includes(value?.[0]?.type),
      'Документ має бути в форматі .pdf'
    ),
  regulations: z
    .any()
    .refine((value) => value?.length > 0, 'Додайте документ')
    .refine((value) => {
      value && value[0]?.size === 0 && value[0]?.type === 'for-url';
      return true;
    })
    .refine(
      (value) => value?.[0]?.size <= MAX_FILE_SIZE,
      `Максимальний розмір документу ${formatBytes(MAX_FILE_SIZE)}`
    )
    .refine(
      (value) => ACCEPTED_IMAGE_TYPES.includes(value?.[0]?.type),
      'Документ має бути в форматі .pdf'
    ),
  accounting: z
    .any()
    .refine((value) => value?.length > 0, 'Додайте документ')
    .refine((value) => {
      value && value[0]?.size === 0 && value[0]?.type === 'for-url';
      return true;
    })
    .refine(
      (value) => value?.[0]?.size <= MAX_FILE_SIZE,
      `Максимальний розмір документу ${formatBytes(MAX_FILE_SIZE)}`
    )
    .refine(
      (value) => ACCEPTED_IMAGE_TYPES.includes(value?.[0]?.type),
      'Документ має бути в форматі .pdf'
    ),
});

export type TDocumentScheme = z.infer<typeof pdfValidation>;
