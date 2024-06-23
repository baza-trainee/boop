'use client';

import { contactsApi } from '@/store/api/contactsApi';
import PageTitle from '../shared/PageTitle';
import Loader from '@/components/shared/loader/Loader';
import ContactsItem from './ContactsItem';

const ContactsPage = () => {
  const {
    data: contacts,
    isLoading,
    isFetching,
  } = contactsApi.useGetAllContactsQuery('contacts');

  if (isLoading || isFetching) return <Loader />;

  return (
    <section className="no-scrollbar relative max-h-[150vh] overflow-y-auto px-[24px] py-[100px]">
      <PageTitle title="Контакти" />
      <div className="flex flex-col gap-[24px]">
        <div className="flex w-[856px] items-center justify-start gap-[24px]">
          <ContactsItem
            title="Адреса"
            content={contacts?.[0].addressUa}
            type="address"
          />
          <ContactsItem
            title="Телефон"
            content={contacts?.[0].phone}
            type="phone"
          />
          <ContactsItem
            title="Email"
            content={contacts?.[0].email}
            type="email"
          />
        </div>
        <div className="flex w-[856px] items-center justify-start gap-[24px]">
          <ContactsItem
            title="Instagram"
            content={contacts?.[0].instagram}
            type="instagram"
          />
          <ContactsItem
            title="Facebook"
            content={contacts?.[0].facebook}
            type="facebook"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactsPage;
