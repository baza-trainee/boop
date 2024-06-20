import Image from 'next/image';

type ActionButtonProps = {
  action: 'all' | 'edit' | 'delete';
  deleteAction?: () => void;
  editAction?: () => void;
};

const ActionButtons = ({
  deleteAction,
  editAction,
  action,
}: ActionButtonProps) => {
  return (
    <div className="absolute right-2 top-2 flex gap-2">
      {action === 'all' || action === 'edit' ? (
        <button onClick={editAction}>
          <Image
            src="/icons/admin/edit.svg"
            alt="add"
            width={50}
            height={50}
            className="w-full object-cover"
          />
        </button>
      ) : null}
      {action === 'all' || action === 'delete' ? (
        <button onClick={deleteAction}>
          <Image
            src="/icons/admin/delete.svg"
            alt="add"
            width={50}
            height={50}
            className="w-full object-cover"
          />
        </button>
      ) : null}
    </div>
  );
};

export default ActionButtons;
