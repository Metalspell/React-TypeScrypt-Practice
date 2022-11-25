import { skills } from "../data/skills";
import ServiceCard from "../components/ServiceCard";

const Skills = () => {
  return (
    <div className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
      style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}>
      <h4 className="my-3 text-xl font-semibold tracking-wide text-center uppercase">
        My skills
      </h4>
      <div className="grid gap-6 px-4 my-3 grid-col md:grid-cols-2">
        {skills.map((items) => (
          <div
            className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
            key={items.title}
          >
            <ServiceCard items={items} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;