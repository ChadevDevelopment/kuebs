import type { Metadata } from "next";
import SectionPageTitle from "../../../components/sections/section-page-title";
import Dienstleistungen from "../../../components/Dienstleistungen";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "Dienstleistungen",
  description: "",
};

export default function DienstleistungenPage() {
  return (
    <>
      <SectionPageTitle subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.">
        Dienstleistungen
      </SectionPageTitle>
      <Dienstleistungen />
    </>
  );
}
