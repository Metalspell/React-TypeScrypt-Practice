import { languages } from "../data/languages";
import { MyLanguagesTypes } from "../data/languages";
import { experience } from "../data/experience";

const Resume = () => {
  return (
    <div className='px-6 py-2'>
      <div className="grid gap-16 md:grid-cols-2">
        <div className="bg-gray-200 dark:bg-dark-200 dark:bg-black-500 rounded-xl">
          <h5 className="px-5 my-3 text-2xl italic font-bold">
            Education
          </h5>
          <div className="my-8">
            <h5 className="px-5 my-2 font-bold text-x1">
              Dnipropetrovsk State Technical University of Railway Transport
            </h5>
            <p className="px-5 text-x1">
              2004 - 2009
            </p>
            <p className="px-5 text-x1">
              Railway transport engineer.
            </p>
          </div>
        </div>
        <div className="bg-gray-200 dark:bg-dark-200 dark:bg-black-500 rounded-xl">
          <h5 className="px-5 my-3 text-2xl italic font-bold">
            Languages
          </h5>
          <div className="my-8">
            {
              languages.map((items) => (
                <>
                  <h5 className="px-5 my-2 font-bold text-x1">
                    {items.title}
                  </h5>
                  <p className="px-5 text-x1">
                    {items.level}
                  </p>
                </>
              ))
            }
          </div>
        </div>
      </div>
      <div
        className="flex-grow p-4 mt-5 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide text-center uppercase">
          My experience
        </h4>
        <div className="grid gap-4 md:grid-rows-2">
          {experience.map((items) => (
            <div
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
              key={items.company}
            >
              <h3 className="px-5 my-2 font-bold text-x6">
                {items.company}
              </h3>
              <p className="px-5 text-x1">Position:
                <span className="italic"> {items.position}</span>
              </p>
              <p className="px-5 text-x1">{items.month_begin} {items.year_begin} - {items.month_end} {items.year_end}</p>
              <p className="px-5 mt-4 text-x1">{items.activity}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resume;