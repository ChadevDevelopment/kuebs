import FAQ from "../../../components/FAQ/faq";
import Hero from "../../../components/Hero";
import Ueberuns from "../../../components/Ueberuns";
import Vorteile from "../../../components/Vorteile";

export default function Home() {
  return (
    <>
      <Hero />
      <Ueberuns />
      {/* <SectionIconBoxesLayout2 /> */}
      <FAQ />
      <Vorteile />
    </>
  );
}
