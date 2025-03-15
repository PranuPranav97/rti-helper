// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";

import "react-tooltip/dist/react-tooltip.css";
import Navbar from "@/features/app/navbar";

import Footer from "@/features/app/footer";
import { FirstAppealFeature } from "@/features/first-appeal";
import Head from "next/head";
import { useTranslation } from "react-i18next";

export default function FirstAppealPage() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("first_appeal_page_title")}</title>
      </Head>
      <Navbar />
      <FirstAppealFeature />
      <Footer />
    </>
  );
}
