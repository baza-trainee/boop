import { useTranslations } from 'next-intl';

const GetTextBlockHospitalClowning = () => {
  const t = useTranslations('About');
  return [
    {
      paragraph: `${t('hospital_clowning.paragraph_1')}`,
    },
    {
      paragraph: `${t('hospital_clowning.paragraph_2')}`,
    },
    {
      paragraph: `${t('hospital_clowning.paragraph_3')}`,
    },
    {
      paragraph: `${t('hospital_clowning.paragraph_4')}`,
    },
  ];
};
export default GetTextBlockHospitalClowning;
