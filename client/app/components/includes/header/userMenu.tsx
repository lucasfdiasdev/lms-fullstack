'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { HiOutlineUser } from 'react-icons/hi';
import MenuItem from './menuItem';

const UserMenu = () => {

  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className='relative'>
      <div
        className='flex items-center flex-row gap-x-3'
      >
        <div
          className='
            hidden
            md:block
            text-sm
            font-semibold
            py-3
            px-4
            rounded-full
            hover:bg-neutral-100
            hover:dark:bg-neutral-800
            transition 
            cursor-pointer
          '
        >
          LMS your home
        </div>
        <div
          onClick={toggleOpen}
          className='
            p-4
            md:py-1
            md:px-2
            border-[1px] 
            dark:border-neutral-200 
            border-neutral-800 
            flex 
            flex-row 
            items-center 
            gap-3 
            rounded-full 
            cursor-pointer 
            hover:shadow-md 
            transition
          '
        >
          <HiOutlineUser />
        </div>
      </div>
      {isOpen && (
        <div 
          className="
            absolute 
            rounded-xl 
            shadow-md
            w-[40vw]
            md:w-3/4
            bg-white 
            dark:bg-slate-900 
            overflow-hidden 
            right-0 
            top-12 
            text-sm
          "
        >
          <div className="flex flex-col cursor-pointer">
            {
              isOpen && (
                <>
                  <MenuItem 
                    label="Meus cursos" 
                    onClick={() => router.push('/')}
                  />
                  <MenuItem 
                    label="Registrar" 
                    onClick={() => router.push('/register')}
                  />
                  <MenuItem 
                    label="Login" 
                    onClick={() => router.push('/login')}
                  />
                  <MenuItem 
                    label="My properties" 
                    onClick={() => router.push('/properties')}
                  />
                </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default UserMenu