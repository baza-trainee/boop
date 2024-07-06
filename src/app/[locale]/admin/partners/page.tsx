import PartnersFriendsPage from '@/components/admin/partnersFriends/PartnersFriendsPage';
import { SECTION_PARTNERS_FRIENDS } from '@/types/partners-friends';

const PartnersPage = () => {
  return (
    <PartnersFriendsPage
      title="Партнери"
      section="partners"
      buttonTitle="partners"
      editType="partners"
      addType="partners"
    />
  );
};

export default PartnersPage;
