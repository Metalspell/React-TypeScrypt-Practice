import '../styles/globals.css';
import type { AppProps } from 'next/app';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import { ThemeProvider } from 'next-themes';
import { AuthProvider } from "../context/mainContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <AuthProvider>
        <div className='grid grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-10 xl:px-48'>
          <div className='z-10 h-full col-span-12 p-4 text-base text-center bg-white dark:bg-dark-500 lg:col-span-4 xl:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark '>
            <SideBar />
          </div>
          <div className="z-10 flex flex-col col-span-12 overflow-hidden bg-white shadow-custom-light dark:shadow-custom-dark rounded-2xl lg:col-span-8 xl:col-span-9 dark:bg-dark-500">
            <NavBar />
            <Component {...pageProps} />
          </div>
        </div>
      </AuthProvider>
    </ThemeProvider>
  )
}
