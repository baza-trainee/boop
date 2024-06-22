import { useTranslations } from 'next-intl';

const GetTextBlockTraining = () => {
  const t = useTranslations('School');
  return [
    {
      paragraph: `${t('training.paragraph_1')}`,
    },
    {
      paragraph: `${t('training.paragraph_2')}`,
    },
    {
      paragraph: `${t('training.paragraph_3')}`,
    },
    {
      paragraph: `${t('training.paragraph_4')}`,
    },
    {
      paragraph: `${t('training.paragraph_5')}`,
    },
  ];
};
export default GetTextBlockTraining;
