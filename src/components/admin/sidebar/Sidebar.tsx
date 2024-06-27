'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { sidebarLinks } from './sidebarLinks';
import { signOut } from 'next-auth/react';

const Sidebar = () => {
  const pathname = usePathname();

  const isLinkActive = (link: string) => {
    return pathname.split('/').includes(link);
  };

  return (
    <aside className="flex w-[306px] flex-col items-center bg-beige p-[24px] text-violet">
      <Link href="/" className="mb-[32px]">
        <Image src="/images/logo.svg" alt="logo" width={100} height={58} />
      </Link>
      <ul className="flex w-full flex-col items-center">
        {sidebarLinks.map((link, index) => (
          <Link key={index} href={link.href} className="w-full">
            <li
              className={`border-box flex w-full items-center gap-[24px] rounded-3xl border-2 border-transparent py-2 pl-[32px] pr-[16px] hover:border-violet
                ${isLinkActive(link.link) && 'border-violet'} ${index === sidebarLinks.length - 3 ? 'mb-[60px]' : 'mb-[10px]'}`}
            >
              <svg className="h-[30px] w-[30px]">
                <use
                  href={`/icons/admin/sidebar/sprite.svg#${link.icon}`}
                ></use>
              </svg>
              <span className="whitespace-nowrap text-[16px] font-bold">
                {link.name}
              </span>
            </li>
          </Link>
        ))}
      </ul>
      <button
        className="flex w-full items-center justify-center gap-4 rounded-3xl border-2 border-[#e6d57a] px-[20px] py-[12px]"
        onClick={() => signOut({ callbackUrl: '/admin' })}
      >
        <Image
          src={`/icons/admin/sidebar/logout.svg`}
          alt="logout"
          width={25}
          height={25}
        />
        <span className="font-[800]">Вийти</span>
      </button>
    </aside>
  );
};

export default Sidebar;
