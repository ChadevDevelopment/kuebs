import type { Metadata } from "next";
import SectionPageTitle from "../../../components/sections/section-page-title";
import SectionKontaktForm from "../../../components/Kontakt/section-kontakt-form";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "Kontakt",
  description: "Kontaktseite",
};

export default function KontaktPage() {
  return (
    <>
      <main className="relative">
        <SectionPageTitle subtitle="Let’s have a dicussion about your business">
          Kontakt
        </SectionPageTitle>
        <SectionKontaktForm/>
      </main>
    </>
  );
}