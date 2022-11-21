import { IServices } from "../data";

const ServiceCard: React.FC<{ service: IServices }> = ({ service: { Icon, title, about } }) => {
  function createMarkup() {
    return {
      __html: about,
    }
  }
  return (
    <>
      <div className="flex justify-between px-2">
        <Icon className='w-8 h-8 text-green' />
        <h5 className='py-1 text-xl font-bold text-center'>{title}</h5>
      </div>
      <p className='px-2 mt-3 mb-2' dangerouslySetInnerHTML={createMarkup()} />
    </>
  );
}

export default ServiceCard;