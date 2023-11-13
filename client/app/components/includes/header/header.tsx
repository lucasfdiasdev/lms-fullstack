'use client';

import Link from 'next/link';
import { useState } from 'react';

import { HiOutlineMenuAlt3 } from 'react-icons/hi';

import Logo from '@/app/components/logo';
import HeaderRoutes from './headerRoutes';
import ThemeSwitcher from '@/app/utils/theme-switcher';
import HeaderSidebarRoutes from './headerSidebarRoutes';
import UserMenu from './userMenu';

const Header = () => {

  const [ active, setActive ] = useState(false);
  const [ openSidebar, setOpenSidebar ] = useState(false);
  
  if(typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 85) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  };

  const handleClose = () => {
    setOpenSidebar(false);
  }

  return (
    <div
      className='w-full relative'
    >
      <div
       className={`${active 
        ? 'dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-back fixed top-0 left-0 w-full h-[80px] z-[80] border-b dark:border-[#ffffff1c] shadow transition-all duration-300' 
        : 'w-full border-b dark:border-[#ffffff1c] h-[80px] z-[80] dark:shadow'}
        `}
      >
        <div 
          className='w-[95%] 800px:w-[92%] m-auto py-2 h-full'
        >
          <div
            className='w-full h-[80px] flex items-center justify-between p-3'
          >
            <div>
              <Link
                href={'/'}
                className={`text-[25px] font-Poppins font-[500] text-black dark:text-white`}
              >
                LMS Cursos
              </Link>
            </div>
            <div className="flex items-center gap-x-6">
              <HeaderRoutes/>
              {/* navigation */}
              <button 
                onClick={() => setOpenSidebar(true)}
                className='800px:hidden'
              >
                <HiOutlineMenuAlt3
                  size={25}
                  className='cursor-pointer dark:text-white text-black'
                 
                />
              </button>
              
              <UserMenu/>

              <ThemeSwitcher/>
            </div>
          </div>
        </div>
        {/* mobile navigation sidebar */}
        {
          openSidebar && (
            <div 
              className='
                fixed 
                w-full
                h-screen
                top-0
                left-0
                z-[9999]
                dark:bg-[unset]
                bg-[#00000024]
              '
            >
              <div 
                className='
                  fixed 
                  w-[360px] 
                  z-[99999] 
                  h-screen 
                  bg-white 
                  dark:bg-slate-900 
                  dark:bg-opacity-90 
                  top-0 
                  right-0
                  transition-all
                  duration-300
                '
              >
                <button
                  className='
                    top-4
                    right-4
                    absolute
                    py-2
                    px-4
                    hover:ring-2
                    hover:rounded-md
                    transition-all
                    duration-200
                  '
                  onClick={handleClose}
                >
                  X
                </button>

                {/* header sidebar */}
                <Logo/>
                {/* content sidebar */}
                <HeaderSidebarRoutes/>
              </div>
            </div>
          )
        }
      </div>

    </div>
  );
};

export default Header;