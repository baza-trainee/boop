import { useState } from 'react';
import axios from '@/lib/axios';
import clsx from 'clsx';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from '@/store/hook';
import { closeModal } from '@/store/slices/modalSlice';
import { BUTTON_TITLE } from '@/types/partners-friends';
import Loader from '@/components/shared/loader/Loader';
import { openAlert } from '@/store/slices/alertSlice';
import { partnersFriendsApi } from '@/store/api/partnersFriendsApi';
import { replaceExtensionWithWebp } from '@/helpers/convertToWebp';
import FileInput from '../../ui/FileInput';

interface EditPartnersFriendsFormProps {
  editType: keyof typeof BUTTON_TITLE;
  logoId: string;
  id: string;
}

interface UpdatedPartners {
  link: string;
  logoUrl: string;
  logoId: string;
  id: string;
}

type SubmitForm = {
  image?: File[];
  urlLink?: string;
};

function EditPartnersFriendsForm({
  editType,
  logoId,
  id,
}: EditPartnersFriendsFormProps) {
  const dispatch = useAppDispatch();
  const [isProcessing, setIsProcessing] = useState(false);

  const [editPartnersFriends] =
    partnersFriendsApi.useEditPartnersFriendsMutation();

  const {
    handleSubmit,
    register,
    control,
    reset,
    watch,
    formState: { errors, isDirty },
  } = useForm<SubmitForm>({
    mode: 'onChange',
    defaultValues: { image: [], urlLink: '' },
  });

  const urlLinkWatch = watch('urlLink');
  const imageWatch = watch('image');

  const isRedyToEdit =
    (urlLinkWatch && urlLinkWatch.length > 0 && !errors.urlLink && isDirty) ||
    (imageWatch && imageWatch.length > 0 && !errors.image && isDirty);

  const onSubmit: SubmitHandler<SubmitForm> = async (values) => {
    try {
      setIsProcessing(true);
      const updatedPartnerFriend: Partial<UpdatedPartners> = {};
      if (
        values.image &&
        values.image.length > 0 &&
        values.image[0]?.size > 0
      ) {
        const formData = new FormData();
        formData.append('file', values.image[0]);
        formData.append('folderName', 'partners');
        await axios.post(`/cloudinary/remove`, { imageId: logoId });
        const res = await axios.post('/cloudinary', formData);

        updatedPartnerFriend.logoId = res.data.fileId;
        updatedPartnerFriend.logoUrl = replaceExtensionWithWebp(
          res.data.fileUrl
        );
      }

      if (values.urlLink) {
        updatedPartnerFriend.link = values.urlLink;
      }

      const response = await editPartnersFriends({
        id,
        ...updatedPartnerFriend,
      });

      if (response && response.data) {
        reset();
        dispatch(closeModal());
        dispatch(
          openAlert({
            data: {
              state: 'success',
              message: `${BUTTON_TITLE[editType].slice(0, -1)} успішно відредагований`,
            },
          })
        );
      }
    } catch (error) {
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
          Редагування {BUTTON_TITLE[editType].toLowerCase()}
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
          className="flex w-[296px] flex-col gap-6"
        >
          <div className="relative box-border flex w-full max-w-[296px] flex-col items-start justify-start gap-[4px]">
            <label
              htmlFor="urlLink"
              className="font-['Raleway', sans-serif] text-left text-[16px] font-[500] not-italic leading-[24px] tracking-[0px] text-[#0a0a0a]"
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
                {...register('urlLink', {
                  required: false,
                  minLength: {
                    value: 10,
                    message: 'Мінімальна кількість символів 10',
                  },
                  maxLength: {
                    value: 2048,
                    message: 'Максимальна кількість символів 2048',
                  },
                  pattern: {
                    value: /^https?:/,
                    message: 'Некоректний формат посилання (http:)',
                  },
                })}
                aria-invalid={errors.urlLink ? 'true' : 'false'}
              />
              {errors.urlLink && (
                <span className="text-red-500">{errors.urlLink.message}</span>
              )}
            </div>
          </div>
          <FileInput
            titleColor="#0a0a0a"
            name="image"
            control={control}
            placeholder={'Завантажити файл'}
            title="Додайте логотип:"
            isRequired={false}
            accept="image/*"
          />
          <div className="mt-10">
            <span className="mb-0 mt-0 text-left font-['Raleway',_sans-serif] text-[17px] font-medium normal-case not-italic leading-[26px] tracking-[0px] text-[#343333]">
              Змінити інформацію?
            </span>
            <div className="mt-3 flex justify-between">
              <button
                disabled={!isRedyToEdit}
                type="submit"
                className={clsx(
                  "rounded-[32px] bg-[#e3e3e4] px-6 py-[18px] font-['Raleway',_sans-serif] text-[20px] font-bold normal-case not-italic leading-[20px] tracking-[0px] text-[#97979a]",
                  isRedyToEdit && 'bg-[#e93405]',
                  isRedyToEdit && 'text-[#ffffff]'
                )}
              >
                Змінити
              </button>
              <button
                disabled={!isRedyToEdit}
                onClick={() => dispatch(closeModal())}
                type="button"
                className={clsx(
                  "rounded-[32px] border-[2px] px-6 py-[18px] text-center font-['Raleway',_sans-serif] text-[20px] font-medium normal-case not-italic leading-[20px] tracking-[0px]",
                  isRedyToEdit && 'border-[#ffab0b]',
                  !isRedyToEdit && 'border-[#e3e3e4]',
                  isRedyToEdit && 'text-[#2f245e]',
                  !isRedyToEdit && 'text-[#97979a]'
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

export default EditPartnersFriendsForm;
