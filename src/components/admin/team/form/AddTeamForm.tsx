import Image from 'next/image';
import axios from '@/utils/axios';
import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { TTeamScheme, teamValidation } from './scheme';
import { useAppDispatch } from '@/store/hook';
import { closeModal } from '@/store/slices/modalSlice';
import { openAlert } from '@/store/slices/alertSlice';
import { teamApi } from '@/store/api/teamApi';
import { replaceExtensionWithWebp } from '@/helpers/convertToWebp';

import FileInput from '../../ui/FileInput';
import TextInput from '../../ui/TextInput';

const AddTeamForm = () => {
  const dispatch = useAppDispatch();
  const [imagePreview, setImagePreview] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [addTeamMember] = teamApi.useAddTeamMemberMutation();

  const {
    handleSubmit,
    control,
    watch,
    formState: { isValid, errors },
  } = useForm<TTeamScheme>({
    resolver: zodResolver(teamValidation),
    mode: 'onChange',
    defaultValues: { image: [], nameUa: '', nameEn: '', nameIt: '' },
  });

  const imageFile = watch('image');

  useEffect(() => {
    if (!imageFile.length) return;
    const imageUrl = URL.createObjectURL(imageFile[0]);
    setImagePreview(imageUrl);
  }, [imageFile]);

  const onSubmit: SubmitHandler<TTeamScheme> = async (values: TTeamScheme) => {
    try {
      setIsProcessing(true);
      const formData = new FormData();
      formData.append('file', values.image[0]);
      formData.append('folderName', 'team');
      const res = await axios.post('/cloudinary', formData);
      const newMember = {
        nameUa: values.nameUa,
        nameEn: values.nameEn,
        nameIt: values.nameIt,
        imageUrl: replaceExtensionWithWebp(res.data.fileUrl),
        imageId: res.data.fileId,
      };
      const response = await addTeamMember(newMember);
      if (response && response.data) {
        dispatch(closeModal());
        dispatch(
          openAlert({
            data: {
              state: 'success',
              message: 'Новий учасник успішно доданий до Команди!',
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className="flex w-[708px] flex-col"
      >
        <div className="mb-[60px] flex gap-[40px]">
          <div className="flex w-1/2 flex-col items-center justify-center gap-[24px]">
            <h1 className="w-full text-left text-[32px] font-[500] leading-tight text-[#50439F]">
              Додавання
              <br /> учасника
              <br /> команди
            </h1>

            <FileInput
              name="image"
              control={control}
              placeholder="Завантажити зображення"
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
                  placeholder="Напишіть псевдонім"
                  title="Вкажіть псевдонім українською"
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
                  placeholder="Напишіть псевдонім"
                  title="Вкажіть псевдонім англійською"
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
                  placeholder="Напишіть псевдонім"
                  title="Вкажіть псевдонім італійською"
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
              height={497}
              alt="specialist"
              className="h-[497px] w-[384px] object-cover object-center"
            />
          </div>
        </div>
        <div className="relative mx-auto flex w-[296px] justify-between">
          <span className="absolute -top-8 left-0 text-[17px] text-[#343333]">
            Додати в Команду?
          </span>
          <button
            disabled={!isValid}
            className="flex min-w-[123px] items-center justify-center whitespace-nowrap rounded-3xl bg-red px-4 py-2 text-[20px] font-[500] text-white disabled:bg-[#E3E3E4] disabled:text-[#97979A]"
          >
            {isProcessing ? 'Обробка запиту...' : 'Додати'}
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

export default AddTeamForm;
