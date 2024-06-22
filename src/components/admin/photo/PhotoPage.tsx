'use client';

import { useState } from 'react';
import Image from 'next/image';
import axios from '@/utils/axios';
import { IPhoto } from '@/types/photo';
import { useAppDispatch } from '@/store/hook';
import { openModal } from '@/store/slices/modalSlice';
import { openAlert } from '@/store/slices/alertSlice';
import { photoApi } from '@/store/api/photoApi';
import PageTitle from '../shared/PageTitle';
import ActionButtons from '../shared/ActionButtons';
import FormModal from '../shared/FormModal';
import AddPhotoForm from './form/AddPhotoForm';
import EditPhotoForm from './form/EditPhotoForm';
import Loader from '@/components/shared/loader/Loader';

const PhotoPage = () => {
  const dispatch = useAppDispatch();
  const {
    data: photos,
    isLoading,
    isFetching,
  } = photoApi.useGetAllPhotoQuery('photos');
  const [deletePhoto] = photoApi.useDeletePhotoMutation();
  const [currentId, setCurrentId] = useState('');

  if (isLoading || isFetching) return <Loader />;

  const handleEdit = (id: string) => {
    setCurrentId(id);
    dispatch(openModal({ type: 'edit-photo' }));
  };

  const handleDelete = (id: string, imageId: string) => {
    dispatch(
      openAlert({
        data: {
          state: 'confirm',
          message: 'Ви дійсно бажаєте видалити це фото?',
          func: async () => {
            await axios.delete(`/cloudinary/${encodeURIComponent(imageId)}`);
            await deletePhoto(id);
            dispatch(
              openAlert({
                data: {
                  state: 'success',
                  message: 'Фото успішно видалено?',
                },
              })
            );
          },
        },
      })
    );
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
                action="all"
                editAction={() => handleEdit(item.id.toString())}
                deleteAction={() =>
                  handleDelete(item.id.toString(), item.imageId)
                }
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
      <FormModal type="add-photo">
        <AddPhotoForm />
      </FormModal>
      <FormModal type="edit-photo">
        <EditPhotoForm id={currentId} />
      </FormModal>
    </section>
  );
};

export default PhotoPage;
