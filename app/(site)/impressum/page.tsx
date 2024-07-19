import type { Metadata } from "next";
import Impressum from "../../../components/Impressum";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "About",
  description: "About page",
};

export default function UeberUnsPage() {
  return (
    <>
      <Impressum />
    </>
  );
}
