import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi';

const SideBar = () => {
  return (
    <div>
      <img
        src="https://media-exp1.licdn.com/dms/image/D4E35AQG1mac39lDdEw/profile-framedphoto-shrink_200_200/0/1656586006964?e=1669204800&v=beta&t=SA3kZle-1QefFivMH_viP5rWpjOk4uJpQV2aX-qAUoY"
        alt="my_avatar"
        className='w-32 h-32 mx-auto rounded-full'
      />
      <h3 className='my-4 text-3xl font-medium tracking-wider'>Krasilnikov Dmytro</h3>
      <p className='px-2 py-1 my-3 bg-gray-200 rounded-full'>React Developer</p>
      <a
        href=''
        download='name'
        className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full'
      >
        <GiTie className='w-6 h-6' />Download CV
      </a>
      <div className='flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full'>
        <a href="">
          <AiFillLinkedin className='w-6 h-8 cursor-pointer' />
        </a>
        <a href="">
          <AiFillGithub className='w-6 h-8 cursor-pointer' />
        </a>
      </div>
      <div
        className='py-4 my-5 bg-gray-200'
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className='flex items-center justify-center space-x-2'>
          <GoLocation />
          <span>Dnipro, Ukraine</span>
        </div>
        <p className='my-2'>krasilnikov.dmytro@gmail.com</p>
        <p className='my-2'>+380938559908</p>
      </div>
      <button className='w-8/12 py-2 rounded-full bg-gradient-to-r from-green-400 to-blue-400'>Send me letter!</button>
      <button className='w-8/12 py-2 rounded-full bg-gradient-to-r from-green-400 to-blue-400'>Toggle Theme 3555</button>
    </div>
  );
}

export default SideBar;