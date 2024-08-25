import Image from 'next/image';
import axios from '@/lib/axios';
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

const EditBlogPostForm = ({ id }: { id: number }) => {
  const dispatch = useAppDispatch();

  const [imagePreview, setImagePreview] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [editPost] = blogApi.useEditPostMutation();
  const { data: posts } = blogApi.useGetAllPostsQuery();

  const post = posts?.data.find((post) => post.id === id);

  const {
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { isValid, errors },
  } = useForm<TBlogScheme>({
    resolver: zodResolver(blogValidation),
    mode: 'onChange',
    defaultValues: defaultValues,
  });

  useEffect(() => {
    if (post) {
      setValue('titleUA', post.titleUA);
      setValue('titleEN', post.titleEN);
      setValue('titleIT', post.titleIT);
      setValue('textUA', post.textUA);
      setValue('textEN', post.textEN);
      setValue('textIT', post.textIT);
      setValue('image', [new File([], post?.imageUrl, { type: 'for-url' })]);
      if (post.imageUrl) {
        setImagePreview(post.imageUrl);
      } else {
        console.log('post.imageUrl is undefined or null');
      }
    }
  }, [post, setValue]);

  const imageFile = watch('image');

  useEffect(() => {
    if (!imageFile[0]?.size) return;
    const imageUrl = URL.createObjectURL(imageFile[0]);
    setImagePreview(imageUrl);
  }, [imageFile]);
  const onSubmit: SubmitHandler<TBlogScheme> = async (values: TBlogScheme) => {
    try {
      setIsProcessing(true);
      if (values.image[0]?.size > 0) {
        const formData = new FormData();
        formData.append('file', values.image[0]);
        formData.append('folderName', 'blog');
        await axios.post(`/cloudinary/remove`, { imageId: post?.imageId });
        const res = await axios.post('/cloudinary', formData);
        const updatedPost = {
          titleUA: values.titleUA,
          titleEN: values.titleEN,
          titleIT: values.titleIT,
          textEN: values.textEN,
          textUA: values.textUA,
          textIT: values.textIT,

          imageUrl: replaceExtensionWithWebp(res.data.fileUrl),
          imageId: res.data.fileId,
        };
        const response = await editPost({ id, updatedPost });
        if (response && response.data) {
          dispatch(closeModal());
          dispatch(
            openAlert({
              data: {
                state: 'success',
                message: 'Стаття успішно відредагована',
              },
            })
          );
        } else if (response.error) {
          alert(response.error);
        }
      } else {
        const updatedPost = {
          titleUA: values.titleUA,
          titleEN: values.titleEN,
          titleIT: values.titleIT,
          textEN: values.textEN,
          textUA: values.textUA,
          textIT: values.textIT,
          imageUrl: post?.imageUrl,
          imageId: post?.imageId,
        };
        const response = await editPost({ id, updatedPost });
        if (response && response.data) {
          dispatch(
            openAlert({
              data: {
                state: 'success',
                message: 'Стаття успішно відредагована',
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

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h1 className="mb-[24px] w-full text-center text-[32px] font-[500] text-[#50439F]">
        Редагування статті
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
              placeholder="Завантажити зображення"
              title="Оберіть фото"
              accept="image/*"
            />
            <div className="flex w-full flex-col">
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
              <p className="text-sm text-[#4D4D4D]">
                Довжина тексту має бути 5-150 знаків
              </p>
            </div>
            <div className="flex w-full flex-col">
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
              <p className="text-sm text-[#4D4D4D]">
                Довжина тексту має бути 5-150 знаків
              </p>
            </div>
            <div className="flex w-full flex-col">
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
              <p className="text-sm text-[#4D4D4D]">
                Довжина тексту має бути 5-150 знаків
              </p>
            </div>
          </div>

          <div className="flex w-1/2 items-center justify-center">
            <Image
              src={
                imagePreview ? imagePreview : '/images/image-placeholder.png'
              }
              width={384}
              height={437}
              alt="specialist"
              className="h-[412px] w-[306px] object-cover object-center"
            />
          </div>
        </div>
        <div className="mb-[40px] flex gap-[18px]">
          <div className="flex w-full flex-col">
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
            <p className="text-sm text-[#4D4D4D]">
              Довжина тексту має бути 300-9000 знаків
            </p>
          </div>
          <div className="flex w-full flex-col">
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
            <p className="text-sm text-[#4D4D4D]">
              Довжина тексту має бути 300-9000 знаків
            </p>
          </div>
          <div className="flex w-full flex-col">
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
            <p className="text-sm text-[#4D4D4D]">
              Довжина тексту має бути 300-9000 знаків
            </p>
          </div>
        </div>
        <div className="mx-auto flex w-[296px] flex-wrap justify-between">
          <span className="mb-[12px] w-full text-center text-[17px] text-[#343333]">
            Змінити статтю в Блог?
          </span>
          <div className="flex flex-nowrap items-center gap-4">
            <button
              disabled={!isValid}
              className="min-w-[123px] whitespace-nowrap rounded-3xl bg-red px-4 py-2 text-white hover:shadow-xl disabled:bg-gray-500"
            >
              {isProcessing ? 'Обробка...' : 'Змінити'}
            </button>
            <button
              onClick={() => dispatch(closeModal())}
              className="flex-shrink-1 w-[149px] rounded-3xl border border-yellow px-4 py-2 text-violet"
            >
              Скасувати
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditBlogPostForm;
