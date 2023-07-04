import { HomePageProps, SelectedPage } from '@/types';
import ActionButton from './ActionButton';
import useMediaQuery from '@/hooks/useMediaQuery';
import AnchorLink from "react-anchor-link-smooth-scroll";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import { motion } from "framer-motion";
import SponsorEvolv from "@/assets/SponsorEvolv.png";
import SponsorLaSportiva from "@/assets/SponsorLaSportiva.png";
import SponsorNorthFace from "@/assets/SponsorNorthFace.png";
import SponsorBlackDiamond from "@/assets/SponsorBlackDiamond.png";

export default function Home({ setSelectedPage }: HomePageProps) {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className="gap-16 py-10 bg-gray-20 md:h-full md:pb-0">
      <motion.div
        className="items-center justify-center w-5/6 mx-auto md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <div className="z-10 mt-32 md:basis-3/5">
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <h1 className='font-black text-8xl text-main-text'>Above the Sky</h1>
                <h3 className='pt-5 text-3xl font-black text-secondary-text'>Climbing wall of the future</h3>
              </div>
            </div>

            <p className="mt-8 text-sm text-secondary-text">
              Our climbing wall is the embodiment and realization of a dream to create a place where everyone
              can feel like a summit conqueror,
              feel an exciting and intoxicating sense of height and an incomparable feeling of overcoming fear.
              Our task is to popularize rock climbing as a sport
            </p>
          </motion.div>
          <motion.div
            className="flex items-center gap-8 mt-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold underline text-primary-500 hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        <div
          className="flex justify-center basis-3/5 md:z-10 md:ml-40 md:mt-16 md:justify-items-end"
        >
          <img
            alt="home-pageGraphic"
            src={HomePageGraphic}
            className='max-[1024px]:mt-10'
          />
        </div>
      </motion.div>
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10 mt-10">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-around w-full gap-8">
              <img className='w-40' alt="redbull-sponsor" src={SponsorEvolv} />
              <img className='w-40' alt="forbes-sponsor" src={SponsorLaSportiva} />
              <img className='w-40' alt="fortune-sponsor" src={SponsorNorthFace} />
              <img className='w-40' alt="fortune-sponsor" src={SponsorBlackDiamond} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
