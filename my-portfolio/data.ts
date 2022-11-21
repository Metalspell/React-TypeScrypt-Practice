import { FaLaptopCode } from 'react-icons/fa';
import { RiHtml5Line } from 'react-icons/ri';
import { SiCss3 } from 'react-icons/si';
import { TbBrandBootstrap } from 'react-icons/tb';
import { SiTypescript } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import { RiReactjsFill } from 'react-icons/ri'
import { IconType } from 'react-icons';


export interface IServices {
  title: string;
  about: string;
  Icon: IconType
}

export const services: IServices[] = [
  {
    title: "HTML5",
    about: "",
    Icon: RiHtml5Line
  },
  {
    title: "CSS",
    about: "CSS3, SASS, LESS, Styled Components, CSS Animation",
    Icon: SiCss3
  },
  {
    title: "CSS frameworks",
    about: "Bootstrap, Materialize",
    Icon: TbBrandBootstrap,
  },
  {
    title: "JavaScript",
    about: "ES6, ES7, ES8, ES9, ES10",
    Icon: IoLogoJavascript,
  },
  {
    title: "React",
    about: "ReactHooks, ReactRouter, ReactContext, ReactRedux, ReactQuery",
    Icon: RiReactjsFill,
  },
  {
    title: "TypeScript",
    about: "React Typescript",
    Icon: SiTypescript,
  }
]