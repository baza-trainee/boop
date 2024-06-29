'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { locales } from '../../../i18n';
import { useLocale } from 'next-intl';

const LanguageSwitcher: React.FC = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  // Укажите поддерживаемые локали

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const changeLanguage = (newLocale: string) => {
    const segments = pathname.split('/');
    if (locales.includes(segments[1])) {
      segments[1] = newLocale;
    } else {
      segments.unshift(newLocale);
    }
    const newPathname = segments.join('/');
    router.push(newPathname);
  };

  return (
    // <div>
    //   {locales.map((loc) => (
    //     <button key={loc} onClick={() => changeLanguage(loc)}>
    //       {loc.toUpperCase()}
    //     </button>
    //   ))}
    // </div>
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md border-none bg-beige px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          {locale.toUpperCase()}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 111.414 1.414l-4 4a1 1 01-1.414 0l-4-4a1 1 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div
        className="w-54  absolute right-0 mt-2 origin-top-right rounded-md bg-beige shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
      >
        <div className=" py-1" role="none">
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => changeLanguage(loc)}
              className="block w-full px-4 py-2 text-left text-sm text-violet"
              role="menuitem"
            >
              {loc.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
