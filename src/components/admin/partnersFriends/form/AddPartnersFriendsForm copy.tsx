import React, { useState } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from '@/store/hook';
import { closeModal } from '@/store/slices/modalSlice';
import {
  BUTTON_TITLE,
  SECTION_PARTNERS_FRIENDS,
} from '@/types/partners-friends';
import Loader from '@/components/shared/loader/Loader';
import { openAlert } from '@/store/slices/alertSlice';
import { TLogoScheme, logoValidation } from './scheme';
import { partnersFriendsApi } from '@/store/api/partnersFriendsApi';
import { replaceExtensionWithWebp } from '@/helpers/convertToWebp';
import FileInput from '../../ui/FileInput';

interface AddPartnersFriendsFormProps {
  addType: keyof typeof BUTTON_TITLE;
}

function AddPartnersFriendsForm({ addType }: AddPartnersFriendsFormProps) {
  const dispatch = useAppDispatch();
  const [isProcessing, setIsProcessing] = useState(false);
  const [addPartnersFriends] =
    partnersFriendsApi.useAddPartnersFriendsMutation();

  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm<TLogoScheme>({
    resolver: zodResolver(logoValidation),
    mode: 'onChange',
    defaultValues: { image: [], urlLink: '' },
  });

  const onSubmit: SubmitHandler<TLogoScheme> = async (values: TLogoScheme) => {
    try {
      setIsProcessing(true);
      const formData = new FormData();
      formData.append('file', values.image[0]);
      formData.append('folderName', 'partners');
      const res = await axios.post('/api/cloudinary', formData);

      const newPartnerFriend = {
        logoId: res.data.fileId,
        link: values.urlLink,
        logoUrl: replaceExtensionWithWebp(res.data.fileUrl),
        section: SECTION_PARTNERS_FRIENDS[addType],
      };

      const response = await addPartnersFriends(newPartnerFriend);

      if (response && response.data) {
        reset();
        dispatch(closeModal());
        dispatch(
          openAlert({
            data: {
              state: 'success',
              message: `${BUTTON_TITLE[addType]} успішно додано!`,
            },
          })
        );
      }
    } catch (error) {
      console.log(error);
      dispatch(
        openAlert({
          data: {
            state: 'error',
            message: 'Сталася помилка при додаванні. Спробуйте ще раз.',
          },
        })
      );
    } finally {
      setIsProcessing(false);
    }
  };

  if (isProcessing) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="flex flex-col items-center">
        <h2 className="mb-10 text-left font-['Raleway',_sans-serif] text-[32px] font-bold normal-case not-italic leading-[45px] tracking-[0px] text-[#50439f]">
          Додавання {BUTTON_TITLE[addType].toLowerCase()}
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
          className="flex w-[296px] flex-col gap-6"
        >
          <div className="relative box-border flex w-full max-w-[296px] flex-col items-start justify-start gap-[4px]">
            <label
              htmlFor="urlLink"
              className="font-['Raleway', sans-serif] font-[500] text-[#0a0a0a]"
            >
              Вкажіть посилання на сайт:
            </label>
            <div className="relative w-full">
              <input
                className={clsx(
                  "w-full rounded-xl border-[2px] border-[#50439f] p-2 font-['Raleway',_sans-serif] text-[16px] text-base font-medium normal-case not-italic leading-[22px] tracking-[0px] text-[#949398] placeholder-[#949398] outline-none placeholder-shown:border-[#949398]",
                  errors.urlLink && 'border-red-500'
                )}
                id="urlLink"
                type="text"
                autoComplete="off"
                placeholder="Введіть посилання"
                {...register('urlLink', { required: true })}
              />
              {errors.urlLink && (
                <span className="text-red-500">{errors.urlLink.message}</span>
              )}
            </div>
          </div>
          <FileInput
            name="image"
            titleColor="#0a0a0a"
            control={control}
            placeholder={'Завантажити файл'}
            title="Додайте логотип:"
            isRequired={true}
            accept="image/*"
          />
          <div className="mt-10">
            <span className="font-['Raleway', sans-serif] mb-0 mt-0 text-left text-[17px] font-medium normal-case not-italic leading-[26px] tracking-[0px] text-[#343333]">
              Додати нового {BUTTON_TITLE[addType]}?
            </span>
            <div className="mt-3 flex justify-between">
              <button
                disabled={!isValid}
                type="submit"
                className={clsx(
                  "rounded-[32px] bg-[#e3e3e4] px-6 py-[18px] font-['Raleway',_sans-serif] text-[20px] font-bold normal-case not-italic leading-[20px] tracking-[0px]",
                  isValid && 'bg-[#e93405]',
                  isValid && 'text-[#ffffff]',
                  !isValid && 'text-[#97979a]'
                )}
              >
                Додати
              </button>
              <button
                disabled={!isValid}
                onClick={() => dispatch(closeModal())}
                type="button"
                className={clsx(
                  "rounded-[32px] border-[2px] px-6 py-[18px] text-center font-['Raleway',_sans-serif] text-[20px] font-medium normal-case not-italic leading-[20px] tracking-[0px]",

                  isValid && 'border-[#ffab0b]',
                  !isValid && 'border-[#e3e3e4]',
                  isValid && 'text-[#2f245e]',
                  !isValid && 'text-[#97979a]'
                )}
              >
                Скасувати
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPartnersFriendsForm;
