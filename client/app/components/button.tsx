import clsx from 'clsx';
import React from 'react'
import { IconType } from 'react-icons';

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  value: string;
  type?: "submit" | "reset" | "button" ;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  outline,
  value,
  type,
  small,
  icon: Icon
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      value={value}
      className={clsx(`
        relative
        rounded-lg
        hover:opacity-80
        transition
        w-full
        ${outline ? 'bg-white' : 'dark:bg-sky-700'}
        ${outline ? 'border-black' : 'border-sky-700'}
        ${outline ? 'text-black' : 'text-white'}
        
        ${small ? 'py-1' : 'py-2'}
        ${small ? 'text-sm' : 'text-md'}
        ${small ? 'font-light' : 'font-semibold'}
        ${small ? 'border-[1px]' : 'border-2'}
      `)}
    >
      {
        Icon && (
          <Icon
            size={24}
            className='
              absolute
              left-4
              top-3
            '
          />
        )
      }
      {label}

    </button>
  )
}

export default Button