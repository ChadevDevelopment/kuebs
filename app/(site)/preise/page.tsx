import type { Metadata } from "next";
import SectionPageTitle from "../../../components/sections/section-page-title";
import Preise from "../../../components/Preise";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "Pricing",
  description: "Pricing page",
};

export default function PreisePage() {
  return (
    <>
      <SectionPageTitle subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.">
        Preistransparenz
      </SectionPageTitle>
      <Preise />
    </>
  );
}
