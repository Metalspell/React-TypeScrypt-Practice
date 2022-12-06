import { Category } from "../data/my_projects";

export const NavItem: React.FC<{
  value: Category,
  handlerCategorySelector: Function,
  activeCategory: string
}> = ({
  value,
  handlerCategorySelector,
  activeCategory
}) => {
    return (
      <li
        className={activeCategory === value ? "capitalize cursor-pointer text-green" : "capitalize cursor-pointer hover:text-green"}
        onClick={() => handlerCategorySelector(value)}
      >
        {value}
      </li>
    )
  }

const ProjectsNavigation: React.FC<{ handlerCategorySelector: Function, activeCategory: string }> = (props) => {
  return (
    <div className="flex flex-wrap px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="All" {...props} />
      <NavItem value="HTML/CSS/JS/JQuery"  {...props} />
      <NavItem value="ReactJS"  {...props} />
      <NavItem value="ReactTS (React + TypeScript"  {...props} />
    </div>
  );
}

export default ProjectsNavigation;