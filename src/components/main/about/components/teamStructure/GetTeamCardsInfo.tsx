import { useTranslations } from 'next-intl';

const GetTeamCardsInfo = () => {
  const t = useTranslations('About.team_structure');
  return [
    {
      title: `${t('management_title')}`,
      text: `${t('management_text')}`,
      image: '/images/teamStructure/manedgers.png',
    },
    {
      title: `${t('volunteers_title')}`,
      text: `${t('volunteers_text')}`,
      image: '/images/teamStructure/volontirs.png',
    },
  ];
};

export default GetTeamCardsInfo;
