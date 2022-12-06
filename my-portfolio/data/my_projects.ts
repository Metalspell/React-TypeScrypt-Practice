export interface MyProjectsTypes {
  name: string;
  description: string;
  image_link: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}

export type Category = "All" | "HTML/CSS/JS/JQuery" | 'ReactJS' | 'ReactTS (React + TypeScript';

export const myProjects: MyProjectsTypes[] = [
  {
    name: "TiserArt",
    description: "My friend's website to showcase his art. I designed the frontend. A friend wrote the backend.",
    image_link: '/images/TiserArt.png',
    deployed_url: 'https://sergey-tiser-artworks.herokuapp.com/',
    github_url: 'https://github.com/TiSer/sergey_tiser',
    category: ["HTML/CSS/JS/JQuery"],
    key_techs: ["HTML", "CSS", "JS", "JQuery"],
  },
  {
    name: "PokerCasta",
    description: "A great website project for online poker, which I worked on together with colleagues. The uniqueness of this particular poker site is that the system selects your opponents according to your rating, which eliminates the collision of beginners with professionals. For more details about my work on this site, see the 'Experience' section.",
    image_link: '/images/Pokercasta.png',
    deployed_url: 'https://pokercasta.com/',
    github_url: '',
    category: ["ReactTS (React + TypeScript"],
    key_techs: ["ReactJS", "TypeScrypt", "ReactQuery", "Formik", "Yup"],
  },
  {
    name: "Weather App",
    description: "My weather app, which I developed as part of the hiring process for the company. It gives you on-demand weather in any city on Earth or identifies your current location.",
    image_link: '/images/WeatherApp.png',
    deployed_url: 'https://metalspell.github.io/Weather-app/',
    github_url: 'https://github.com/Metalspell/Weather-app',
    category: ["ReactTS (React + TypeScript"],
    key_techs: ["ReactJS", "Redux", "TypeScrypt", "ReactQuery"],
  },
  {
    name: "MultyQuiz",
    description: "Quiz, where the data are loaded from a free API with the ability to define parameters (number of questions, topic, complexity)",
    image_link: '/images/Quiz.png',
    deployed_url: 'https://metalspell.github.io/Quiz-with-trivia-question-database/',
    github_url: 'https://github.com/Metalspell/Quiz-with-trivia-question-database',
    category: ["ReactTS (React + TypeScript"],
    key_techs: ["ReactJS", "TypeScrypt"],
  },
  {
    name: "Chat with Chuck Norris jokes",
    description: "Chat where talking with the characters of science fiction writer Roger Zelazny, you can get in response jokes from the arsenal of the famous ruler of the universe - Chuck Norris :)",
    image_link: '/images/Simple-chat.png',
    deployed_url: 'https://metalspell.github.io/Simple-chat/main',
    github_url: 'https://github.com/Metalspell/Simple-chat',
    category: ['ReactJS'],
    key_techs: ["ReactJS", "TypeScrypt", "Redux"],
  },
];