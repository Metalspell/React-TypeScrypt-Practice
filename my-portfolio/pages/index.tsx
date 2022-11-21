import { services } from "../data";
import ServiceCard from "../components/ServiceCard";

const Index = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 text-base font-medium">
        Hello! You have reached the page of an enthusiastic and quite experienced
        (1 year commercial experience) JUNIOR FRONT-END DEVELOPER.
        I have experience in developing a large site for online poker using
        advanced web development technologies.
        <a href='https://pokercasta.com/'>
          <span className="cursor-pointer text-green">- link to project.</span>
        </a>
        Excellent problem-solving skills and ability to perform well in a team.
        I will be happy to help the company achieve its goals and grow with it as a
        professional.
        The principle by which I live now: "Rise to a new level!"
      </h5>
      <div className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}>
        <h4 className="my-3 text-xl font-semibold tracking-wide">
          My skills
        </h4>
        <div className="grid gap-6 my-3 md:grid-cols-2">
          {/* children's initial and animate property should be same as the parent during a stagger effect  */}
          {services.map((service) => (
            <div
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
              key={service.title}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Index;

