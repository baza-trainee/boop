'use client';
import { useState } from 'react';

import axios from '@/utils/axios';
import { useAppDispatch } from '@/store/hook';
import {
  useGetAllPressQuery,
  useDeletePressMutation,
} from '@/store/api/pressApi';
import { INews } from '@/types/news';
import { openModal } from '@/store/slices/modalSlice';
import { openAlert } from '@/store/slices/alertSlice';
import PageTitle from '../shared/PageTitle';
import Image from 'next/image';
import ActionButtonProps from './ActionPressButtons';
import FormModalWidFull from './modal-form/ModalFormWidFull';
import truncateText from '@/helpers/truncateText';
import AddPressForm from './form/AddPressForm';
import EditPressForm from './form/EditPressForm';
import Loader from '@/components/shared/loader/Loader';

const placeHolderImg = `/images/mainRules/image_1.png`;

const PressPage = () => {
  const dispatch = useAppDispatch();
  const { data: news, isError, isLoading } = useGetAllPressQuery();
  const [deletePress] = useDeletePressMutation();
  const [currentId, setCurrentId] = useState(0);

  const handleEdit = (id: number) => {
    setCurrentId(id);
    dispatch(openModal({ type: 'edit-news' }));
  };

  const handleDelete = (id: string, imageId: string) => {
    dispatch(
      openAlert({
        data: {
          state: 'confirm',
          message: 'Ви впевнені, що хочете видалити новину?',
          func: async () => {
            await axios.delete(`/cloudinary/${encodeURIComponent(imageId)}`);
            await deletePress(id);
            dispatch(
              openAlert({
                data: {
                  state: 'success',
                  message: 'Новина видалена',
                },
              })
            );
          },
        },
      })
    );
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="flex h-[50%] w-[80%] items-center justify-center rounded-[20px] bg-slate-200  p-[40px]">
          <p className="text-center text-[32px] text-yellow">
            Сталася помилка під час завантаження даних.
            <br /> Будь ласка, спробуйте оновити сторінку або повторити спробу
            пізніше.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="pb-[91px] pl-[24px] pt-[104px]">
      <PageTitle title="Преса про нас" />
      <div className="flex flex-wrap gap-[24px] ">
        <div className="flex h-[290px] w-[306px] flex-col items-center bg-bgViolet px-[80px] py-[92px]">
          <span className="mb-[8px]">Додати новину</span>
          <button onClick={() => dispatch(openModal({ type: 'add-news' }))}>
            <Image
              src="/images/add.svg"
              alt="add news"
              width={70}
              height={70}
            />
          </button>
        </div>
        {news &&
          news?.data.map((item: INews) => (
            <div key={item.id} className="relative h-[290px] w-[306px]">
              <div className="h-[111px] w-[100%] overflow-hidden  border border-b-0 border-[#E5E5E5] object-cover">
                <Image
                  src={item.imageLink || placeHolderImg}
                  alt={item.titleUA}
                  width={306}
                  height={150}
                />
              </div>
              <div className=" bg-white p-[8px]  ">
                <h2 className=" mb-[4px] text-[16px] font-bold leading-[150%] text-textViolet ">
                  {truncateText(item.titleUA, 65)}
                </h2>
                <p className="text-[16px] font-normal leading-[132%] text-textViolet ">
                  {truncateText(item.textUA, 103)}
                </p>
              </div>

              <ActionButtonProps
                editAction={() => handleEdit(item.id)}
                deleteAction={() => handleDelete(String(item.id), item.imageId)}
                action="all"
                width="w-[306px]"
              />
            </div>
          ))}
      </div>
      <FormModalWidFull type="add-news">
        <AddPressForm />
      </FormModalWidFull>
      <FormModalWidFull type="edit-news">
        <EditPressForm id={String(currentId)} />
      </FormModalWidFull>
    </section>
  );
};

export default PressPage;
