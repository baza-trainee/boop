import React from "react";
import { associationLinks } from "../FooterLinks/links";
import MainLink from "../MainLink/MainLink";
import { useTranslations } from "next-intl";
import Image from "next/image";

type AssociationLinksProps = {
  className?: string;
};

const AssociationLinks: React.FC<AssociationLinksProps> = () => {
  const t = useTranslations("Footer");

  return (
    <div className="flex flex-col gap-3 pt-10 md:pt-24">
    <h1>{t("association")}
    <Image src="/icons/arrow.svg" width={12} height={12} alt="arrow"/></h1>
      { associationLinks.map(({ url, name }, index) => (
        <MainLink className="underline" url={url} key={index}>
          {t(name)}
        </MainLink>
      ))}
    </div>
  );
};

export default AssociationLinks;






