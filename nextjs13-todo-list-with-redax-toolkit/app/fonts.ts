import { Rubik } from 'next/font/google';
import { Inter } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] })

export const rubik = Rubik ({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap', 
  variable: '--rubik-font',
})