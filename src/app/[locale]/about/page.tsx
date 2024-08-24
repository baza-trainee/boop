import { Metadata } from 'next';
import { PageProps } from '@/types';
import AboutPage from '@/components/main/about/AboutPage';

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return {
    title: `${params.locale === 'it' ? 'BOOP - chi siamo' : params.locale === 'en' ? 'BOOP - about us' : 'БУП - про нас'} `,
    description: `${params.locale === 'it' ? "BOOP - ci assicuriamo che l'infanzia duri indipendentemente dalle circostanze" : params.locale === 'en' ? 'BOOP - we make sure that childhood lasts regardless of the circumstances' : 'БУП – робимо так, щоб дитинство тривало незалежно від обставин'} `,
  };
}

const About = () => {
  return <AboutPage />;
};

export default About;
