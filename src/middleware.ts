/* eslint-disable import/no-anonymous-default-export */
import { LocalePrefix } from 'next-intl/routing';
import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { locales, pathnames } from './i18n';

const nextIntlMiddleware = createMiddleware({
  // A list of all locales that are supported
  defaultLocale: 'ua',
  locales,
  pathnames,
  localeDetection: false,
  localePrefix: 'as-needed' satisfies LocalePrefix,
});

export default function (req: NextRequest): NextResponse {
  return nextIntlMiddleware(req);
}

export const config = {
  // Match only internationalized pathnames but exclude API routes
  matcher: [
    '/',
    '/(ua|en|it)/:path*',
    '/((?!api|_next|_vercel|public|images|icons|.*\\..*).*)',
  ],
};
