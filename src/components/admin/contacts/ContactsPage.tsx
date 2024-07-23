'use client';

import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { TContactsScheme, contactsValidation } from './scheme';
import { useAppDispatch } from '@/store/hook';
import { contactsApi } from '@/store/api/contactsApi';
import { openAlert } from '@/store/slices/alertSlice';
import TextInput from '../ui/TextInput';
import PageTitle from '../shared/PageTitle';
import Loader from '@/components/shared/loader/Loader';

const ContactsPage = () => {
  const dispatch = useAppDispatch();
  const [isProcessing, setIsProcessing] = useState(false);
  const [editContacts] = contactsApi.useEditContactsMutation();

  const {
    data: contacts,
    isLoading,
    isFetching,
    isError,
  } = contactsApi.useGetAllContactsQuery();

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<TContactsScheme>({
    resolver: zodResolver(contactsValidation),
    mode: 'onChange',
    defaultValues: {
      addressUa: '',
      addressEn: '',
      addressIt: '',
      phone: '',
      email: '',
      facebook: '',
      instagram: '',
    },
  });

  useEffect(() => {
    if (!contacts?.length) return;
    const result = contacts[0];
    setValue('phone', result.phone);
    setValue('email', result.email);
    setValue('addressUa', result.addressUa);
    setValue('addressEn', result.addressEn);
    setValue('addressIt', result.addressIt);
    setValue('instagram', result.instagram);
    setValue('facebook', result.facebook);
  }, [contacts]);

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!contacts?.length) return;
    const result = contacts[0];
    setValue('phone', result.phone);
    setValue('email', result.email);
    setValue('addressUa', result.addressUa);
    setValue('addressEn', result.addressEn);
    setValue('addressIt', result.addressIt);
    setValue('instagram', result.instagram);
    setValue('facebook', result.facebook);
  };

  if (isError) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="flex h-[50%] w-[80%] items-center justify-center rounded-[20px] bg-slate-200 p-[40px]">
          <p className="text-center text-[32px] text-yellow">
            Сталася помилка під час завантаження даних.
            <br /> Будь ласка, спробуйте оновити сторінку або повторити спробу
            пізніше.
          </p>
        </div>
      </div>
    );
  }

  if (isLoading || isFetching) return <Loader />;

  const onSubmit: SubmitHandler<TContactsScheme> = async (
    values: TContactsScheme
  ) => {
    try {
      setIsProcessing(true);

      const updatedContacts = {
        phone: values.phone,
        email: values.email,
        addressUa: values.addressUa,
        addressEn: values.addressEn,
        addressIt: values.addressIt,
        facebook: values.facebook,
        instagram: values.instagram,
      };
      const id = contacts?.[0].id as string;
      const response = await editContacts({ id, updatedContacts });
      if (response && response.data) {
        dispatch(
          openAlert({
            data: {
              state: 'success',
              message: 'Інформація змінена',
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
    <section className="relative px-[24px] py-[100px]">
      <PageTitle title="Контакти" />
      <div className="flex flex-col gap-[24px]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
          className="flex w-full flex-col items-start gap-[24px]"
        >
          <div className="flex gap-[24px]">
            <div className="flex w-[292px] flex-col items-start gap-[24px]">
              <Controller
                name="addressUa"
                control={control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    errorText={errors.addressUa?.message}
                    placeholder="01135, м. Київ, вул. В.Чорновола, 28/1"
                    title="Адреса українською"
                    isEditMode={true}
                  />
                )}
              />
              <Controller
                name="addressEn"
                control={control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    errorText={errors.addressEn?.message}
                    placeholder="01135, Kyiv, str. V. Chornovola, 28/1"
                    title="Адреса англійською"
                    isEditMode={true}
                  />
                )}
              />
              <Controller
                name="addressIt"
                control={control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    errorText={errors.addressIt?.message}
                    placeholder="01135, Kiev, str. V.Chornvola, 28/1"
                    title="Адреса італійською"
                    isEditMode={true}
                  />
                )}
              />
              <div className="relative mt-[60px] flex w-full justify-between">
                <button
                  disabled={!!Object.keys(errors).length}
                  className="min-w-[123px] whitespace-nowrap rounded-3xl bg-red px-4 py-2 font-[500] text-white disabled:bg-[#E3E3E4] disabled:text-[#97979A]"
                >
                  {isProcessing ? 'Обробка запиту...' : 'Змінити'}
                </button>
                <button
                  disabled={!!Object.keys(errors).length}
                  onClick={(e) => handleReset(e)}
                  className="w-[149px] rounded-3xl border border-yellow px-4 py-2 text-violet disabled:border-[#E3E3E4] disabled:text-[#97979A]"
                >
                  Скасувати
                </button>
              </div>
            </div>

            <div className="flex w-[628px] flex-col gap-[24px]">
              <div className="flex gap-[24px]">
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      {...field}
                      errorText={errors.phone?.message}
                      placeholder="+380 67 596 1600"
                      title="Телефон"
                      isEditMode={true}
                    />
                  )}
                />
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      {...field}
                      errorText={errors.email?.message}
                      placeholder="bulkina.ola@gmail.com"
                      title="Email"
                      isEditMode={true}
                    />
                  )}
                />
              </div>
              <div className="flex gap-[24px]">
                <Controller
                  name="instagram"
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      {...field}
                      errorText={errors.instagram?.message}
                      placeholder="https://www.instagram..."
                      title="Instagram"
                      isEditMode={true}
                    />
                  )}
                />
                <Controller
                  name="facebook"
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      {...field}
                      errorText={errors.facebook?.message}
                      placeholder="https://www.facebook..."
                      title="Facebook"
                      isEditMode={true}
                    />
                  )}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactsPage;
