import Hero from "../../../components/Hero";
import SectionBenefits from "../../../components/sections/section-benefits";
import PopUp from "../../../components/Hero/popup";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionBenefits />
      {/* <SectionIconBoxesLayout2 /> */}
      <PopUp />
    </>
  );
}
