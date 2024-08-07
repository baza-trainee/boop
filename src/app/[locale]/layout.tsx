import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Raleway, Red_Hat_Display } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import StoreProvider from '@/components/providers/StoreProvider';
import Header from '@/components/main/header/Header';
import Footer from '@/components/main/footer/Footer';
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
      path: '../../../public/fonts/groppled.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-groppled',
});

export const metadata: Metadata = {
  title: 'БУП - бюро усмішок і підтримки',
  description: 'Програма емоційної підтримки дітей у лікарнях by @tabletochki_',
};

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
