import { MySkillsTypes } from "../data/skills";

const ServiceCard: React.FC<{ items: MySkillsTypes }> = ({ items: { Icon, title, about } }) => {
  function createMarkup() {
    return {
      __html: about,
    }
  }
  return (
    <>
      <Icon className='w-8 h-8 m-auto text-green' />
      <div className="flex flex-col justify-center align-middle">
        <h5 className='py-1 text-xl font-bold text-center'>{title}</h5>
        <p className='px-2 mt-3 mb-2 text-center' dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </>
  );
}

export default ServiceCard;