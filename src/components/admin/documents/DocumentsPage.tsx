'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useAppDispatch } from '@/store/hook';
import { openModal } from '@/store/slices/modalSlice';
import { documentsApi } from '@/store/api/documentsApi';
import { translateDocs } from '@/helpers/translateDocs';
import PageTitle from '../shared/PageTitle';
import Loader from '@/components/shared/loader/Loader';
import ActionButtons from '../shared/ActionButtons';
import FormModal from '../shared/FormModal';
import EditDocumentForm from './form/EditDocumentForm';

const DocumentsPage = () => {
  const dispatch = useAppDispatch();
  const [currentId, setCurrentId] = useState('');

  const {
    data: documents,
    isLoading,
    isFetching,
  } = documentsApi.useGetAllDocumentsQuery('documents');

  if (isLoading || isFetching) return <Loader />;

  const handleEdit = (id: string) => {
    setCurrentId(id);
    dispatch(openModal({ type: 'edit-document' }));
  };

  return (
    <section className="no-scrollbar relative max-h-[150vh] overflow-y-auto px-[24px] py-[100px]">
      <PageTitle title="Документи" />
      <div className="flex flex-wrap gap-[24px]">
        {documents &&
          documents.map((doc) => (
            <div key={doc.id} className="flex h-[249px] w-[280px] flex-col">
              <h5 className="my-2 font-bold text-violet">
                {translateDocs(doc.title)}
              </h5>
              <div
                className="border-[rgb(188, 183, 222)] relative flex h-[207px] w-full flex-col
               items-center justify-center border"
              >
                <Image
                  src="/icons/admin/doc.svg"
                  alt="document icon"
                  width={50}
                  height={50}
                />
                <ActionButtons
                  action="edit"
                  editAction={() => handleEdit(doc.id.toString())}
                />
              </div>
            </div>
          ))}
      </div>
      <FormModal type="edit-document">
        <EditDocumentForm id={currentId} />
      </FormModal>
    </section>
  );
};

export default DocumentsPage;
