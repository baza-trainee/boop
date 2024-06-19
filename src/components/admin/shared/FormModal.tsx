import { createPortal } from 'react-dom';
import { useAppSelector } from '@/store/hook';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';

const FormModal = ({
  children,
  type,
}: {
  children: React.ReactNode;
  type: string;
}) => {
  const isModalOpen = useAppSelector((state) => state.modals.isModalOpen);
  const modalType = useAppSelector((state) => state.modals.type);

  useBodyScrollLock(isModalOpen);

  const ModalLayout = () => (
    <div className="fixed left-0 top-0 flex h-screen w-full items-center justify-center bg-[rgba(0,0,0,0.8)]">
      <div className="modal w-[920px] bg-bgWhite p-[60px] text-black">
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
