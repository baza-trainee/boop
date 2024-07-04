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
            <h1 className="w-full text-left text-3xl font-[500] text-violet">
              Додавання
              <br /> учасника
              <br /> команди
            </h1>

            <FileInput
              name="image"
              control={control}
              placeholder={'Оберіть файл'}
              title="Оберіть файл:"
              isRequired={true}
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
                  isRequired={true}
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
                  isRequired={true}
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
                  isRequired={true}
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
          <span className="absolute -top-8 left-0 text-sm">
            Додати учасника в Команду?
          </span>
          <button
            disabled={!isValid}
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

export default AddTeamForm;
