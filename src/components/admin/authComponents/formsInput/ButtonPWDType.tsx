import Image from 'next/image';

interface PropsButton {
  toglePWDType(): void;
  isVisiblePWD: boolean;
}
function ButtonPWDType({ toglePWDType, isVisiblePWD }: PropsButton) {
  return (
    <button
      type="button"
      className=" absolute right-2 top-1/2 -translate-y-1/2"
      onClick={toglePWDType}
    >
      <Image
        src={
          isVisiblePWD
            ? '/icons/admin/OpenEye.svg'
            : '/icons/admin/CloseEye.svg'
        }
        alt={isVisiblePWD ? 'Приховати пароль' : 'Показати пароль'}
        width={24}
        height={24}
      />
    </button>
  );
}

export default ButtonPWDType;
