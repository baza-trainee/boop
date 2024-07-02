'use client';

import PageTitle from '../../shared/PageTitle';

import FormChangePassword from '../formsInput/FormChangePassword';

function ChandePasswordPage() {
  return (
    <section className="no-scrollbar relative max-h-[150vh] overflow-y-auto  px-[24px] py-[100px]">
      <PageTitle title="Змінити пароль" />
      <FormChangePassword />
    </section>
  );
}

export default ChandePasswordPage;
