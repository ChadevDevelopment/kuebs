import type { Metadata } from "next";
import Datenschutz from "../../../components/Datenschutz";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "Datenschutz",
  description: "",
};

export default function DatenschutzPage() {
  return (
    <>
      <Datenschutz />
    </>
  );
}
