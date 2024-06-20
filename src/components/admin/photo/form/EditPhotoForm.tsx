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
import FileInput from '../../ui/FileInput';
import SelectInput from '../../ui/SelectInput';

const EditPhotoForm = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();
  const [imagePreview, setImagePreview] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const [editPhoto] = photoApi.useEditPhotoMutation();
  const { data: photos } = photoApi.useGetAllPhotoQuery('photos');

  const photo = photos?.find((image) => image.id === Number(id));

  const {
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
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
        //need to delete old and upload new photo
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
            <h1 className="mb-[60px] text-3xl font-[500] text-violet">
              Редагування фото
            </h1>
            <SelectInput
              name="location"
              control={control}
              title="Оберіть розділ сайту:"
              values={['Галерея', 'Про нас']}
              placeholder="Оберіть розділ для фото"
              isRequired={true}
              value={curLocation}
            />
            <FileInput
              name="image"
              control={control}
              placeholder={'Оберіть файл'}
              title="Оберіть файл:"
              isRequired={true}
              accept="image"
            />
            <div className="relative mt-[60px] flex w-full justify-between">
              <span className="absolute -top-8 left-0 text-sm">
                Оновити фото?
              </span>
              <button
                disabled={!!Object.keys(errors).length}
                className="min-w-[123px] whitespace-nowrap rounded-3xl bg-red px-4 py-2 text-white disabled:bg-gray-500"
              >
                {isProcessing ? 'Обробка запиту...' : 'Оновити'}
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

export default EditPhotoForm;
