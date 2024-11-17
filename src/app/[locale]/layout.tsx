import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Raleway, Red_Hat_Display } from 'next/font/google';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { PageProps } from '@/types';

import StoreProvider from '@/components/providers/StoreProvider';
import Header from '@/components/main/header/Header';
import Footer from '@/components/main/footer/Footer';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';

const raleway = Raleway({
  weight: '400',
  subsets: ['latin', 'cyrillic'],
  variable: '--font-raleway',
});

const redhat = Red_Hat_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-redhat',
});

const groppled = localFont({
  src: [
    {
      path: '../fonts/groppled.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/groppled.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/groppled.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-groppled',
});

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return {
    title: {
      default: `${params.locale === 'ua'
        ? 'БУП - бюро усмішок і підтримки'
        : params.locale === 'en'
          ? 'BOOP - bureau of smiles and support'
          : 'BOOP - ufficio dei sorrisi e del supporto'
        }`,
      template: '%s',
    },
    description: `${params.locale === 'ua'
      ? 'Програма емоційної підтримки дітей у лікарнях by @tabletochki'
      : params.locale === 'en'
        ? 'Program of emotional support for children in hospitals by @tabletochki'
        : 'Programma di sostegno emotivo per i bambini negli ospedali di @tabletochki'
      }`,
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <StoreProvider>
      <html lang={locale}>
        <body
          className={`${raleway.variable} ${groppled.variable} ${redhat.variable}`}
        >
          <NextIntlClientProvider messages={messages} locale={locale}>
            <NextTopLoader
              color="#958ac4"
              height={2}
              showSpinner={false}
              easing="ease"
              speed={200}
              shadow="0 0 10px #958ac4,0 0 5px #958ac4"
            />
            <div className="wrapper font-raleway">
              <Header />
              {children}
              <Footer />
            </div>
          </NextIntlClientProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
