import React from "react";
import { socialLinks } from "../FooterLinks/links";
import MainLink from "../MainLink/MainLink";
import Image from "next/image";

type SocialLinksProps = {
  className?: string;
};

const SocialLinks: React.FC<SocialLinksProps> = () => {
  return (
    <div className="flex flex-row gap-5">
      {socialLinks.map(({ url, name, icon }, index) => (
        <MainLink url={url} key={index}>
          <Image src={icon} alt={name} width={24} height={24} />
        </MainLink>
      ))}
    </div>
  );
};

export default SocialLinks;
