'use client';

import { BiLogOut } from "react-icons/bi";

import { HeaderSidebarData } from "@/app/data/data";
import HeaderSidebarItem from "./headerSidebarItem";

const HeaderSidebarRoutes = () => {

  const routes = HeaderSidebarData; 

  return (
    <div className="mt-2">
      {
        routes.map((item) => (
          <HeaderSidebarItem
            key={item.href}
            label={item.label}
            href={item.href}
            icon={item.icon}
          />
        ))
      }
      <HeaderSidebarItem
      
        label="logout"
        href="/"
        icon={BiLogOut}
      />
        
    </div>
  )
}

export default HeaderSidebarRoutes;