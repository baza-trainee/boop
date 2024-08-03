/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { Pathnames } from 'next-intl/routing';

// Can be imported from a shared config
export const locales = ['ua', 'en', 'it'] as const;

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  // const baseLocale = new Intl.Locale(locale).baseName;
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});

export const localePrefix = undefined;

export const pathnames = {
  '/': '/',
  '/about': '/about',
  '/school': '/school',
  '/contacts': '/contacts',
} satisfies Pathnames<typeof locales>;
