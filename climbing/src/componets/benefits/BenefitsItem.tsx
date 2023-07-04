import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { IBenefitsItemProps } from "@/types";
import { SelectedPage } from "@/types";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export default function BenefitsItem({ icon, title, description, setSelectedPage }: IBenefitsItemProps) {
  return (
    <motion.div
      variants={childVariant}
      className="px-5 py-16 mt-5 text-center border-2 border-gray-100 rounded-md md:w-4/12"
    >
      <div className="flex justify-center mb-4">
        <div className="p-4 border-2 border-gray-100 rounded-full bg-primary-100">
          {icon}
        </div>
      </div>

      <h4 className="font-bold text-main-text">{title}</h4>
      <p className="my-3 text-secondary-text">{description}</p>
      <AnchorLink
        className="text-sm font-bold underline text-primary-500 hover:text-secondary-500"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  );
}
