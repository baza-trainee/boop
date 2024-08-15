'use client';

import SectionTitle from '../shared/SectionTitle';
import ContactInfo from '../shared/ContactInfo';
import { useTranslations } from 'next-intl';
import { MAP_URL } from '../../../constants';
import AnimatedClown from './components/AnimatedClown';

const ContactsPage = () => {
  const t = useTranslations('Contacts');

  return (
    <>
      <section className="bg-bgWhite bg-[right_top_0px] bg-no-repeat pb-5 pt-[120px] md:bg-[url('/images/wave-secondary.svg')] md:pb-[255px] md:pt-[200px]">
        <div className="container mx-auto max-w-screen-3xl items-center">
          <div className="flex flex-col justify-between md:flex-row">
            <div className="relative mb-4 flex-col justify-center space-y-4 md:flex md:w-[45%] ml:w-[35%]">
              <SectionTitle title={t('title')} />
              <ContactInfo showIcons={true} />
              <AnimatedClown className="absolute right-5 max-ml:hidden ml:-bottom-[130px]" />
            </div>
            <div className="mt-4 md:mt-0 md:w-[55%] ml:w-[65%]">
              <div className="relative h-0 pb-[56.25%]">
                <iframe
                  src={MAP_URL}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 0,
                  }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactsPage;
