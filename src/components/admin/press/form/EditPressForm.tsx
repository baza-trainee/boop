'use client';
import { useState, useEffect } from 'react';
import axios from '@/lib/axios';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { TPressScheme, pressValidation } from './scheme';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  useGetAllPressQuery,
  useEditPressMutation,
} from '@/store/api/pressApi';
import TextInput from '../../ui/TextInput';
import TextArea from '../../ui/TextArea';
import FileInput from '../../ui/FileInput';
import { useAppDispatch } from '@/store/hook';
import { replaceExtensionWithWebp } from '@/helpers/convertToWebp';
import { openAlert } from '@/store/slices/alertSlice';
import { closeModal } from '@/store/slices/modalSlice';

const EditPressForm = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();
  const [isProcessing, setIsProcessing] = useState(false);
  const [imagePreview, setImagePreview] = useState('');
  const { data: press } = useGetAllPressQuery();
  const [editPress] = useEditPressMutation();

  const pressPost = press?.data.find((press) => press.id === Number(id));

  const {
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { isValid, errors },
  } = useForm<TPressScheme>({
    resolver: zodResolver(pressValidation),
    mode: 'onChange',
    defaultValues: {
      image: [],
      titleUA: '',
      titleEN: '',
      titleIT: '',
      textUA: '',
      textEN: '',
      textIT: '',
    },
  });

  useEffect(() => {
    if (pressPost) {
      setValue('titleUA', pressPost.titleUA);
      setValue('titleEN', pressPost.titleEN);
      setValue('titleIT', pressPost.titleIT);
      setValue('textUA', pressPost.textUA);
      setValue('textEN', pressPost.textEN);
      setValue('textIT', pressPost.textIT);
      setValue('sourceLink', pressPost.sourceLink);
      setValue('image', [
        new File([], pressPost?.imageLink, { type: 'for-url' }),
      ]);
    }
  }, [pressPost]);

  const imageFile = watch('image');

  useEffect(() => {
    if (imageFile.length === 0) return;
    const imageUrl = URL.createObjectURL(imageFile[0]);
    setImagePreview(imageUrl);
  }, [imageFile]);

  const onSubmit: SubmitHandler<TPressScheme> = async (
    values: TPressScheme
  ) => {
    try {
      setIsProcessing(true);
      if (values.image[0]?.size > 0) {
        const formData = new FormData();
        formData.append('file', values.image[0]);
        formData.append('folderName', 'press');
        await axios.post(`/cloudinary/remove`, { imageId: pressPost?.imageId });
        const res = await axios.post('/cloudinary', formData);
        const fileUrl = res.data.fileUrl;
        const newPress = {
          titleUA: values.titleUA,
          textUA: values.textUA,
          titleEN: values.titleEN,
          textEN: values.textEN,
          titleIT: values.titleIT,
          textIT: values.textIT,
          sourceLink: values.sourceLink,
          imageLink: replaceExtensionWithWebp(fileUrl),
          imageId: res.data.fileId,
        };

        const response = await editPress({ id, newPress });

        if (response && response.data) {
          dispatch(closeModal());
          dispatch(
            openAlert({
              data: {
                state: 'success',
                message: 'Новина успішно відредагована',
              },
            })
          );
        } else if (response.error) {
          alert(response.error);
        }
      } else {
        const newPress = {
          titleUA: values.titleUA,
          textUA: values.textUA,
          titleEN: values.titleEN,
          textEN: values.textEN,
          titleIT: values.titleIT,
          textIT: values.textIT,
          sourceLink: values.sourceLink,
          imageLink: pressPost?.imageLink,
          imageId: pressPost?.imageId,
        };
        const response = await editPress({ id, newPress });
        if (response && response.data) {
          dispatch(closeModal());
          dispatch(
            openAlert({
              data: {
                state: 'success',
                message: 'Новина успішно відредагована',
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
    <div className="mx-auto max-w-[930px]">
      <h1 className="mb-[40px] text-center text-[32px] font-bold text-[#50439F]">
        Редагування новини
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <div className="flex flex-wrap gap-[24px]">
          <div className="mb-[20px]">
            <div className="mb-[20px] max-w-[294px]">
              <Controller
                name="titleUA"
                control={control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    placeholder="Напишіть назву новини"
                    errorText={errors.titleUA?.message}
                    title="Вкажіть назву новини українською"
                    isRequired={false}
                    isEditMode={false}
                    className="h-[52px]"
                  />
                )}
              />
              <p className="text-[14px] font-normal leading-[130%] text-darkGrey">
                Довжина тексту має бути 5-150 знаків
              </p>
            </div>
            <div className="max-w-[294px]">
              <Controller
                name="textUA"
                control={control}
                render={({ field }) => (
                  <TextArea
                    {...field}
                    placeholder="Напишіть текст новини"
                    errorText={errors.textUA?.message}
                    title="Вкажіть текст новини українською"
                    className="h-[167px]"
                  />
                )}
              />
              <p className="text-[14px] font-normal leading-[130%] text-darkGrey">
                Довжина тексту має бути 300-600 знаків
              </p>
            </div>
          </div>
          <div className="max-w-[294px]">
            <div className="mb-[20px]">
              <Controller
                name="titleEN"
                control={control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    placeholder="Напишіть назву новини"
                    errorText={errors.titleEN?.message}
                    title="Вкажіть назву новини англійською"
                    isRequired={false}
                    isEditMode={false}
                    className="h-[52px]"
                  />
                )}
              />
              <p className="text-[14px] font-normal leading-[130%] text-darkGrey">
                Довжина тексту має бути 5-150 знаків
              </p>
            </div>
            <div className="max-w-[294px]">
              <Controller
                name="textEN"
                control={control}
                render={({ field }) => (
                  <TextArea
                    {...field}
                    placeholder="Напишіть текст новини"
                    errorText={errors.textEN?.message}
                    title="Вкажіть текст новини англійською"
                    className="h-[167px]"
                  />
                )}
              />
              <p className="text-[14px] font-normal leading-[130%] text-darkGrey">
                Довжина тексту має бути 300-600 знаків
              </p>
            </div>
          </div>
          <div className="max-w-[294px]">
            <div className="mb-[20px]">
              <Controller
                name="titleIT"
                control={control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    placeholder="Напишіть назву новини"
                    errorText={errors.titleIT?.message}
                    title="Вкажіть назву новини італійською"
                    isRequired={false}
                    isEditMode={false}
                    className="h-[52px]"
                  />
                )}
              />
              <p className="text-[14px] font-normal leading-[130%] text-darkGrey">
                Довжина тексту має бути 5-150 знаків
              </p>
            </div>
            <div className="max-w-[294px]">
              <Controller
                name="textIT"
                control={control}
                render={({ field }) => (
                  <TextArea
                    {...field}
                    placeholder="Напишіть текст новини"
                    errorText={errors.textIT?.message}
                    title="Вкажіть текст новини італійською"
                    className="h-[167px] max-w-[294px]"
                  />
                )}
              />
              <p className="text-[14px] font-normal leading-[130%] text-darkGrey">
                Довжина тексту має бути 300-600 знаків
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[20px] flex w-[100%] flex-wrap items-baseline justify-start gap-[24px]">
          <div className="max-w-[294px]">
            <Controller
              name="sourceLink"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  placeholder="Напишіть посилання на новину"
                  errorText={errors.sourceLink?.message}
                  title="Вкажіть посилання на новину"
                  isRequired={false}
                  isEditMode={false}
                  className="h-[52px]"
                />
              )}
            />
          </div>
          <div className="max-w-[294px]">
            <FileInput
              name="image"
              control={control}
              placeholder={'Завантажити зображення'}
              title="Оберіть файл:"
              isRequired={false}
              isEditMode={true}
              isPressPage={true}
              accept="image/*"
            />
          </div>
        </div>
        <div className="mb-[12px] mt-[40px] text-center text-[17px] font-medium leading-[150%] text-[#343333]">
          Редагувати новину в Преса про нас?
        </div>
        <div className="flex justify-center gap-[20px]">
          <button
            // disabled={false}
            disabled={!isValid}
            className="min-w-[123px] whitespace-nowrap rounded-3xl bg-red px-4 py-2 text-white hover:shadow-xl disabled:bg-[#E3E3E4] disabled:text-[#97979A]"
          >
            {isProcessing ? 'Обробка...' : 'Змінити'}
          </button>
          <button
            disabled={!isValid}
            // disabled={false}
            onClick={() => dispatch(closeModal())}
            className="w-[149px] rounded-3xl border border-yellow px-4 py-2 text-violet disabled:border-[#E3E3E4] disabled:bg-[#F3F4EE] disabled:text-[#97979A]"
          >
            Скасувати
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPressForm;
