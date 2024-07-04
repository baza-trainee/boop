'use client';

import { useState } from 'react';
import Image from 'next/image';
import axios from '@/utils/axios';
import { useAppDispatch } from '@/store/hook';
import { openModal } from '@/store/slices/modalSlice';
import { openAlert } from '@/store/slices/alertSlice';
import { testimonialsApi } from '@/store/api/testimonialsApi';
import PageTitle from '../shared/PageTitle';
import ActionButtons from '../shared/ActionButtons';
import Loader from '@/components/shared/loader/Loader';
import Pagination from '../shared/Pagination';
import FormModal from '../shared/FormModal';
import AddTestimonialForm from './form/AddTestimonialForm';

const text =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolore in asperiores expedita delectus exercitationem doloremque ullam, quibusdam, eos, eaque vel unde est suscipit fugia perspiciatis dolorem magni minus.Sed eos, eaque vel unde est suscipit fugiat perspiciatis dolorem magni minus.';

const TestimonialsPage = () => {
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentId, setCurrentId] = useState('');
  const {
    data: testimonials,
    isLoading,
    isFetching,
  } = testimonialsApi.useGetAllTestimonialsQuery({
    page: currentPage,
    limit: 5,
  });
  const [deleteTestimonial] = testimonialsApi.useDeleteTestimonialMutation();

  if (isLoading || isFetching) return <Loader />;

  const handleEdit = (id: string) => {
    setCurrentId(id);
    dispatch(openModal({ type: 'edit-testimonial' }));
  };

  const handleDelete = (id: string, imageId: string) => {
    dispatch(
      openAlert({
        data: {
          state: 'confirm',
          message: 'Ви впевнені, що хочете видалити цей відгук?',
          func: async () => {
            await axios.delete(`/cloudinary/${encodeURIComponent(imageId)}`);
            await deleteTestimonial(id);
            dispatch(
              openAlert({
                data: {
                  state: 'success',
                  message: 'Відгук видалений',
                },
              })
            );
          },
        },
      })
    );
  };

  return (
    <section className="relative h-[864px]  px-[24px] py-[100px]">
      <PageTitle title="Відгуки" />
      <div className="flex flex-wrap gap-[32px]">
        <div
          className="flex h-[290px] w-[306px] flex-col items-center justify-center 
        gap-[10px] bg-bgViolet font-[800] text-violet"
        >
          <span className="text-xl">Додати відгук</span>
          <button
            onClick={() => dispatch(openModal({ type: 'add-testimonial' }))}
          >
            <Image src="/images/add.svg" alt="add" width={100} height={100} />
          </button>
        </div>

        {testimonials &&
          testimonials.data.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative flex h-[290px] w-[306px] flex-col items-center justify-center"
            >
              <Image
                src={testimonial.imageUrl}
                alt={`відгук від ${testimonial.nameUa}`}
                width={144}
                height={150}
                className="absolute left-0 top-0 h-[150px] w-[144px] rounded-full object-cover"
              />
              <div className="absolute bottom-[44px] left-0 flex h-[134px] w-full flex-col items-start justify-start bg-white p-2 text-textViolet">
                <p className="text-[16px]">
                  {testimonial.reviewUa.split(' ').slice(0, 21).join(' ')}...
                </p>
              </div>
              <ActionButtons
                action="all"
                editAction={() => handleEdit(testimonial.id)}
                deleteAction={() =>
                  handleDelete(testimonial.id, testimonial.imageId)
                }
              />
            </div>
          ))}
      </div>

      {testimonials && testimonials?.meta.totalPages > 1 && (
        <Pagination
          totalPages={testimonials.meta.totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      )}
      <FormModal type="add-testimonial">
        <AddTestimonialForm />
      </FormModal>
    </section>
  );
};

export default TestimonialsPage;
