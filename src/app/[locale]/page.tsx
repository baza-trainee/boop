import { Suspense } from 'react';
import MainPage from '@/components/main/main-page/MainPage';
import Loader from '@/components/shared/loader/Loader';

export default function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <MainPage />
    </Suspense>
  );
}
