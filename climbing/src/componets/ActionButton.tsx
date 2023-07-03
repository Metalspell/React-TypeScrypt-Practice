import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage, ActionButtonProps } from "@/types";


const ActionButton = ({ children, setSelectedPage }: ActionButtonProps) => {
  return (
    <AnchorLink
      className="px-10 py-2 rounded-md bg-secondary-500 hover:bg-primary-500 hover:text-white"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;