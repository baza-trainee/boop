import { useAppDispatch } from '@/store/hook';
import { openModal } from '@/store/slices/modalSlice';
import FormModal from '../shared/FormModal';

type ContactsItemProps = {
  title: string;
  content?: string;
  type: string;
};

const ContactsItem = ({ title, content, type }: ContactsItemProps) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="flex min-w-[196px] flex-col items-center justify-center gap-[24px] bg-[#eee] pt-[24px]  text-violet">
        <h3 className="mx-2">{title}</h3>
        <span className="mx-2">{content}</span>
        <button
          onClick={() => dispatch(openModal({ type: `contacts-edit-${type}` }))}
          className="w-full border border-violet p-2"
        >
          Змінити
        </button>
      </div>
      <FormModal type={`contacts-edit-${type}`}>{type}</FormModal>
    </>
  );
};

export default ContactsItem;
