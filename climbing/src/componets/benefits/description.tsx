import { BenefitType } from "@/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

const descriptions: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="w-6 h-6" />,
    title: "Modern stand 30 meters high!",
    description:
      "Our booth has a complex design, allowing you to implement routes with varying degrees of overhang, from strictly vertical to extreme angles. But the main thing is its height. Here you can fully experience the heady delight of overcoming heights.",
  },
  {
    icon: <UserGroupIcon className="w-6 h-6" />,
    title: "Affordable prices",
    description:
      "We wholeheartedly support the popularization of rock climbing and the main step towards this is accessibility to everyone.",
  },
  {
    icon: <AcademicCapIcon className="w-6 h-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Our coaches are athletes who have achieved success in this sport and know what it takes to achieve success, even if you have never been to the mountains. And believe us, we can share our love for this sport with you.",
  },
];

export default descriptions