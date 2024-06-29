import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { TContactsScheme, contactsValidation } from './scheme';
import { useAppDispatch } from '@/store/hook';
import { contactsApi } from '@/store/api/contactsApi';
import { closeModal } from '@/store/slices/modalSlice';
import TextInput from '../../ui/TextInput';
import { useEffect } from 'react';

// const translateType = (type: string) => {
//   if (type === 'phone') {
//     return 'номер телефон';
//   }
//   if (type === 'email' || type === 'facebook' || type === 'instagram') {
//     return type;
//   }
// };

const ContactsForm = () => {
  const dispatch = useAppDispatch();

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
      phone: '',
      email: '',
      facebook: '',
      instagram: '',
      address: '',
    },
  });

  useEffect(() => {
    if (!contacts) return;
    setValue('phone', contacts[0]?.phone);
  }, [contacts]);

  const onSubmit: SubmitHandler<TContactsScheme> = async (
    values: TContactsScheme
  ) => {
    console.log(values);
  };

  return (
    <div className="flex h-full w-full flex-col items-start justify-center border border-red">
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className="flex w-[50%] flex-col"
      >
        <div className="flex w-full flex-col items-start justify-center gap-[24px]">
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                errorText={errors.phone?.message}
                placeholder="Введіть новий номер телефону"
                title="Телефон"
                isRequired={true}
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
                placeholder="Введіть новий номер email"
                title="Телефон"
                isRequired={true}
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
                placeholder="Введіть нову адресу"
                title="Адреса"
                isRequired={true}
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
                placeholder="Введіть новий лінк до Instagram"
                title="Instagram"
                isRequired={true}
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
                placeholder="Введіть новий лінк до Facebook"
                title="Facebook"
                isRequired={true}
              />
            )}
          />
          <div className="relative mt-[60px] flex w-full justify-between">
            <button
              disabled={!!Object.keys(errors).length}
              className="min-w-[123px] whitespace-nowrap rounded-3xl bg-red px-4 py-2 text-white disabled:bg-gray-500"
            >
              Оновити
            </button>
            <button
              onClick={() => dispatch(closeModal())}
              className="w-[149px] rounded-3xl border border-yellow px-4 py-2 text-violet"
            >
              Скасувати
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactsForm;
