import Sidebar from '@/components/admin/Sidebar';

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-[100vh] w-full">
      <Sidebar />
      <div className="flex-1">{children}</div>
    </div>
  );
}
