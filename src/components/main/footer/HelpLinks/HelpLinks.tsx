import React from "react";
import { helpLinks } from "../FooterLinks/links";
import MainLink from "../MainLink/MainLink";
import { useTranslations } from "next-intl";

type HelpLinksProps = {
  className?: string;
};

const HelpLinks: React.FC<HelpLinksProps> = () => {
  const t = useTranslations("Footer");

  return (
    <div className="flex flex-col gap-3 underline mt-10">
      {helpLinks.map(({ url, name }, index) => (
        <MainLink url={url} key={index}>
          {t(name)}
        </MainLink>
      ))}
    </div>
  );
};

export default HelpLinks;






