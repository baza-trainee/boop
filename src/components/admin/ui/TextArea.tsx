import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import { modifyTitle } from '@/helpers/modifyTitle';

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  title?: string;
  className?: string;
  errorText?: string;
}

const TextArea = forwardRef(function TextArea(
  { title, errorText, value = '', className = '', ...rest }: TextAreaProps,
  _ref: ForwardedRef<HTMLInputElement>
) {
  const inputClassName = `w-full rounded-xl border p-2 text-sm placeholder:text-sm
      ${
        errorText
          ? 'border-red caret-red outline-red focus:outline-red'
          : 'border-violet outline-none'
      }
      ${className}
    `;

  return (
    <div
      className={`w-full min-w-[100px] max-w-[442px] ${
        errorText ? 'text-error' : 'text-inherit'
      }`}
    >
      {!!title && (
        <label htmlFor={title} className="text-base font-medium">
          {modifyTitle(title)}
        </label>
      )}
      <textarea {...rest} id={title} value={value} className={inputClassName} />
      {errorText && <span className="text-xs text-red">{errorText}</span>}
    </div>
  );
});

TextArea.displayName = 'TextArea';

export default TextArea;
