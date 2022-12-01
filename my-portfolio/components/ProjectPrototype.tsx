import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md"
import { MyProjectsTypes } from "../data/my_projects";
import { useState } from "react";
import Image from "next/image";

const ProgectPrototype: React.FC<{ projects: MyProjectsTypes, setdisplayProjects: (value: boolean) => void }> = ({
  projects: {
    name,
    image_link,
    category,
    deployed_url,
    description,
    github_url,
    key_techs
  },
  setdisplayProjects
}) => {
  const [showInfo, setshowInfo] = useState<boolean>(false);
  return (
    <div>
      <Image
        src={image_link}
        alt={name}
        className="cursor-pointer"
        onClick={() => { setshowInfo(true), setdisplayProjects(true) }}
        layout="responsive"
        height="150"
        width="300"
      />
      <p className="my-2 text-center">
        {name}
      </p>
      {showInfo && (
        <div 
        className="absolute top-0 left-0 z-10 w-full h-auto m-auto text-black sm:block lg:grid bg-sky-200 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100"
        style={!showInfo ? { visibility: "hidden" } : { visibility: "initial" }}
        >
          <div>
            <img
              src={image_link}
              alt={name}
            />
            <div className="flex justify-center my-4 space-x-3">
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                target="_blank"
              >
                <AiFillGithub /> <span>GitHub</span>
              </a>
              <a
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                target="_blank"
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </div>
          </div>
          <div className="p-4">
            <h2 className="mb-3 text-xl font-medium md:text-2xl lg:text-start sm:text-center">{name}</h2>
            <h3 className="my-8 font-medium">{description}</h3>
            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider sm:justify-center">
              {
                key_techs.map((items) => (
                  <span
                    key={items}
                    className='px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 round'
                  >
                    {items}
                  </span>
                ))
              }
            </div>
          </div>
          <button
            onClick={() => { setshowInfo(false), setdisplayProjects(false) }}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
}

export default ProgectPrototype;