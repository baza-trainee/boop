import { createPortal } from 'react-dom';
import { useAppSelector } from '@/store/hook';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import { useAppDispatch } from '@/store/hook';
import { closeModal } from '@/store/slices/modalSlice';
import CloseButton from '../form/CloseButton';

const FormModalWidFull = ({
  children,
  type,
}: {
  children: React.ReactNode;
  type: string;
}) => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.modals.isModalOpen);
  const modalType = useAppSelector((state) => state.modals.type);

  useBodyScrollLock(isModalOpen);

  const ModalLayout = () => (
    <div className="fixed left-0 top-0 flex h-screen w-full items-center justify-center bg-[rgba(0,0,0,0.8)] ">
      <div className="no-scrollbar relative max-h-screen max-w-[1171px] overflow-y-auto bg-bgWhite p-[60px] text-black">
        <CloseButton onClick={() => dispatch(closeModal())} />
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

export default FormModalWidFull;
