import { ChangeEvent, InputHTMLAttributes } from 'react';
import {
  DeepMap,
  FieldError,
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';

type TProps<T extends FieldValues> = InputHTMLAttributes<HTMLInputElement> &
  UseControllerProps<T> & {
    title?: string;
    isRequired?: boolean;
    isEditMode?: boolean;
    isPressPage?: boolean;
    titleColor?: string;
  };

const FileInput = <T extends FieldValues>({
  title,
  titleColor,
  placeholder,
  control,
  name,
  rules,
  isRequired,
  isEditMode,
  isPressPage,
  ...rest
}: TProps<T>) => {
  const { field, formState } = useController<T>({ name, control, rules });
  const fileName = field.value && field.value[0]?.name;

  const errorMessage = (
    formState.errors[name] as DeepMap<FieldValues, FieldError>
  )?.message;

  const inputWrapperStyle = `relative w-full`;

  const inputContainerStyle = `flex bg-bgViolet w-full h-[40px] gap-6 rounded-xl border p-2 cursor-pointer text-[16px] ${
    errorMessage ? 'border-red' : 'border-violet'
  }`;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      field.onChange(e.target.files);
    }
  };
  return (
    <div className={inputWrapperStyle}>
      {!!title && (
        <label
          htmlFor="title"
          className={`mb-1 block text-base font-[500] ${isEditMode && !isPressPage ? 'text-mainViolet' : `text-[${titleColor}]` || 'text-black'}`}
        >
          {title}
          {isRequired && <span className="text-red">*</span>}
        </label>
      )}

      <label htmlFor={title + 'file'}>
        <div className={`${inputContainerStyle} uploadIcon`}>
          <span
            className={`w-[250px] truncate text-left text-[16px] text-[#0A0A0A]`}
          >
            {fileName || placeholder}
          </span>
        </div>
      </label>

      <input
        {...rest}
        ref={field.ref}
        type="file"
        id={title + 'file'}
        hidden
        onChange={handleChange}
      />

      {!!errorMessage && (
        <span className="text-xs text-red">{errorMessage}</span>
      )}
    </div>
  );
};

export default FileInput;
