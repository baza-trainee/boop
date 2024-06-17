import Image from 'next/image';

type ActionButtonProps = {
  isEditable: boolean;
  deleteAction: () => void;
  editAction?: () => void;
};

const ActionButtons = ({
  isEditable,
  deleteAction,
  editAction,
}: ActionButtonProps) => {
  return (
    <div className="absolute right-2 top-2 flex gap-2">
      {isEditable ? (
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
      <button onClick={deleteAction}>
        <Image
          src="/icons/admin/delete.svg"
          alt="add"
          width={50}
          height={50}
          className="w-full object-cover"
        />
      </button>
    </div>
  );
};

export default ActionButtons;
