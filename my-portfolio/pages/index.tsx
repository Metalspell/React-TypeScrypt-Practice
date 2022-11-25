import MyStory from "../components/MyStory";

const Index = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="p-4 my-3 mt-5 text-base font-medium">
        Hello! You have reached the page of an enthusiastic and quite experienced
        (1 year commercial experience) JUNIOR FRONT-END DEVELOPER.
        I have experience in developing a large site for online poker using
        advanced web development technologies.
        <a href='https://pokercasta.com/'>
          <span className="cursor-pointer text-green">- link to project.</span>
        </a>
        <pre></pre>
        Excellent problem-solving skills and ability to perform well in a team.
        I will be happy to help the company achieve its goals and grow with it as a
        professional.
        The principle by which I live now: "Rise to a new level!"
      </h5>
      <MyStory />
    </div>
  );
}

export default Index;

