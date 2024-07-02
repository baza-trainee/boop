import { modifyTitle } from '@/helpers/modifyTitle';
import Image from 'next/image';
import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  errorText?: string;
  isRequired: boolean;
  isEditMode?: boolean;
  className?: string;
  titleClassName?: string;
  iconSize?: number;
  iconClassName?: string;
}

const TextInput = forwardRef(function TextInput(
  {
    title,
    errorText,
    isRequired,
    isEditMode,
    value = '',
    className = '',
    titleClassName = '',
    iconClassName = '',
    iconSize = 30,
    ...rest
  }: TextInputProps,
  _ref: ForwardedRef<HTMLInputElement>
) {
  const inputClassName = `w-full rounded-xl border p-2 placeholder:text-sm
      ${
        errorText
          ? 'border-red caret-red outline-red focus:outline-red'
          : 'border-violet outline-none'
      }
      ${className}
    `;

  return (
    <div
      className={`relative w-full min-w-[100px] max-w-[442px] ${
        errorText ? 'text-error' : 'text-inherit'
      }`}
    >
      {!!title && (
        <label
          htmlFor={title}
          className={`text-sm font-medium ${titleClassName}`}
        >
          {modifyTitle(title)}
          {isRequired && <span className="text-red">*</span>}
        </label>
      )}
      {isEditMode ? (
        <Image
          src="/icons/admin/edit.svg"
          alt="edit icon"
          width={iconSize}
          height={iconSize}
          className={`absolute right-2 top-[50%] -translate-y-[15%] ${iconClassName}`}
        />
      ) : null}
      <input {...rest} id={title} value={value} className={inputClassName} />
      {errorText && <span className="text-xs text-red">{errorText}</span>}
    </div>
  );
});

TextInput.displayName = 'TextInput';

export default TextInput;
