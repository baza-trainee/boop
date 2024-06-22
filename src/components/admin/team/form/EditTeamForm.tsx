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

const EditTeamForm = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();
  const [imagePreview, setImagePreview] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const [editTeamMember] = teamApi.useEditTeamMemberMutation();
  const { data: team } = teamApi.useGetAllTeamQuery('team');

  const teamMember = team?.find((member) => member.id === id);

  const {
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm<TTeamScheme>({
    resolver: zodResolver(teamValidation),
    mode: 'onChange',
    defaultValues: { image: [], nameUa: '', nameEn: '', nameIt: '' },
  });

  useEffect(() => {
    if (teamMember) {
      setValue('nameUa', teamMember.nameUa);
      setValue('nameEn', teamMember.nameEn);
      setValue('nameIt', teamMember.nameIt);
      setValue('image', [
        new File([], teamMember?.imageUrl, { type: 'for-url' }),
      ]);
      setImagePreview(teamMember.imageUrl);
    }
  }, [teamMember]);

  const imageFile = watch('image');

  useEffect(() => {
    if (!imageFile[0]?.size) return;
    const imageUrl = URL.createObjectURL(imageFile[0]);
    setImagePreview(imageUrl);
  }, [imageFile]);

  const onSubmit: SubmitHandler<TTeamScheme> = async (values: TTeamScheme) => {
    try {
      setIsProcessing(true);
      if (values.image[0]?.size > 0) {
        //need to delete old and upload new photo
        const formData = new FormData();
        formData.append('file', values.image[0]);
        formData.append('folderName', 'team');
        await axios.delete(
          `/cloudinary/${encodeURIComponent(teamMember?.imageId as string)}`
        );
        const res = await axios.post('/cloudinary', formData);
        const newMember = {
          nameUa: values.nameUa,
          nameEn: values.nameEn,
          nameIt: values.nameIt,
          imageUrl: replaceExtensionWithWebp(res.data.fileUrl),
          imageId: res.data.fileId,
        };
        const response = await editTeamMember({ id, newMember });
        if (response && response.data) {
          dispatch(closeModal());
          dispatch(
            openAlert({
              data: {
                state: 'success',
                message: 'Учасника успішно відредаговано!',
              },
            })
          );
        } else if (response.error) {
          alert(response.error);
        }
      } else {
        const newMember = {
          nameUa: values.nameUa,
          nameEn: values.nameEn,
          nameIt: values.nameIt,
          imageUrl: teamMember?.imageUrl,
          imageId: teamMember?.imageId,
        };
        const response = await editTeamMember({ id, newMember });
        if (response && response.data) {
          dispatch(
            openAlert({
              data: {
                state: 'success',
                message: 'Зміни в записі успішно збережено!',
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className="flex w-[85%] flex-col"
      >
        <div className="flex gap-[60px]">
          <div className="flex w-1/2 flex-col items-center justify-center gap-[24px]">
            <h1 className="text-3xl font-[500] text-violet">
              Редагування учасника команди
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
                  title="Вкажіть псевдонім українською:"
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
                  title="Вкажіть псевдонім англійською:"
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
                  title="Вкажіть псевдонім італійською:"
                  isRequired={true}
                />
              )}
            />
            <div className="relative mt-[60px] flex w-full justify-between">
              <span className="absolute -top-8 left-0 text-sm">
                Змінити запис учасника?
              </span>
              <button
                disabled={!isValid}
                className="min-w-[123px] whitespace-nowrap rounded-3xl bg-red px-4 py-2 text-white disabled:bg-gray-500"
              >
                {isProcessing ? 'Обробка запиту...' : 'Змінити'}
              </button>
              <button
                onClick={() => dispatch(closeModal())}
                className="w-[149px] rounded-3xl border border-yellow px-4 py-2 text-violet"
              >
                Скасувати
              </button>
            </div>
          </div>
          <div className="flex w-1/2 items-center justify-center">
            <Image
              src={
                imagePreview ? imagePreview : '/images/image-placeholder.png'
              }
              width={306}
              height={412}
              alt="specialist"
              className="h-[412px] w-[306px] object-cover object-center"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditTeamForm;
