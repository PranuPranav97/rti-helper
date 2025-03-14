import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Navbar from "@/features/app/navbar";
import Footer from "@/features/app/footer";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <div className="p-6 flex justify-center">
        <div className="flex items-center justify-center min-h-screen ">
          <div className="w-72 bg-white shadow-2xl rounded-2xl p-6 flex flex-col justify-between">
            <div className="flex justify-center pt-2 pb-2">
              <Image
                alt="create RTI Application"
                src={"/logo.png"}
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
        </div>
      </div>
      <Footer />
    </>
  );
}
