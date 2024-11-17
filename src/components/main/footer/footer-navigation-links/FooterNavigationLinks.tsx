import React from "react";
import { useTranslations } from "next-intl";
import { navigationLinks } from "../links";
import { Link } from "@/navigation";
import clsx from "clsx";

type FooterNavigationLinksProps = {
  className?: string;
};

const FooterNavigationLinks: React.FC<FooterNavigationLinksProps> = ({
  className,
}) => {
  const t = useTranslations("Footer.navigation");

  return (
    <nav aria-labelledby="footer-navigation-links-title" className={clsx("flex flex-col gap-6", className)}>
      <ul role="list">
        {navigationLinks.map(({ url, name }) => (
          <li key={url}>
            <Link
              href={url}
              scroll={true}
              className="hover:underline"
            >
              {t(name)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterNavigationLinks;
