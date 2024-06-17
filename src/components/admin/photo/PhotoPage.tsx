'use client';

import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { openModal } from '@/store/slices/modalSlice';
import PageTitle from '../shared/PageTitle';
import ActionButtons from '../shared/ActionButtons';
import FormModal from '../shared/FormModal';
import AddPhotoForm from './form/AddPhotoForm';

const PhotoPage = () => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.modals.isModalOpen);
  const modalType = useAppSelector((state) => state.modals.type);

  const handleEdit = () => {
    console.log('edit');
  };
  const handleDelete = () => {
    console.log('delete');
  };
  return (
    <section className="no-scrollbar max-h-[150vh] overflow-y-auto px-[24px] py-[100px]">
      <PageTitle title="Фото" />
      <div className="flex flex-wrap gap-[24px]">
        <div className="flex h-[447px] w-[306px] flex-col items-center justify-center gap-[10px] bg-bgViolet font-[800] text-violet">
          <span className="text-xl">Додати фото</span>
          <button onClick={() => dispatch(openModal({ type: 'add-photo' }))}>
            <Image src="/images/add.svg" alt="add" width={100} height={100} />
          </button>
        </div>
        <div className="relative flex h-[447px] w-[306px] flex-col items-center justify-center">
          <ActionButtons
            isEditable={true}
            editAction={handleEdit}
            deleteAction={handleDelete}
          />
          <Image
            src="/girl.png"
            alt="add"
            width={200}
            height={300}
            className="w-full object-cover"
          />
        </div>
      </div>
      {isModalOpen && modalType === 'add-photo' ? (
        <FormModal>
          <AddPhotoForm />
        </FormModal>
      ) : null}
    </section>
  );
};

export default PhotoPage;
