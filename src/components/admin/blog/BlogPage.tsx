'use client';
import { useState } from 'react';
import axios from '@/utils/axios';
import { useAppDispatch } from '@/store/hook';
import { blogApi } from '@/store/api/blogApi';
import { openModal } from '@/store/slices/modalSlice';
import { openAlert, closeAlert } from '@/store/slices/alertSlice';

import FormModal from '../shared/FormModal';
import Loader from '@/components/shared/loader/Loader';
import Image from 'next/image';
import PageTitle from '../shared/PageTitle';
import AddBlogPostForm from './form/AddBlogPostForm';
import EditBlogPostForm from './form/EditBlogPostForm';
import ActionButtons from '../shared/ActionButtons';
import truncateText from '@/helpers/truncateText';

import './blog.css';

// const placeHolderImg = `/images/mainRules/image_1.png`;

const BlogPage = () => {
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentId, setCurrentId] = useState(0);

  const [deleteBlog] = blogApi.useDeleteBlogMutation();

  const {
    data: posts,
    isLoading,
    isFetching,
    isError,
  } = blogApi.useGetAllPostsQuery({
    page: currentPage,
    limit: 5,
  });

  const handleEdit = (id: number) => {
    setCurrentId(id);
    dispatch(openModal({ type: 'edit-post' }));
  };

  const handleDelete = (id: string, imageId: string) => {
    dispatch(
      openAlert({
        data: {
          state: 'confirm',
          message: 'Ви впевнені, що хочете видалити новину?',
          func: async () => {
            await axios.delete(`/cloudinary/${encodeURIComponent(imageId)}`);
            const res = await deleteBlog(id);
            dispatch(closeAlert());
            if (res && res.data) {
              dispatch(
                openAlert({
                  data: {
                    state: 'success',
                    message: 'Стаття  видалена',
                  },
                })
              );
            } else {
              alert('Щось пійшло не так, спробуйте пізніше');
            }
          },
        },
      })
    );
  };
  if (isLoading || isFetching) return <Loader />;

  if (isError) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="flex h-[50%] w-[80%] items-center justify-center rounded-[20px] bg-slate-200 p-[40px]">
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
    <section className="bg-[#F3F4EE pb-[91px] pl-[24px] pt-[104px]">
      <PageTitle title="Блог" />
      <div className="flex flex-wrap gap-[24px]">
        <div className="flex h-[290px] w-[306px] flex-col items-center bg-bgViolet px-[80px] py-[92px]">
          <span className="mb-[8px] text-[20px] font-medium text-[#50439F]">
            Додати статтю
          </span>
          <button onClick={() => dispatch(openModal({ type: 'add-post' }))}>
            <Image
              src="/images/add.svg"
              alt="add news"
              width={70}
              height={70}
            />
          </button>
        </div>
        {posts &&
          posts?.data.map((post) => (
            <div
              key={post.id}
              className="relative flex h-[290px] w-[306px] flex-col items-center bg-white"
            >
              <Image
                src={post.imageUrl}
                alt={post.titleUA}
                width={306}
                height={111}
                className="h-[111px] object-cover"
              />
              <div className="mt-[8px] w-[100%] px-[8px]">
                <h2 className="mb-[4px] text-[16px] font-bold leading-[132%] text-[#2F245E]">
                  {truncateText(post.titleUA, 65)}
                </h2>
                <div className="break-word mb-[5px] overflow-hidden text-[16px] leading-[150%] text-[#2F245E]">
                  {truncateText(post.textUA, 130)}
                </div>
              </div>

              <ActionButtons
                action="all"
                editAction={() => handleEdit(post.id)}
                deleteAction={() => handleDelete(String(post.id), post.imageId)}
              />
            </div>
          ))}
      </div>
      <FormModal type="add-post">
        <AddBlogPostForm />
      </FormModal>
      <FormModal type="edit-post">
        <EditBlogPostForm id={Number(currentId)} />
      </FormModal>
    </section>
  );
};

export default BlogPage;
