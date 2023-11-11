'use client';

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

import { BiMoon, BiSun } from 'react-icons/bi';

const ThemeSwitcher = () => {

  const { theme, setTheme } = useTheme();
  const [ mounted, setMounted ] = useState(false);

  useEffect(() => {
    setMounted(true);
  },[])

  return (
    <div
      className="flex items-center justify-center"
    >
      {
        theme === 'light' ? (
          <BiMoon
            className="cursor-pointer"
            fill="black"
            size={25}
            onClick={() => setTheme("dark")}
          />
        ) : (
          <BiSun
            className="cursor-pointer"
            size={25}
            onClick={() => setTheme("light")}
          />
        )
      } 
    </div>
  )
}

export default ThemeSwitcher