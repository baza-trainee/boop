'use client';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Header = () => {
  const pathname = usePathname();
  const isAdminPage =
    pathname.split('/').includes('admin') ||
    pathname.split('/').includes('login');

  if (isAdminPage) return null;

  return (
    <div className="container flex h-[100px] w-full items-center justify-between bg-beige text-violet">
      <div className="w-1/5">
        <a href="/" title="Бюро усмішок і підтримки">
          <Image
            src="/images/logo.svg"
            alt="Бюро усмішок і підтримки"
            width={86}
            height={50}
          />
        </a>
      </div>
      <nav className="relative z-10 flex w-3/5 justify-end overflow-y-auto whitespace-nowrap pr-11 font-groppled text-xl font-bold leading-5">
        <ul className="flex items-center">
          <li className="pl-4 pr-5">
            <a href="/" title="Головна">
              Головна
            </a>
          </li>
          <li className="pl-4 pr-5">
            <a href="/about" title="Про нас">
              Про нас
            </a>
          </li>
          <li className="pl-4 pr-5">
            <a href="/school" title="Школа Клоунів">
              Школа Клоунів
            </a>
          </li>
          <li className="pl-4 pr-5">
            <a href="/contacts" title="Контакти">
              Контакти
            </a>
          </li>
        </ul>
      </nav>
      <div className="relative z-10 -ml-5 flex w-1/5 items-center justify-end pl-8 font-raleway">
        <button className="flex items-center pr-2 font-semibold">
          UA
          <Image
            className="w-6"
            src="/images/keyboard_arrow_down.svg"
            alt="logo"
            width={86}
            height={50}
          />
        </button>
        <button className="relative z-10 -mr-11 ml-1 whitespace-nowrap rounded-full bg-red px-4 py-3 text-xl font-bold leading-5 text-white">
          Підтримати проєкт
        </button>
      </div>
    </div>
  );
};

export default Header;
