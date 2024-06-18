import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  title?: string;
  errorText?: string;
}

const TextArea = forwardRef(function TextArea(
  { title, errorText, value = '', ...rest }: TextAreaProps,
  _ref: ForwardedRef<HTMLInputElement>
) {
  const inputClassName = `w-full rounded-md border-2 p-2 placeholder:text-sm
${
  errorText
    ? 'border-error caret-error outline-error focus:outline-error'
    : 'border-lightgrey focus:outline-darkgray'
}
`;

  return (
    <div
      className={`w-full min-w-[450px] max-w-[442px] ${
        errorText ? 'text-error' : 'text-inherit'
      }`}
    >
      {!!title && (
        <label htmlFor={title} className="text-sm font-medium">
          {title}
        </label>
      )}
      <textarea {...rest} id={title} value={value} className={inputClassName} />

      {errorText && <span className=" ml-2 text-xs">{errorText}</span>}
    </div>
  );
});

TextArea.displayName = 'TextArea';

export default TextArea;
