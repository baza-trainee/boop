import Image from 'next/image';
import axios from '@/utils/axios';
import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { TTestimonialScheme, testimonialValidation } from './scheme';
import { useAppDispatch } from '@/store/hook';
import { closeModal } from '@/store/slices/modalSlice';
import { openAlert } from '@/store/slices/alertSlice';
import { testimonialsApi } from '@/store/api/testimonialsApi';
import { replaceExtensionWithWebp } from '@/helpers/convertToWebp';
import { defaultValues } from './defaultValues';

import Loader from '@/components/shared/loader/Loader';
import FileInput from '../../ui/FileInput';
import TextInput from '../../ui/TextInput';
import TextArea from '../../ui/TextArea';

const EditTestimonialForm = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();
  const [imagePreview, setImagePreview] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [editTestimonial] = testimonialsApi.useEditTestimonialMutation();
  const {
    data: testimonials,
    isLoading,
    isFetching,
  } = testimonialsApi.useGetAllTestimonialsQuery();

  const testimonial = testimonials?.data.find(
    (testimonial) => testimonial.id === id
  );

  const {
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { isValid, errors },
  } = useForm<TTestimonialScheme>({
    resolver: zodResolver(testimonialValidation),
    mode: 'onChange',
    defaultValues: defaultValues,
  });

  useEffect(() => {
    if (!testimonial) return;
    setValue('nameUa', testimonial.nameUa);
    setValue('nameEn', testimonial.nameEn);
    setValue('nameIt', testimonial.nameIt);
    setValue('reviewUa', testimonial.reviewUa);
    setValue('reviewEn', testimonial.reviewEn);
    setValue('reviewIt', testimonial.reviewIt);
    setValue('image', [
      new File([], testimonial?.imageUrl, { type: 'for-url' }),
    ]);
    setImagePreview(testimonial.imageUrl);
  }, [testimonial]);

  const imageFile = watch('image');

  useEffect(() => {
    if (!imageFile[0]?.size) return;
    const imageUrl = URL.createObjectURL(imageFile[0]);
    setImagePreview(imageUrl);
  }, [imageFile]);

  const onSubmit: SubmitHandler<TTestimonialScheme> = async (
    values: TTestimonialScheme
  ) => {
    try {
      setIsProcessing(true);
      if (values.image[0]?.size > 0) {
        const formData = new FormData();
        formData.append('file', values.image[0]);
        formData.append('folderName', 'testimonials');
        await axios.delete(
          `/cloudinary/${encodeURIComponent(testimonial?.imageId as string)}`
        );
        const res = await axios.post('/cloudinary', formData);
        const updatedtestimonial = {
          nameUa: values.nameUa,
          nameEn: values.nameEn,
          nameIt: values.nameIt,
          reviewUa: values.reviewUa,
          reviewEn: values.reviewEn,
          reviewIt: values.reviewIt,
          imageUrl: replaceExtensionWithWebp(res.data.fileUrl),
          imageId: res.data.fileId,
        };
        const response = await editTestimonial({ id, updatedtestimonial });
        if (response && response.data) {
          dispatch(closeModal());
          dispatch(
            openAlert({
              data: {
                state: 'success',
                message: 'Відгук успішно відредаговано',
              },
            })
          );
        } else if (response.error) {
          alert(response.error);
        }
      } else {
        const updatedTestimonial = {
          nameUa: values.nameUa,
          nameEn: values.nameEn,
          nameIt: values.nameIt,
          reviewUa: values.reviewUa,
          reviewEn: values.reviewEn,
          reviewIt: values.reviewIt,
          imageUrl: testimonial?.imageUrl,
          imageId: testimonial?.imageId,
        };
        const response = await editTestimonial({ id, updatedTestimonial });
        if (response && response.data) {
          dispatch(
            openAlert({
              data: {
                state: 'success',
                message: 'Відгук успішно відредаговано',
              },
            })
          );
          dispatch(closeModal());
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsProcessing(false);
    }
  };

  if (isLoading || isFetching) return <Loader />;

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h1 className="mb-[24px] w-full text-center text-[32px] font-[500] text-[#50439F]">
        Редагування відгуку
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className="flex w-[708px] flex-col"
      >
        <div className="mb-[60px] flex gap-[40px]">
          <div className="flex w-1/2 flex-col items-center justify-between gap-[24px]">
            <FileInput
              name="image"
              control={control}
              placeholder="Завантажте зображення"
              title="Оберіть файл"
              accept="image/*"
            />
            <Controller
              name="nameUa"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  errorText={errors.nameUa?.message}
                  placeholder="Напишіть ім’я"
                  title="Вкажіть ім’я волонтера українською"
                  className={'h-[53px]'}
                />
              )}
            />
            <Controller
              name="nameEn"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  errorText={errors.nameEn?.message}
                  placeholder="Напишіть ім’я"
                  title="Вкажіть ім’я волонтера англійською"
                  className={'h-[53px]'}
                />
              )}
            />
            <Controller
              name="nameIt"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  errorText={errors.nameIt?.message}
                  placeholder="Напишіть ім’я"
                  title="Вкажіть ім’я волонтера італійською"
                  className={'h-[53px]'}
                />
              )}
            />
          </div>

          <div className="flex w-1/2 items-center justify-center">
            <Image
              src={
                imagePreview ? imagePreview : '/images/image-placeholder.png'
              }
              width={384}
              height={437}
              alt="specialist"
              className="h-[437px] w-[384px] object-cover object-center"
            />
          </div>
        </div>
        <div className="mb-[50px] flex gap-[24px]">
          <Controller
            name="reviewUa"
            control={control}
            render={({ field }) => (
              <TextArea
                {...field}
                errorText={errors.reviewUa?.message}
                placeholder="Напишіть текст відгуку"
                title="Напишіть текст відгуку українською"
              />
            )}
          />
          <Controller
            name="reviewEn"
            control={control}
            render={({ field }) => (
              <TextArea
                {...field}
                errorText={errors.reviewEn?.message}
                placeholder="Напишіть текст відгуку"
                title="Напишіть текст відгуку англійською"
              />
            )}
          />
          <Controller
            name="reviewIt"
            control={control}
            render={({ field }) => (
              <TextArea
                {...field}
                errorText={errors.reviewIt?.message}
                placeholder="Напишіть текст відгуку"
                title="Напишіть текст відгуку італійською"
              />
            )}
          />
        </div>
        <div className="relative mx-auto flex w-[296px] justify-between">
          <span className="absolute -top-8 left-0 text-[17px] text-[#343333]">
            Змінити відгук?
          </span>
          <button
            disabled={!isValid}
            className="flex min-w-[123px] items-center justify-center whitespace-nowrap rounded-3xl bg-red px-4 py-2 text-[20px] font-[500] text-white disabled:bg-[#E3E3E4] disabled:text-[#97979A]"
          >
            {isProcessing ? 'Обробка запиту...' : 'Змінити'}
          </button>
          <button
            disabled={!isValid}
            onClick={() => dispatch(closeModal())}
            className="w-[149px] rounded-3xl border border-yellow px-4 py-2 text-[20px] text-violet disabled:border-[#E3E3E4] disabled:text-[#97979A]"
          >
            Скасувати
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTestimonialForm;
