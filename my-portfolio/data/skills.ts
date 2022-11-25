import { FaLaptopCode } from 'react-icons/fa';
import { RiHtml5Line } from 'react-icons/ri';
import { SiCss3 } from 'react-icons/si';
import { TbBrandBootstrap } from 'react-icons/tb';
import { SiTypescript } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import { AiFillGithub } from 'react-icons/ai';
import { RiReactjsFill } from 'react-icons/ri';
import { TbApi } from 'react-icons/tb';
import { DiScrum } from 'react-icons/di';
import { IconType } from 'react-icons';


export interface MySkillsTypes {
  title: string;
  about: string;
  Icon: IconType
}

export const skills: MySkillsTypes[] = [
  {
    title: "HTML5",
    about: "",
    Icon: RiHtml5Line
  },
  {
    title: "CSS",
    about: "CSS3, Flex-Box, Grid, SASS, LESS, Styled Components, Tailwind CSS, CSS Animation",
    Icon: SiCss3
  },
  {
    title: "CSS frameworks",
    about: "Bootstrap, Materialize",
    Icon: TbBrandBootstrap,
  },
  {
    title: "JavaScript",
    about: "ES6, ES7, ES8, ES9, ES10, OOP",
    Icon: IoLogoJavascript,
  },
  {
    title: "ReactJS",
    about: "ReactHooks, ReactRouter, ReactContext, ReactRedux, ReactQuery, NextJS",
    Icon: RiReactjsFill,
  },
  {
    title: "TypeScript",
    about: "React Typescript",
    Icon: SiTypescript,
  },
  {
    title: "API",
    about: "Swagger, Postman",
    Icon: TbApi,
  },
  {
    title: "Methodologies",
    about: "Scrum, Jira",
    Icon: DiScrum,
  }
]
