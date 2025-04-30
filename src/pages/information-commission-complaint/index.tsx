// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";

import "react-tooltip/dist/react-tooltip.css";
import Navbar from "@/features/app/navbar";

import Footer from "@/features/app/footer";

import Head from "next/head";
import { useTranslation } from "react-i18next";
import { InformationCommissionComplaintFeature } from "@/features/info-commission-complaint";

export default function SecondAppealPage() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("info_comm_complaint_page_title")}</title>
      </Head>
      <Navbar />
      <InformationCommissionComplaintFeature />
      <Footer />
    </>
  );
}
