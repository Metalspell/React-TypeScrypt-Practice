import { myProjects } from "../data/my_projects";
import { myProjects as dataProjects } from "../data/my_projects";
import ProgectPrototype from "../components/ProjectPrototype";
import { useState } from "react";
import ProjectsNavigation from "../components/ProjectsNavigation";
import { Category } from "../data/my_projects";

const Projects = () => {
  const [displayProjects, setdisplayProjects] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState(myProjects);
  const [activeCategory, setActiveCategory] = useState("All");

  const handlerCategorySelector = (category: Category) => {
    if (category === "All") {
      setSelectedProject(myProjects);
      setActiveCategory(category)
      return;
    }
    const sortedArr = myProjects.filter((project) =>
      project.category.includes(category)
    );
    setSelectedProject(sortedArr);
    setActiveCategory(category);
  }

  return (
    <div
      className='px-5 py-2 overflow-y-scroll" style={{ height: "65vh" }}'
      style={displayProjects ? { visibility: "hidden" } : { visibility: "initial" }}
    >
      <ProjectsNavigation
        handlerCategorySelector={handlerCategorySelector}
        activeCategory={activeCategory}
      />
      <div className="relative grid grid-cols-12 gap-4 my-3">
        {
          selectedProject.map((projects, i) => (
            <div
              key={i}
              className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-12 lg:col-span-6 dark:bg-dark-200"
            >
              <ProgectPrototype
                projects={projects}
                setdisplayProjects={setdisplayProjects}
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Projects;