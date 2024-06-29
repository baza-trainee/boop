import { useAppDispatch } from '@/store/hook';
import { openModal } from '@/store/slices/modalSlice';
import FormModal from '../shared/FormModal';
import Image from 'next/image';
import ContactsForm from './form/ContactsForm';

type ContactsItemProps = {
  title: string;
  content?: string;
  type: string;
  isFirst?: boolean;
};

const ContactsItem = ({ title, content, type, isFirst }: ContactsItemProps) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <div
        className={`${isFirst ? 'min-w-[416px]' : 'w-auto min-w-[196px]'} flex flex-col items-center justify-center gap-[24px] overflow-hidden bg-[#EDEBF5] pt-[24px] text-violet`}
      >
        <h3 className={`text-[20px] font-[800]`}>{title}</h3>
        <span
          className={`mx-[6px] w-[95%] truncate text-center text-[16px] font-[500]`}
        >
          {content}
        </span>
        <button
          onClick={() => dispatch(openModal({ type: `contacts-edit-${type}` }))}
          className="flex w-full items-center justify-center gap-4 border border-lightViolet p-2
           text-[16px] font-[500]"
        >
          <Image
            src="/icons/admin/pen.svg"
            alt="edit-icon"
            width={30}
            height={30}
          />
          Змінити
        </button>
      </div>
      <FormModal type={`contacts-edit-${type}`}>
        <ContactsForm type={type} />
      </FormModal>
    </>
  );
};

export default ContactsItem;
