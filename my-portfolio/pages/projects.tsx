import { myProjects } from "../data/my_projects";
import ProgectPrototype from "../components/ProjectPrototype";

const Projects = () => {
  return (
    <div className='p-3'>
      <nav>Navbar</nav>
      <div className="relative grid grid-cols-12 gap-4 my-3">
        {
          myProjects.map((projects) => (
            <div className="col-span-12 p-2 sm:col-span-6 lg:col-span-4">
              <ProgectPrototype projects={projects} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Projects;