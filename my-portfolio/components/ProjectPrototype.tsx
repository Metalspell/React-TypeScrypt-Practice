import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md"
import { MyProjectsTypes } from "../data/my_projects";
import { useState } from "react";

const ProgectPrototype: React.FC<{ projects: MyProjectsTypes }> = ({
  projects: {
    name,
    image_link,
    category,
    deployed_url,
    description,
    github_url,
    key_techs
  }
}) => {
  const [showInfo, setshowInfo] = useState<boolean>(false);
  return (
    <div>
      <img
        src={image_link}
        alt={name}
        className="cursor-pointer"
        onClick={() => setshowInfo(true)}
      />
      <p className="my-2 text-center">
        {name}
      </p>
      {showInfo && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto text-black md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
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
          <div>
            <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
            <h3 className="mb-3 font-medium">{description}</h3>
            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {
                key_techs.map((items) => (
                  <span key={items}>
                    {items}
                  </span>
                ))
              }
            </div>
          </div>
          <button
            onClick={() => setshowInfo(false)}
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