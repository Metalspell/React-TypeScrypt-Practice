import { motion } from "framer-motion";
import { GalleryType, SelectedPage } from "@/types";
import { GalleryPageProps } from "@/types";
import MainText from "@/hooks/MainText";
import GalleryDescription from "./GalleryDescription";
import GalleryItem from "./GalleryItem";

export default function Gallery({ setSelectedPage }: GalleryPageProps) {
  return (
    <section id="ourclasses" className="w-full py-40 bg-primary-100">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="w-5/6 mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <MainText>OUR CLASSES</MainText>
            <p className="py-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {GalleryDescription.map((item: GalleryType, index) => (
              <GalleryItem
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
