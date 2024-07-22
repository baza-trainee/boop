import Image from 'next/image';
import axios from '@/utils/axios';
import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { TBlogScheme, blogValidation } from './scheme';
import { useAppDispatch } from '@/store/hook';
import { closeModal } from '@/store/slices/modalSlice';
import { openAlert } from '@/store/slices/alertSlice';
import { blogApi } from '@/store/api/blogApi';
import { replaceExtensionWithWebp } from '@/helpers/convertToWebp';
import { defaultValues } from './defaultValues';

import FileInput from '../../ui/FileInput';
import TextInput from '../../ui/TextInput';
import TextArea from '../../ui/TextArea';

const AddBlogPostForm = () => {
  const dispatch = useAppDispatch();

  const [imagePreview, setImagePreview] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [addPost] = blogApi.useAddPostMutation();

  const {
    handleSubmit,
    control,
    watch,
    formState: { isValid, errors },
  } = useForm<TBlogScheme>({
    resolver: zodResolver(blogValidation),
    mode: 'onChange',
    defaultValues: defaultValues,
  });

  const imageFile = watch('image');

  useEffect(() => {
    if (!imageFile.length) return;
    const imageUrl = URL.createObjectURL(imageFile[0]);
    setImagePreview(imageUrl);
    console.log('setImagePreview', imagePreview);
  }, [imageFile]);

  const onSubmit: SubmitHandler<TBlogScheme> = async (values: TBlogScheme) => {
    try {
      setIsProcessing(true);
      const formData = new FormData();
      formData.append('file', values.image[0]);
      formData.append('folderName', 'blog');
      const res = await axios.post('/cloudinary', formData);
      const newPost = {
        titleUA: values.titleUA,
        titleEN: values.titleEN,
        titleIT: values.titleIT,
        textEN: values.textEN,
        textUA: values.textUA,
        textIT: values.textIT,

        imageUrl: replaceExtensionWithWebp(res.data.fileUrl),
        imageId: res.data.fileId,
      };
      const response = await addPost(newPost);
      if (response && response.data) {
        dispatch(closeModal());
        dispatch(
          openAlert({
            data: {
              state: 'success',
              message: 'Нова стаття успішно додана',
            },
          })
        );
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h1 className="mb-[24px] w-full text-center text-3xl font-[500] text-violet">
        Додавання статті
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
              name="titleUA"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  errorText={errors.titleUA?.message}
                  placeholder="Напишіть назву статті"
                  title="Вкажіть назву статті українською"
                  className={'h-[53px]'}
                />
              )}
            />
            <Controller
              name="titleEN"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  errorText={errors.titleEN?.message}
                  placeholder="Напишіть назву статті"
                  title="Вкажіть назву статті англійською"
                  className={'h-[53px]'}
                />
              )}
            />
            <Controller
              name="titleIT"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  errorText={errors.titleIT?.message}
                  placeholder="Напишіть назву статті"
                  title="Вкажіть назву статті італійською"
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
        <div className="mb-[50px] flex gap-[18px]">
          <Controller
            name="textUA"
            control={control}
            render={({ field }) => (
              <TextArea
                {...field}
                errorText={errors.textUA?.message}
                placeholder="Напишіть текст статті"
                title="Вкажіть текст статті українською"
              />
            )}
          />
          <Controller
            name="textEN"
            control={control}
            render={({ field }) => (
              <TextArea
                {...field}
                errorText={errors.textEN?.message}
                placeholder="Напишіть текст статті"
                title="Вкажіть текст статті англійською"
              />
            )}
          />
          <Controller
            name="textIT"
            control={control}
            render={({ field }) => (
              <TextArea
                {...field}
                errorText={errors.textIT?.message}
                placeholder="Напишіть текст статті"
                title="Вкажіть текст статті італійською"
              />
            )}
          />
        </div>
        <div className="relative mx-auto flex w-[296px] justify-between">
          <span className="absolute -top-8 left-0 text-sm">
            Додати статтю в Блог?
          </span>
          <button
            disabled={!isValid}
            // disabled={false}
            className="min-w-[123px] whitespace-nowrap rounded-3xl bg-red px-4 py-2 text-white hover:shadow-xl disabled:bg-gray-500"
          >
            {isProcessing ? 'Обробка запиту...' : 'Додати'}
          </button>
          <button
            onClick={() => dispatch(closeModal())}
            className="w-[149px] rounded-3xl border border-yellow px-4 py-2 text-violet"
          >
            Скасувати
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlogPostForm;
