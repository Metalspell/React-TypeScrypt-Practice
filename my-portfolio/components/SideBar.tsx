import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { RiMailSendLine } from 'react-icons/ri';
import { BsTelephoneForward } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi';
import { useTheme } from 'next-themes';

const SideBar = () => {
  const { theme, setTheme } = useTheme();

  const selectTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className='row-start-1 row-end-12'>
      <img
        src="https://media-exp1.licdn.com/dms/image/D4E35AQG1mac39lDdEw/profile-framedphoto-shrink_200_200/0/1656586006964?e=1669982400&v=beta&t=6EOZtyQl4NhpHRy_XoJSwIoi7C56I6mR_oBRpaHyN5o"
        alt="my_avatar"
        className='mx-auto mt-2 rounded-full w-38 h-38'
      />
      <h3 className='my-4 text-3xl font-medium tracking-wider font-inter'>Krasilnikov Dmytro</h3>
      <p className='flex items-center justify-center px-2 py-3 mx-8 my-4 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500'>
        React Developer
      </p>
      <a
        href=''
        download='name'
        className='flex items-center justify-center px-2 py-3 mx-8 my-4 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500'
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
        style={{ marginLeft: '1rem', marginRight: '1rem' }}
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
      </div>
      <button
        className='w-8/12 py-4 my-3 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400 px2'
        onClick={() => window.open('mailto:krasilnikov.dmytro@gmail.com')}
      >
        Send me letter!
      </button>
      <button
        className='w-8/12 py-4 mt-3 mb-8 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400 px2'
        onClick={selectTheme}
      >
        Dark theme / LightTheme
      </button>
    </div >
  );
}

export default SideBar;