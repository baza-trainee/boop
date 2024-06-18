'use client';

import Image from 'next/image';
import { IPhoto } from '@/types/photo';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { openModal } from '@/store/slices/modalSlice';
import { useGetAllPhotoQuery } from '@/store/api/photoApi';
import PageTitle from '../shared/PageTitle';
import ActionButtons from '../shared/ActionButtons';
import FormModal from '../shared/FormModal';
import AddPhotoForm from './form/AddPhotoForm';
import Loader from '@/components/shared/loader/Loader';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

const PhotoPage = () => {
  const dispatch = useAppDispatch();
  const {
    data: photos,
    isError,
    isLoading,
    error,
  } = useGetAllPhotoQuery('photos');
  const isModalOpen = useAppSelector((state) => state.modals.isModalOpen);
  const modalType = useAppSelector((state) => state.modals.type);

  if (isError) {
    const errorMessage = (error as FetchBaseQueryError).status
      ? `${(error as FetchBaseQueryError).status} ${(error as FetchBaseQueryError).data}`
      : 'An unknown error occurred';
    alert(errorMessage);
  }

  const handleEdit = () => {
    console.log('edit');
  };
  const handleDelete = () => {
    console.log('delete');
  };

  return (
    <section className="no-scrollbar relative max-h-[150vh] overflow-y-auto px-[24px] py-[100px]">
      <PageTitle title="Фото" />
      <div className="flex flex-wrap gap-[24px]">
        <div className="flex h-[447px] w-[306px] flex-col items-center justify-center gap-[10px] bg-bgViolet font-[800] text-violet">
          <span className="text-xl">Додати фото</span>
          <button onClick={() => dispatch(openModal({ type: 'add-photo' }))}>
            <Image src="/images/add.svg" alt="add" width={100} height={100} />
          </button>
        </div>
        {photos &&
          photos.map((item: IPhoto) => (
            <div
              key={item.id}
              className="relative flex h-[447px] w-[306px] flex-col items-center justify-center"
            >
              <ActionButtons
                isEditable={true}
                editAction={handleEdit}
                deleteAction={handleDelete}
              />
              <Image
                src={item.imageUrl}
                alt="add"
                width={200}
                height={300}
                className="w-full object-cover"
              />
            </div>
          ))}
      </div>
      {isLoading && <Loader />}
      {isModalOpen && modalType === 'add-photo' ? (
        <FormModal>
          <AddPhotoForm />
        </FormModal>
      ) : null}
    </section>
  );
};

export default PhotoPage;
