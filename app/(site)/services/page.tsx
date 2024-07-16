import type { Metadata } from "next";
import SectionPageTitle from "../../../components/sections/section-page-title";
import SectionIconBoxes from "../../../components/Services/section-icon-boxes";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "Services",
  description: "",
};

export default function PageServices() {
  return (
    <>
      <SectionPageTitle subtitle="We offer a variety of services here to get you started and successfully suite every need using Kuebs. Choose the services that’s right for you.">
        Services
      </SectionPageTitle>
      <SectionIconBoxes />
    </>
  );
}
