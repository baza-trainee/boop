import { Metadata } from 'next';
import { PageProps } from '@/types';
import ContactsPage from '@/components/main/contacts/ContactsPage';

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return {
    title: `${params.locale === 'it' ? 'BOOP - i nostri contatti' : params.locale === 'en' ? 'BOOP - our contacts' : 'БУП - наші контакти'} `,
    description: `${params.locale === 'it' ? "Ci troviamo all'indirizzo di Kiev, str. V.Chornvola, 28/1" : params.locale === 'en' ? 'We are located at the address of Kyiv, str. V. Chornovola, 28/1' : 'Ми знаходимося за адресою м. Київ, вул. В.Чорновола, 28/1'} `,
  };
}

const Contacts = () => {
  return <ContactsPage />;
};

export default Contacts;
