import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { RiMailSendLine } from 'react-icons/ri';
import { BsTelephoneForward } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi';
import { useTheme } from 'next-themes';
import Image from "next/image";

const SideBar = () => {
  const { theme, setTheme } = useTheme();

  const selectTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className='row-start-1 row-end-12'>
      <Image
        src="/images/photo_2022-12-06_15-14-11.jpg"
        alt="my_avatar"
        className='mx-auto mt-2 rounded-full'
        width={180}
        height={180}

      />
      <h3 className='my-4 text-3xl font-medium tracking-wider font-diplomata'>Krasilnikov Dmytro</h3>
      <p className='flex items-center justify-center px-2 py-3 mx-8 my-4 uppercase bg-gray-200 rounded-full font-diplomata text-gold dark:bg-dark-200 dark:bg-black-500'>
        Frontend React Developer
      </p>
      <a
        href='https://drive.google.com/file/d/1HNwcSwQyIhUYROwdklelpeliarhioBSq/view?usp=sharing'
        target="_blank"
        download='name'
        className='flex items-center justify-center px-2 py-3 mx-8 my-4 uppercase bg-gray-200 rounded-full cursor-pointer bg-400 dark:bg-600/100 bg-light-theme animate-gradient dark:bg-light-theme-v2 dark:animate-gradientV2 dark:bg-dark-200 dark:bg-black-500'
      >
        <GiTie className='w-6 h-6' />Download CV
      </a>
      <div className='flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full'>
        <a href="https://linkedin.com/in/dmytro-krasilnikov-b9b780169" target="_blank">
          <AiFillLinkedin className='w-6 h-8 cursor-pointer' />
        </a>
        <a href="https://t.me/JSpadavan" target="_blank">
          <FaTelegramPlane className='w-6 h-8 cursor-pointer' />
        </a>
        <a href="https://github.com/Metalspell" target="_blank">
          <AiFillGithub className='w-6 h-8 cursor-pointer' />
        </a>
      </div>
      <div
        className='py-4 my-5 bg-gray-200 dark:bg-dark-200 rounded-xl'
      >
        <div className='flex items-center justify-center space-x-2'>
          <GoLocation />
          <span>Dnipro, Ukraine</span>
        </div>
        <div className='flex items-center justify-center space-x-2'>
          <RiMailSendLine />
          <p className='my-2'>
            krasilnikov.dmytro@gmail.com
          </p>
        </div>
        <div className='flex items-center justify-center space-x-2'>
          <BsTelephoneForward />
          <p className='my-2'>+380938559908</p>
        </div>
        <button
          className='w-8/12 py-4 my-3 text-white rounded-full animate-gradient dark:animate-gradientV2 dark:bg-600/400 dark:bg-light-theme-v2 bg-400 bg-light-theme dark:animate-gradient px2'
          onClick={() => window.open('mailto:krasilnikov.dmytro@gmail.com')}
        >
          Send me letter!
        </button>
      </div>
      <button
        className='w-8/12 py-4 mt-3 mb-8 text-white rounded-full animate-gradient bg-400 bg-light-theme dark:bg-light-theme-v2 dark:animate-gradientV2 px2 dark:bg-600/400'
        onClick={selectTheme}
      >
        Dark theme / Light theme
      </button>
    </div >
  );
}

export default SideBar;