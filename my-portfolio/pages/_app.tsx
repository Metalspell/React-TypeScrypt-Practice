import '../styles/globals.css';
import type { AppProps } from 'next/app';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <div className='grid grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48'>

        <div className="top-0 bottom-0 left-0 right-0 hidden w-full lg:block h-150 lg:absolute dark:bg-stars dark:bg-repeat dark:bg-black"></div>

        <img className="hidden w-4/12 lg:absolute lg:dark:block h-4/12 right-4" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" alt="img" />

        <div className="top-0 bottom-0 left-0 right-0 hidden bg-transparent bg-repeat h-150 lg:absolute bg-3000 animate-cloudsMove bg-light-clouds w-10000 dark:animate-cloudsMove dark:bg-1000 dark:bg-clouds "></div>
        <div className='z-10 h-full col-span-12 p-4 text-base text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark '>
          <SideBar />
        </div>
        <div className="z-10 flex flex-col col-span-12 overflow-hidden bg-white shadow-custom-light dark:shadow-custom-dark rounded-2xl lg:col-span-9 dark:bg-dark-500">
          <NavBar />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  )
}
