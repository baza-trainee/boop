'use client';

import PageTitle from '../shared/PageTitle';

import FormPassword from './form/FormPassword';

function ChandePasswordPage() {
  return (
    <section className="no-scrollbar relative max-h-[150vh] overflow-y-auto  px-[24px] py-[100px]">
      <PageTitle title="Змінити пароль" />
      <FormPassword />
    </section>
  );
}

export default ChandePasswordPage;
