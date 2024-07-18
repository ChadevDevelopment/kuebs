import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import type { Metadata } from "next";
import Team from "../../../components/Team";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "Team",
  description: "Team page",
};

export default function TeamPage() {
  return (
    <>
      <Team />
    </>
  );
}