'use client';

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
        
    </div>
  )
}

export default HeaderSidebarRoutes;