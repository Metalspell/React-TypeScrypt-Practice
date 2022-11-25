import '../styles/globals.css';
import type { AppProps } from 'next/app';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <div className='grid grid-cols-12 gap-6 px-5 lg:px-48 my-14 sm:px-20 md:px-32'>
        <div className='col-span-12 text-center bg-white dark:bg-black lg:col-span-4 rounded-2xl'>
          <SideBar />
        </div>
        <div className="flex flex-col col-span-12 overflow-hidden bg-white shadow-custom-light dark:shadow-custom-dark rounded-2xl lg:col-span-8 dark:bg-dark-500">
          <NavBar />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  )
}
