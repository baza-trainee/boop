import { Metadata } from 'next';
import { Suspense } from 'react';
import { PageProps } from '@/types';
import Loader from '@/components/shared/loader/Loader';
import SchoolPage from '@/components/main/school/SchoolPage';

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return {
    title: `${params.locale === 'it' ? 'BOOP - scuola di clown' : params.locale === 'en' ? 'BOOP - school of clowns' : 'БУП - школа клоунів'} `,
    description: `${params.locale === 'it' ? 'BOOP - scuola di clownerie ospedaliera' : params.locale === 'en' ? 'BOOP - school of hospital clowning' : 'БУП - школа лікарняної клоунади'} `,
  };
}

const School = () => {
  return (
    <Suspense fallback={<Loader />}>
      <SchoolPage />
    </Suspense>
  );
};

export default School;
