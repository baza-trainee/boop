import { Suspense } from 'react';
import Loader from '@/components/shared/loader/Loader';
import PdfViewer from '@/components/main/pdf-viewer/PdfViewer';

const DocsPage = ({ params }: { params: { title: string } }) => {
  return (
    <Suspense fallback={<Loader />}>
      <PdfViewer document={params.title} />
    </Suspense>
  );
};

export default DocsPage;
