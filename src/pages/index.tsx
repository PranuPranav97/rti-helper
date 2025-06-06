import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Navbar from "@/features/app/navbar";
import Footer from "@/features/app/footer";

import { imageDirectoryBasePath } from "../../imagePath";
import Head from "next/head";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("homepage_title")}</title>
      </Head>
      <Navbar />
      <div className=" flex justify-center">
        <div className="flex items-center gap-10 justify-center min-h-screen  sm:grid  sm:grid-cols-1  md:grid  md:grid-cols-2">
          <div className="w-72 bg-white shadow-2xl rounded-2xl p-6 flex flex-col justify-between">
            <div className="flex justify-center pt-2 pb-2">
              <Image
                alt="create RTI Application"
                src={`${imageDirectoryBasePath}logo.png`}
                height={100}
                width={100}
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {t("create_rti_application_card_heading")}{" "}
              </h2>
              <p className="text-gray-600 mt-2">
                {t("create_rti_application_card_description")}
              </p>
            </div>

            <Link href="/rti-application">
              <button className="w-full mt-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                {t("create_rti_application_cta_btn_text")} →
              </button>
            </Link>
          </div>

          <div className="w-72 bg-white shadow-2xl rounded-2xl p-6 flex flex-col justify-between">
            <div className="flex justify-center pt-2 pb-2">
              <Image
                alt="Create First Appeal"
                src={`${imageDirectoryBasePath}first_appeal.png`}
                height={100}
                width={100}
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {t("first_appeal_card_heading")}{" "}
              </h2>
              <p className="text-gray-600 mt-2">
                {t("first_appeal_card_description")}
              </p>
            </div>

            <Link href="/first-appeal">
              <button className="w-full mt-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                {t("first_appeal_application_cta_btn_text")} →
              </button>
            </Link>
          </div>

          <div className="w-72 bg-white shadow-2xl rounded-2xl p-6 flex flex-col justify-between">
            <div className="flex justify-center pt-2 pb-2">
              <Image
                alt="Create Second Appeal"
                src={`${imageDirectoryBasePath}second_appeal.png`}
                height={100}
                width={100}
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {t("second_appeal_card_heading")}{" "}
              </h2>
              <p className="text-gray-600 mt-2">
                {t("second_appeal_card_description")}
              </p>
            </div>

            <Link href="/second-appeal">
              <button className="w-full mt-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                {t("second_appeal_application_cta_btn_text")} →
              </button>
            </Link>
          </div>

          <div className="w-72 bg-white shadow-2xl rounded-2xl p-6 flex flex-col justify-between">
            <div className="flex justify-center pt-2 pb-2">
              <Image
                alt="Complaint under 18/1"
                src={`${imageDirectoryBasePath}complaint.svg`}
                height={100}
                width={100}
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {t("info_comm_complaint_card_heading")}{" "}
              </h2>
              <p className="text-gray-600 mt-2">
                {t("info_comm_complaint_card_description")}
              </p>
            </div>

            <Link href="/information-commission-complaint">
              <button className="w-full mt-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                {t("info_comm_complaint_application_cta_btn_text")} →
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
