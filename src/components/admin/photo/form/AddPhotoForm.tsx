import Image from 'next/image';
import axios from '@/utils/axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TPhotoScheme, photoValidation } from './scheme';
import { useAppDispatch } from '@/store/hook';
import { closeModal } from '@/store/slices/modalSlice';
import FileInput from '../../ui/FileInput';
import SelectInput from '../../ui/SelectInput';
import { useEffect, useState } from 'react';

const AddPhotoForm = () => {
  const dispatch = useAppDispatch();
  const [imagePreview, setImagePreview] = useState('');
  const {
    handleSubmit,
    control,
    watch,
    formState: { isValid },
  } = useForm<TPhotoScheme>({
    resolver: zodResolver(photoValidation),
    mode: 'onChange',
    defaultValues: { image: [], location: '' },
  });

  const imageFile = watch('image');

  useEffect(() => {
    if (imageFile.length === 0) return;
    const imageUrl = URL.createObjectURL(imageFile[0]);
    setImagePreview(imageUrl);
  }, [imageFile]);

  const onSubmit: SubmitHandler<TPhotoScheme> = async (
    values: TPhotoScheme
  ) => {
    if (!isValid) return;
    try {
      const formData = new FormData();
      formData.append('file', values.image[0]);
      formData.append('location', values.location);
      const res = await axios.post('/photo', formData);
      if (res.status === 200) {
        alert('success');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className="flex w-[90%] flex-col gap-[30px]"
      >
        <div className="flex gap-[60px]">
          <div className="flex w-1/2 flex-col items-center justify-center gap-[24px]">
            <h1 className="mb-[60px] text-3xl font-[500] text-violet">
              Додавання фото
            </h1>
            <SelectInput
              name="location"
              control={control}
              title="Оберіть розділ сайту:"
              values={['Галерея', 'Про нас']}
              placeholder="Оберіть розділ для фото"
              isRequired={true}
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
                Додати фото?
              </span>
              <button className="w-[123px] rounded-3xl bg-red px-4 py-2 text-white disabled:bg-gray-500">
                Додати
              </button>
              <button
                onClick={() => dispatch(closeModal())}
                className="w-[149px] rounded-3xl  border border-yellow px-4 py-2 text-violet"
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

export default AddPhotoForm;
