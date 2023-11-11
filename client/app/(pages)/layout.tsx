'use client';

import { useState } from "react";
import Header from "@/app/components/includes/header/header";

const Layout = ({children} : {children: React.ReactNode;}) => {
  return (
    <div>
      <Header/>
      {children}
      
    </div>
  )
}

export default Layout