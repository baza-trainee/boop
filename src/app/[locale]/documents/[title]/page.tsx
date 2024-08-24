import PdfViewer from '@/components/main/pdf-viewer/PdfViewer';

const DocsPage = ({ params }: { params: { title: string } }) => {
  return <PdfViewer document={params.title} />;
};

export default DocsPage;
