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
import FormModal from '../shared/FormModal';
import AddPhotoForm from './form/AddPhotoForm';
import EditPhotoForm from './form/EditPhotoForm';
import Loader from '@/components/shared/loader/Loader';
import Pagination from '../shared/Pagination';
import ActionButtons from '../shared/ActionButtons';

const PhotoPage = () => {
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentId, setCurrentId] = useState('');
  const {
    data: photos,
    isLoading,
    isFetching,
  } = photoApi.useGetAllPhotoQuery({ page: currentPage, limit: 11 });
  const [deletePhoto] = photoApi.useDeletePhotoMutation();

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
                  message: 'Фото успішно видалено!',
                },
              })
            );
          },
        },
      })
    );
  };

  return (
    <section className="relative h-[864px] px-[24px] py-[100px]">
      <PageTitle title="Фото" />
      <div className="flex flex-wrap gap-[24px]">
        <div className="flex h-[171px] w-[223px] flex-col items-center justify-center gap-[10px] bg-bgViolet font-[800] text-violet">
          <span className="text-[20px]">Додати фото</span>
          <button onClick={() => dispatch(openModal({ type: 'add-photo' }))}>
            <Image
              src="/images/add.svg"
              alt="add photo"
              width={70}
              height={70}
            />
          </button>
        </div>
        {photos &&
          photos.data.map((item: IPhoto) => (
            <div
              key={item.id}
              className="relative flex h-[171px] w-[223px] flex-col gap-[12px] bg-bgViolet p-2"
            >
              <Image
                src={item.imageUrl}
                alt={`${item.location} photo`}
                width={207}
                height={105}
                className="h-[105px] w-[207px] object-cover object-center"
              />
              <ActionButtons
                action="all"
                width="w-[207px]"
                editAction={() => handleEdit(item.id)}
                deleteAction={() => handleDelete(item.id, item.imageId)}
              />
            </div>
          ))}
      </div>

      {photos && photos?.meta.totalPages > 1 && (
        <Pagination
          totalPages={photos.meta.totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      )}

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
