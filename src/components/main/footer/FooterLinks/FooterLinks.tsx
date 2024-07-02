import React from "react";
import { navigationLinks } from "./links";
import MainLink from "../MainLink/MainLink";
import { useTranslations } from "next-intl";

type FooterLinksProps = {
  className?: string;
};

const FooterLinks: React.FC<FooterLinksProps> = () => {
  const t = useTranslations("Footer");

  return (
    <div className="flex flex-col gap-5">
      {navigationLinks.map(({ url, name }, index) => (
        <MainLink url={url} key={index}>
          {t(name)}
        </MainLink>
      ))}
    </div>
  );
};

export default FooterLinks;






