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
        titleUA: values.titleUA.trim(),
        titleEN: values.titleEN.trim(),
        titleIT: values.titleIT.trim(),
        textEN: values.textEN.trim(),
        textUA: values.textUA.trim(),
        textIT: values.textIT.trim(),

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
              message: 'Стаття успішно додана',
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
      <h1 className="mb-[24px] w-full text-center text-[32px] font-[500] text-[#50439F]">
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
                Довжина тексту має бути 5-70 знаків
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
                Довжина тексту має бути 5-70 знаків
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
                Довжина тексту має бути 5-70 знаків
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
              className="h-[437px] w-[384px] object-cover object-center"
            />
          </div>
        </div>
        <div className="mb-[50px] flex gap-[18px]">
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
        <div className="relative mx-auto flex w-[296px] flex-wrap justify-between">
          <span className="mb-[12px] w-full text-center text-[17px] text-[#343333]">
            Додати статтю в Блог?
          </span>
          <div className="flex flex-nowrap items-center gap-4">
            <button
              disabled={!isValid}
              // disabled={false}
              className={`min-w-[123px] whitespace-nowrap rounded-3xl border border-[#E3E3E4] bg-red px-4 py-2 text-[20px] font-bold hover:shadow-xl disabled:bg-[#E3E3E4] ${!isValid ? 'text-[#97979A]' : 'text-white'}`}
            >
              {isProcessing ? 'Обробка запиту...' : 'Додати'}
            </button>
            <button
              onClick={() => dispatch(closeModal())}
              className="flex-shrink-1 w-[149px] rounded-3xl border border-yellow bg-[#E3E3E4] px-4 py-2 text-[20px] text-[#97979A]"
            >
              Скасувати
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddBlogPostForm;
