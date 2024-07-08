import { createPortal } from 'react-dom';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import { closeModal } from '@/store/slices/modalSlice';
import Image from 'next/image';

const FormModal = ({
  children,
  type,
}: {
  children: React.ReactNode;
  type: string;
}) => {
  const isModalOpen = useAppSelector((state) => state.modals.isModalOpen);
  const modalType = useAppSelector((state) => state.modals.type);
  const dispatch = useAppDispatch();

  useBodyScrollLock(isModalOpen);

  const ModalLayout = () => (
    <div className="fixed left-0 top-0 flex h-screen w-full items-center justify-center bg-[rgba(0,0,0,0.8)]">
      <div className="no-scrollbar relative max-h-screen w-[920px] overflow-y-auto bg-bgWhite p-[60px] text-black">
        <button
          type="button"
          onClick={() => dispatch(closeModal())}
          className=" absolute right-5 top-5 text-rose-600"
        >
          <Image
            src={'/icons/admin/close.svg'}
            alt="close"
            width={32}
            height={32}
          />
        </button>
        {children}
      </div>
    </div>
  );

  return (
    <>
      {isModalOpen &&
        type === modalType &&
        createPortal(<ModalLayout />, document.body)}
    </>
  );
};

export default FormModal;
