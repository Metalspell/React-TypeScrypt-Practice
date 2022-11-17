import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  activeItem: string;
  setActiveItem: (value: string) => void;
  name: string;
  route: string;
}

const NavItem: React.FC<Props> = ({ activeItem, setActiveItem, name, route }) => {
  return activeItem !== name ? (
    <Link href={route}>
      <span
        onClick={() => setActiveItem(name)}
        className='text-green-500 hover:'
      >
        {name}
      </span>
    </Link>
  ) : null
}

const NavBar = () => {
  const [activeItem, setActiveItem] = useState<string>('');

  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/") {
      setActiveItem('About');
    }
    else if (pathname === "/projects") {
      setActiveItem('Projects');
    }
    else if (pathname === "/resume") {
      setActiveItem('Resume');
    }
  }, [])


  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="font-bold border-b-4 text-green text-x-1 md:text-2xl">
        {activeItem}
      </span>
      <div className="flex space-x-3 text-lg text-red-400">
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name='About'
          route='/'
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name='Projects'
          route='/projects'
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name='Resume'
          route='/resume'
        />
      </div>
    </div>
  );
}

export default NavBar;