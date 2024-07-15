import SectionHeroLayout3 from "../../../components/sections/section-hero-layout-3";
import SectionBenefits from "../../../components/sections/section-benefits";
import SectionIconBoxesLayout2 from "../../../components/sections/section-icon-boxes-layout-2";
import SectionTestimonialsSliderLayout2 from "../../../components/sections/section-testimonials-slider-layout-2";
import SectionFAQ from "../../../components/sections/section-faq";
import SectionCTALayout3 from "../../../components/sections/section-cta-layout-3";

export default function Home() {
  return (
    <>
      <main className="relative">
        <SectionHeroLayout3 />
        <SectionBenefits />
        <SectionIconBoxesLayout2 />
        <SectionTestimonialsSliderLayout2 />
        <SectionFAQ />
        <SectionCTALayout3 />
      </main>
    </>
  );
}
