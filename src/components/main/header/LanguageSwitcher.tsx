import Image from 'next/image';
import { locales } from '@/i18n';
import { usePathname, useRouter } from '@/navigation';
import { useLocale } from 'next-intl';
import { useEffect, useRef, useState } from 'react';

const LanguageSwitcher = () => {
  const router = useRouter();
  const path = usePathname();
  const locale: string = useLocale();
  const [currentLocale, setCurrentLocale] = useState(locale);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const submenuRef = useRef<HTMLDivElement>(null);
  const filteredLocales = locales.filter((item) => item !== currentLocale);

  const handleCheckLocale = (item: string) => {
    setIsOpen(!isOpen);
    setCurrentLocale(item);
    router.replace(path, { locale: item });
  };

  const handleOutsideClick = (event: Event): void => {
    if (
      !submenuRef.current?.contains(event.target as HTMLElement) &&
      !(
        event.target === menuRef.current ||
        menuRef.current?.contains(event.target as HTMLElement)
      )
    ) {
      setIsOpen(false);
    }
  };

  const handleImageClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [isOpen]);

  return (
    <div
      className={`relative min-w-[100px] flex cursor-pointer items-center text-[20px] font-semibold leading-[20px] text-mainViolet`}
    >
      <div
        ref={menuRef}
        onClick={handleImageClick}
        className="flex items-center px-2"
      >
        <div className="font-bold w-[45px]">
          {currentLocale.toUpperCase()}
        </div>
        <div className={`${!isOpen && 'rotate-[180deg]'}`}>
          <Image
            className="w-[24px] font-bold stroke-amber-400"
            src="/images/header/keyboard_arrow_down.svg"
            alt="arrow down"
            width={24}
            height={24}
          />
        </div>
      </div>
      {isOpen && (
        <div
          ref={submenuRef}
          className="flex flex-col justify-around absolute top-full pt-4 px-2 mt-2 bg-bgWhite rounded shadow"
        >
          {filteredLocales.map((item: string) => (
            <div key={item} className="flex">
              <div
                className="cursor-pointer items-center mb-4 w-[45px]"
                onClick={() => handleCheckLocale(item)}
              >
                {item.toUpperCase()}
              </div>
              <div
                key={item}
                className="mb-4"
                onClick={() => handleCheckLocale(item)}
              >
                <Image
                  src={`/icons/header/${item}-flag.svg`}
                  alt={`${item} flag`}
                  width={27}
                  height={20}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
