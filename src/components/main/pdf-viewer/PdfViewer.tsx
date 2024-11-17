'use client';

import ErrorPage from '@/components/error/ErrorPage';
import Loader from '@/components/shared/loader/Loader';
import { useGetAllDocumentsQuery } from '@/store/api/documentsApi';
import { useRouter } from 'next/navigation';
import { RefObject, useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PdfViewer = ({ document }: { document: string | null }) => {
  const router = useRouter();
  const [numPages, setNumPages] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [documentUrl, setDocumentUrl] = useState<string>('');

  const { data } = useGetAllDocumentsQuery();

  useEffect(() => {
    const found = data?.find((d) => d.title === document);
    if (found) {
      setDocumentUrl(found.documentUrl.replace(/^http:\/\//, 'https://'));
    }
  }, [data, document]);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }): void => {
    setNumPages(numPages);
  }

  const pdfWrapperRef = useRef<HTMLDivElement | null>(
    null
  ) as RefObject<HTMLDivElement>;

  useEffect(() => {
    const getWidth = () =>
      pdfWrapperRef?.current?.getBoundingClientRect()?.width || 0;

    const handleResize = () => {
      setWidth(getWidth());
    };

    setWidth(getWidth());

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pdfWrapperRef]);


  const reset = () => router.replace('/');

  return (
    <div className="w-full">
      <div
        className="mx-auto flex h-full w-full flex-col items-center justify-center xl:w-2/3"
        ref={pdfWrapperRef}
      >
        {documentUrl && (
          <Document
            loading={<Loader />}
            file={documentUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            error={<ErrorPage reset={reset} />}
            className={'flex w-full flex-col items-center justify-center p-5'}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                renderAnnotationLayer={false}
                renderTextLayer={false}
                width={width}
              />
            ))}
          </Document>
        )}
      </div>
    </div>
  );
};

export default PdfViewer;

