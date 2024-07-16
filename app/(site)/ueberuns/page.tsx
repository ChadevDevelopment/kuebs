import type { Metadata } from "next";
import SectionPageTitle from "../../../components/sections/section-page-title";
import SectionChecklist from "../../../components/Ueberuns";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "About",
  description: "About page",
};

export default function UeberUnsPage() {
  return (
    <>
      <SectionPageTitle
        subtitle="Focus on engaging, reusable content that decrease the cost per leads
          while helps you to increase profits kuebs. Kuebs strives to
          deliver the tools and support that helps companies grow with
          unparalleled success."
      >
        About
      </SectionPageTitle>
      <SectionChecklist />
    </>
  );
}
