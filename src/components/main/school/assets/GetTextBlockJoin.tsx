import { useTranslations } from 'next-intl';
import highlightWords from './highlightWords';

const GetTextBlockJoin = () => {
  const t = useTranslations('School');
  const specialWords = [
    'емпатія',
    'підтримки',
    'смішним',
    'харизмою',
    'вчитись',
    'розвиватись',
    'шукати себе',
    'empatia',
    'supporto',
    'divertente',
    'carisma',
    'imparare',
    'svilupparsi',
    'cercare se stessa',
    'empathy',
    'support',
    'funny',
    'charisma',
    'to learn',
    'to develop',
    'to seek oneself',
  ];
  return [
    {
      paragraph: highlightWords(t('join.paragraph_1'), specialWords),
    },
    {
      paragraph: highlightWords(t('join.paragraph_2'), specialWords),
    },
    {
      paragraph: highlightWords(t('join.paragraph_3'), specialWords),
    },
    {
      paragraph: highlightWords(t('join.paragraph_4'), specialWords),
    },
  ];
};

export default GetTextBlockJoin;
