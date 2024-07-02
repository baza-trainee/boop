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
  } = contactsApi.useGetAllContactsQuery('contacts');

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<TContactsScheme>({
    resolver: zodResolver(contactsValidation),
    mode: 'onChange',
    defaultValues: {
      address: '',
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
    setValue('address', result.address);
    setValue('instagram', result.instagram);
    setValue('facebook', result.facebook);
  }, [contacts]);

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!contacts?.length) return;
    const result = contacts[0];
    setValue('phone', result.phone);
    setValue('email', result.email);
    setValue('address', result.address);
    setValue('instagram', result.instagram);
    setValue('facebook', result.facebook);
  };

  if (isLoading || isFetching) return <Loader />;

  const onSubmit: SubmitHandler<TContactsScheme> = async (
    values: TContactsScheme
  ) => {
    try {
      setIsProcessing(true);

      const updatedContacts = {
        phone: values.phone,
        email: values.email,
        address: values.address,
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
          className="flex w-[50%] flex-col items-start gap-[24px]"
        >
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                errorText={errors.phone?.message}
                placeholder="+380 67 596 1600"
                title="Телефон"
                isRequired={true}
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
                isRequired={true}
                isEditMode={true}
              />
            )}
          />
          <Controller
            name="address"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                errorText={errors.address?.message}
                placeholder="вулиця В'ячеслава Чорновола, 28"
                title="Адреса"
                isRequired={true}
                isEditMode={true}
              />
            )}
          />
          <Controller
            name="instagram"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                errorText={errors.instagram?.message}
                placeholder="https://www.instagram..."
                title="Instagram"
                isRequired={true}
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
                isRequired={true}
                isEditMode={true}
              />
            )}
          />
          <div className="relative mt-[60px] flex w-[90%] justify-between">
            <button
              disabled={!!Object.keys(errors).length}
              className="min-w-[123px] whitespace-nowrap rounded-3xl bg-red px-4 py-2 text-white disabled:bg-gray-500"
            >
              {isProcessing ? 'Обробка запиту...' : 'Змінити'}
            </button>
            <button
              onClick={(e) => handleReset(e)}
              className="w-[149px] rounded-3xl border border-yellow px-4 py-2 text-violet"
            >
              Скасувати
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactsPage;
