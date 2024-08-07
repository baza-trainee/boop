import Image from 'next/image';
import axios from '@/utils/axios';
import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TPhotoScheme, photoValidation } from './scheme';
import { useAppDispatch } from '@/store/hook';
import { closeModal } from '@/store/slices/modalSlice';
import { openAlert } from '@/store/slices/alertSlice';
import { photoApi } from '@/store/api/photoApi';
import { replaceExtensionWithWebp } from '@/helpers/convertToWebp';
import { PHOTO_LOCATION_VALUES } from '@/constants';

import FileInput from '../../ui/FileInput';
import SelectInput from '../../ui/SelectInput';

const EditPhotoForm = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();
  const [imagePreview, setImagePreview] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const [editPhoto] = photoApi.useEditPhotoMutation();
  const { data: photos } = photoApi.useGetAllPhotoQuery();

  const photo = photos?.data.find((image) => image.id === id);

  const {
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { isValid },
  } = useForm<TPhotoScheme>({
    resolver: zodResolver(photoValidation),
    mode: 'onChange',
    defaultValues: { image: [], location: '' },
  });

  useEffect(() => {
    if (photo) {
      setValue('location', photo?.location);
      setValue('image', [new File([], photo?.imageUrl, { type: 'for-url' })]);
      setImagePreview(photo.imageUrl);
    }
  }, [photo]);

  const imageFile = watch('image');
  const curLocation = watch('location');

  useEffect(() => {
    if (!imageFile[0]?.size) return;
    const imageUrl = URL.createObjectURL(imageFile[0]);
    setImagePreview(imageUrl);
  }, [imageFile]);

  const onSubmit: SubmitHandler<TPhotoScheme> = async (
    values: TPhotoScheme
  ) => {
    try {
      setIsProcessing(true);
      if (values.image[0]?.size > 0) {
        const formData = new FormData();
        formData.append('file', values.image[0]);
        formData.append('folderName', 'photos');
        await axios.delete(
          `/cloudinary/${encodeURIComponent(photo?.imageId as string)}`
        );
        const res = await axios.post('/cloudinary', formData);
        const newPhoto = {
          location: values.location,
          imageUrl: replaceExtensionWithWebp(res.data.fileUrl),
          imageId: res.data.fileId,
        };
        const response = await editPhoto({ id, newPhoto });
        if (response && response.data) {
          dispatch(closeModal());
          dispatch(
            openAlert({
              data: {
                state: 'success',
                message: 'Фото успішно відредаговано!',
              },
            })
          );
        } else if (response.error) {
          alert(response.error);
        }
      } else {
        const newPhoto = {
          location: values.location,
          imageUrl: photo?.imageUrl,
          imageId: photo?.imageId,
        };
        const response = await editPhoto({ id, newPhoto });
        if (response) {
          dispatch(
            openAlert({
              data: {
                state: 'success',
                message: 'Фото успішно відредаговано!',
              },
            })
          );
          dispatch(closeModal());
        }
      }
    } catch (error) {
      alert(error);
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
            <h1 className="mb-[60px] text-[32px] font-[500] text-[#50439F]">
              Редагування фото
            </h1>
            <SelectInput
              name="location"
              control={control}
              title="Оберіть розділ сайту"
              values={PHOTO_LOCATION_VALUES}
              placeholder="Оберіть розділ для фото"
              value={curLocation}
            />
            <FileInput
              name="image"
              control={control}
              placeholder="Завантажити зображення"
              title="Оберіть файл"
              accept="image/*"
            />
            <div className="relative mt-[60px] flex w-full justify-between">
              <span className="absolute -top-8 left-0 text-[17px] text-[#343333]">
                Оновити фото?
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

export default EditPhotoForm;
