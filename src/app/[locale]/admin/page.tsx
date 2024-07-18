'use client';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';

export default function AdminPage() {
  useEffect(() => {
    redirect('/admin/counter');
  }, []);
}
