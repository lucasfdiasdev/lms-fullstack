import './globals.css';
import type { Metadata } from 'next';
import { Josefin_Sans, Poppins } from 'next/font/google';

import { ThemeProvider } from '@/app/utils/theme-provider';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-Poppins'
});

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-Poppins'
});

export const metadata: Metadata = {
  title: 'LMS Cursos',
  description: 'Plataforma de estudos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${poppins.variable} 
          ${josefin.variable}
          !bg-white
          dark:bg-gradient-to-b
          bg-no-repeat
          dark:from-gray-900
          dark:to-black
          duration-300
        `}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
