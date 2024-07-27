import React from 'react';
import { useTranslations } from 'next-intl';

import { useGetAllPartnersFriendsQuery } from '@/store/api/partnersFriendsApi';
import PartnersList from './components/PartnersList';

const Partners = () => {
  const t = useTranslations('Partners');
  const { data, isFetching, isError } = useGetAllPartnersFriendsQuery();
  const friends = data?.filter((el) => el.section === 'friends');
  const partners = data?.filter((el) => el.section === 'partners');

  return (
    <>
      {isFetching && <p className="container">Loading...</p>}
      {isError && <p className="container">Something went wrong!</p>}
      {!isFetching && data && (
        <section className="screen-3xl mx-auto mb-[70px] flex w-full max-w-[1920px] flex-col items-center justify-center md:mb-[100px] md:flex-row ml:mb-[100px] xl:mb-[120px] 4xl:mb-[120px]">
          <PartnersList
            title={t('title_1')}
            partnerItems={friends}
            sectionName="friends"
          />
          <PartnersList
            title={t('title_2')}
            partnerItems={partners}
            sectionName="partners"
          />
        </section>
      )}
    </>
  );
};
export default Partners;
