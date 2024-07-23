/* eslint-disable no-unused-vars */
import { modifyTitle } from '@/helpers/modifyTitle';
import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  errorText?: string;
  isRequired?: boolean;
  isEditMode?: boolean;
  className?: string;
  titleClassName?: string;
  imageSize?: { width: number; height: number };
  iconClassName?: string;
  onImageEditClick?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
    imageSize = { width: 30, height: 30 },
    onImageEditClick,
    onChange,
    ...rest
  }: TextInputProps,
  _ref: ForwardedRef<HTMLInputElement>
) {
  const inputClassName = `relative w-full rounded-xl border p-2 text-sm placeholder:text-sm
      ${
        errorText
          ? 'border-red caret-red outline-red focus:outline-red'
          : 'border-violet outline-none'
      }
      ${isEditMode && 'editIcon'}
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
          className={`text-sm font-[500] ${titleClassName}`}
        >
          {modifyTitle(title)}
          {isRequired && <span className="mt-1 text-red">*</span>}
        </label>
      )}
      <input
        onChange={onChange}
        onClick={onImageEditClick}
        {...rest}
        id={title}
        value={value}
        className={inputClassName}
      />
      {errorText && <span className="mt-1 text-xs text-red">{errorText}</span>}
    </div>
  );
});

TextInput.displayName = 'TextInput';

export default TextInput;
