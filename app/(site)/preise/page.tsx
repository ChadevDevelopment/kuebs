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
      <SectionPageTitle subtitle="Here are the best features that makes Kuebs the most powerful, fast and user-friendly platform.">
        Price Transparency
      </SectionPageTitle>
      <Preise />
    </>
  );
}
