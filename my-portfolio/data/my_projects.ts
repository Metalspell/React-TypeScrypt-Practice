export interface MyProjectsTypes {
  name: string;
  description: string;
  image_link: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}

export type Category = "HTML/CSS/JS/JQuery" | 'React' | 'ReactTS (React + TypeScript';

export const myProjects: MyProjectsTypes[] = [
  {
    name: "TiserArt",
    description: "My friend's website to showcase his art. I designed the frontend. A friend wrote the backend.",
    image_link: '/images/TiserArt.png',
    deployed_url: 'https://sergey-tiser-artworks.herokuapp.com/',
    github_url: 'https://github.com/TiSer/sergey_tiser',
    category: ["HTML/CSS/JS/JQuery"],
    key_techs: ["ddddd"],
  },
];