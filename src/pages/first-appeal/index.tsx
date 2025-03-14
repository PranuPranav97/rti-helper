// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";

import "react-tooltip/dist/react-tooltip.css";
import Navbar from "@/features/app/navbar";

import Footer from "@/features/app/footer";
import { FirstAppealFeature } from "@/features/first-appeal";

export default function FirstAppealPage() {
  return (
    <>
      <Navbar />
      <FirstAppealFeature />
      <Footer />
    </>
  );
}
