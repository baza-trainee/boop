'use client';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const isAdminPage =
    pathname.split('/').includes('admin') ||
    pathname.split('/').includes('login');

  if (isAdminPage) return null;

  return (
    <div className="container flex h-[100px] w-full items-center bg-beige text-violet">
      Header
    </div>
  );
};

export default Header;
