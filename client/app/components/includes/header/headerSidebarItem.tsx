'use client';

import Link from "next/link";
import { IconType } from "react-icons";

interface HeaderSidebarItemProps {
  href: string;
  label: string;
  icon: IconType;
}

const HeaderSidebarItem: React.FC<HeaderSidebarItemProps> = ({
  label,
  href,
  icon: Icon,
}) => {
  return (
    <Link
      href={href}
      className="
        flex 
        items-center
        w-full
        gap-x-2
        py-3
        px-6
        cursor-pointer
        hover:bg-slate-700
      "
    >
      <Icon size={25}/>
      {label}
    </Link>
  )
}

export default HeaderSidebarItem;