// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";
import { useTranslation } from "react-i18next";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import Navbar from "@/features/app/navbar";

import Footer from "@/features/app/footer";
import { FirstAppealFeature } from "@/features/first-appeal";

export default function FirstAppealPage() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <FirstAppealFeature />
      <Footer />
    </>
  );
}
