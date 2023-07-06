import { BenefitsPageProps } from "@/types";
import { motion } from "framer-motion";
import { SelectedPage } from "@/types";
import MainText from "@/hooks/MainText";
import BenefitsItem from "./BenefitsItem";
import { BenefitType } from "@/types";
import descriptions from "@/componets/benefits/description"
import ActionButton from "../ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.jpg";

export default function Benefits({ setSelectedPage }: BenefitsPageProps) {
  return (
    <section
      id="benefits"
      className="w-5/6 min-h-full py-20 mx-auto"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div>
          <MainText>Climbing wall of the future!</MainText>
          <p className="my-5 text-sm text-secondary-text">
            Our goal was to create a climbing wall that would unite everything that we lacked
            so much in other places: qualified and sensitive trainers, advanced equipment,
            a variety of routes for every difficulty level and regular route updates!
          </p>
        </motion.div>
        <motion.div
          className="justify-between gap-8 mt-5 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={
            {
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }
          }
        >
          {descriptions.map((benefit: BenefitType) => (
            <BenefitsItem
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        <div className="items-center justify-between gap-20 mt-16 lg:mt-28 md:flex">
          <img
            className="mx-auto md:w-1/2"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />
          <div className="max-[1050px]:mt-10">
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <MainText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">CLIMBING</span>
                  </MainText>
                </motion.div>
              </div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5 text-secondary-text">
                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                Felis orci diam odio.
              </p>
              <p className="mb-5 text-secondary-text">
                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                enim mattis odio in risus nunc.
              </p>
            </motion.div>
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
