import { ChangeEvent, InputHTMLAttributes } from 'react';
import {
  DeepMap,
  FieldError,
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';

type TProps<T extends FieldValues> = InputHTMLAttributes<HTMLInputElement> &
  UseControllerProps<T> & { title?: string; isRequired: boolean };

const FileInput = <T extends FieldValues>({
  title,
  placeholder,
  control,
  name,
  rules,
  isRequired,
  ...rest
}: TProps<T>) => {
  const { field, formState } = useController<T>({ name, control, rules });
  const fileName = field.value && field.value[0]?.name;

  const errorMessage = (
    formState.errors[name] as DeepMap<FieldValues, FieldError>
  )?.message;

  const inputWrapperStyle = `relative w-full`;

  const inputContainerStyle = `flex bg-bgViolet w-full gap-6 rounded-xl border p-2 cursor-pointer ${
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
        <label htmlFor="title" className=" text-sm font-medium">
          {title}
          {isRequired && <span className="text-red">*</span>}
        </label>
      )}

      <label htmlFor={title + 'file'}>
        <div className={inputContainerStyle}>
          <span className="w-[250px] truncate text-center text-sm text-violet">
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
