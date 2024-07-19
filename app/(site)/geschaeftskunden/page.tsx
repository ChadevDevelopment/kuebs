import type { Metadata } from "next";
import SectionPageTitle from "../../../components/sections/section-page-title";
import GeschaeftsKunden from "../../../components/Dienstleistungen/geschaetfskunden";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "",
  description: "",
};

export default function GeschaeftsKundenPage() {
  return (
    <>
      <SectionPageTitle subtitle="Wir betreuen unsere Klienten in Sachen für Geschäftskunden">
        Geschäftskunden
      </SectionPageTitle>
      <GeschaeftsKunden />
    </>
  );
}
