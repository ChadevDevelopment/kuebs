import type { Metadata } from "next";
import SectionPageTitle from "../../../components/sections/section-page-title";
import SectionIconBoxes from "../../../components/Services/section-icon-boxes";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "Services",
  description: "",
};

export default function PrivatKundenPage() {
  return (
    <>
      <SectionPageTitle subtitle="Wir betreuen unsere Klienten in Sachen für Privatkunden">
        Privatkunden
      </SectionPageTitle>
      <SectionIconBoxes />
    </>
  );
}
