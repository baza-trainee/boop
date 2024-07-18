import Image from 'next/image';

type ActionButtonProps = {
  action: 'all' | 'edit' | 'delete';
  deleteAction?: () => void;
  editAction?: () => void;
  width?: string;
};

const ActionPressButtons = ({
  deleteAction,
  editAction,
  action,
  width,
}: ActionButtonProps) => {
  return (
    <div
      className={`absolute bottom-0  flex ${width ? width : 'w-full'} ${width ? 'right-[50%] translate-x-[50%]' : 'right-0'}`}
    >
      {action === 'all' || action === 'edit' ? (
        <button
          onClick={editAction}
          className="flex h-[45px] flex-1 items-center justify-center border border-lightViolet bg-bgViolet"
        >
          <Image
            src="/icons/admin/edit.svg"
            alt="add"
            width={32}
            height={32}
            className="h-[30px] w-[30px] object-cover"
          />
        </button>
      ) : null}
      {action === 'all' || action === 'delete' ? (
        <button
          onClick={deleteAction}
          className="flex h-[45px] flex-1 items-center justify-center border border-lightViolet bg-bgViolet"
        >
          <Image
            src="/icons/admin/delete.svg"
            alt="add"
            width={32}
            height={32}
            className="h-[30px] w-[30px] object-cover"
          />
        </button>
      ) : null}
    </div>
  );
};

export default ActionPressButtons;
