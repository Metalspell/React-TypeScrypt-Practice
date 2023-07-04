import { MainTextProps } from "@/types";

export default function MainText ({children}: MainTextProps) {
  return (
    <h1 className="text-3xl font-bold basis-3/5 text-main-text font-montserrat">{children}</h1>
  );
}