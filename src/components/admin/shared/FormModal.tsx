import { createPortal } from 'react-dom';
import { useAppSelector } from '@/store/hook';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';

const FormModal = ({ children }: { children: React.ReactNode }) => {
  const isModalOpen = useAppSelector((state) => state.modals.isModalOpen);

  useBodyScrollLock(isModalOpen);

  const ModalLayout = () => (
    <div className="fixed left-0 top-0 flex h-screen w-full items-center justify-center bg-[rgba(0,0,0,0.8)]">
      <div className="modal w-[920px] bg-bgWhite p-[60px] text-black">
        {children}
      </div>
    </div>
  );

  return <>{isModalOpen && createPortal(<ModalLayout />, document.body)}</>;
};

export default FormModal;
