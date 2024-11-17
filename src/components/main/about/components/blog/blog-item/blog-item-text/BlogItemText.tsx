'use client';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

const TEXT_LENGTH = 500;

interface BlogItemTextProps {
  text: string;
}

const BlogItemText = ({ text }: BlogItemTextProps) => {
  const [isShortText, setIsShortText] = useState<boolean>(true);
  const t = useTranslations('About.blog.read_more_btn');

  const shortText =
    text.length > TEXT_LENGTH + 50 ? text.slice(0, TEXT_LENGTH) + '...' : null;

  return (
    <div>
      {shortText ? (
        <p className="text-xl leading-[1.6] text-textViolet transition-all duration-200 ease-linear max-ml:text-[18px] max-sm:text-base">
          {isShortText ? shortText : text}
          {' '}
          <button
            onClick={() => setIsShortText((state) => !state)}
            className="inline-block cursor-pointer font-medium text-textViolet underline"
            aria-expanded={!isShortText}
            aria-label={isShortText ? t('read') : t('close')}
          >
            {isShortText ? t('read') : t('close')}
          </button>
        </p>
      ) : (
        <p className="text-xl leading-[1.5] text-textViolet max-ml:text-[18px] max-sm:text-base">
          {text}
        </p>
      )}
    </div>
  );
};

export default BlogItemText;
