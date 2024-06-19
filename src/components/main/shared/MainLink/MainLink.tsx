"use client";

import Link from "next/link";

type MainLinkProps = {
  url: string;
  children?: React.ReactNode;
  className?: string;
};

const MainLink: React.FC<MainLinkProps> = ({
  url,
  className,
  children,
  ...props
}) => {
  return (
    <Link href={url} {...props} className={className}>
      {children}
    </Link>
  );
};

export default MainLink;