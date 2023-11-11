'use client';

import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";

interface HeaderItemProps {
  label: string;
  href: string;
};

const HeaderItem: React.FC<HeaderItemProps> = ({
  label,
  href,
}) => {

  const router = useRouter();
  const pathname = usePathname();

  const isActive = 
    (pathname === "/" && href === '/') ||
    pathname === href ||
    pathname?.startsWith(`${href}/`)

  const onClick = () => {
    router.push(href)
  };

  return (
    <button
      onClick={onClick}
      type="button"
      className={clsx(`
        flex 
        items-center
        transition-all
        gap-x-2
        text-sm
        font-[500]
        px-6
        py-2
      `,
      isActive && "dark:text-white dark:border-b-[2px] dark:border-white border-b-[2px] border-black transition-all"
    )}>
      {label}
    </button>
  );
};

export default HeaderItem;