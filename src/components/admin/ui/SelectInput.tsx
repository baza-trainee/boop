import { ChangeEvent, InputHTMLAttributes } from 'react';
import {
  DeepMap,
  FieldError,
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';

interface ISelectFieldProps {
  title: string;
  value?: string;
  errors?: string;
  placeholder?: string;
  isRequired?: boolean;
  values: {
    name: string;
    value: string;
  }[];
}

type TProps<T extends FieldValues> = InputHTMLAttributes<HTMLSelectElement> &
  UseControllerProps<T> &
  ISelectFieldProps;

const SelectInput = <T extends FieldValues>({
  title,
  values,
  placeholder,
  isRequired,
  control,
  name,
  value,
  rules,
}: TProps<T>) => {
  const { field, formState } = useController<T>({ name, control, rules });

  const errorMessage = (
    formState.errors[name] as DeepMap<FieldValues, FieldError>
  )?.message;

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value) {
      field.onChange(e.target.value);
    }
  };

  return (
    <div className="flex max-h-[85px] w-full max-w-[442px] grow flex-col gap-[5px]">
      <label htmlFor="title" className="text-sm font-medium">
        {title}
        {isRequired && <span className="text-red mt-1">*</span>}
      </label>
      <select
        id={title}
        value={value}
        className="box-border h-[44px] rounded-xl border border-violet bg-bgViolet px-2 py-[6px] text-sm text-violet outline-none"
        onChange={handleChange}
      >
        <option className="bg-bgViolet" value="">
          {placeholder || 'Please Select'}
        </option>
        {values &&
          values.map((el, index) => (
            <option key={index} value={el.value}>
              {el.name}
            </option>
          ))}
      </select>
      {!!errorMessage && (
        <span className="text-xs text-red mt-1">{errorMessage}</span>
      )}
    </div>
  );
};

export default SelectInput;
