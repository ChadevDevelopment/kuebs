import type { Metadata } from "next";
// import SectionPageTitle from "../../../components/sections/section-page-title";
import Kontaktform from "../../../components/Kontakt/kontaktform";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "Kontakt",
  description: "Kontaktseite",
};

export default function KontaktPage() {
  return (
    <>
      <main className="relative">
        {/* <SectionPageTitle subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr.">
          Kontakt
        </SectionPageTitle> */}
        <Kontaktform/>
      </main>
    </>
  );
}