'use client';

import Sidebar from '@/components/admin/sidebar/Sidebar';
import { AlertWindow } from '@/components/admin/shared/AlertWindow';
import LoginPage from '@/components/admin/authComponents/login/LoginPage';
import { isUserLogined } from '@/components/admin/authComponents/ui/fetchSession';
import { useState, useEffect } from 'react';

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [userIsLogined, setUserIsLogined] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const logined = await isUserLogined();
      setUserIsLogined(logined);
    };

    checkLoginStatus();
  }, []);

  if (!userIsLogined) {
    return <LoginPage />;
  }

  return (
    <div className="flex min-h-[100vh] w-full">
      <Sidebar />
      <div className="flex-1 bg-[#F3F4EE]">
        {children}
        <AlertWindow />
      </div>
    </div>
  );
}
