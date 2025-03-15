import Footer from "@/features/app/footer";
import Navbar from "@/features/app/navbar";
import Head from "next/head";
import React from "react";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("about_us_page_title")}</title>
      </Head>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            {t("aboutTitle")}
          </h1>
          <p className="mt-4 text-lg text-gray-600">{t("aboutDescription")}</p>
        </section>

        {/* Why RTI Helper */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700">
            {t("whyTitle")}
          </h2>
          <p className="mt-2 text-gray-600">{t("whyDescription")}</p>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700">
            {t("contactTitle")}
          </h2>

          <p className="mt-2 text-gray-600">
            {t("githubIssue")}{" "}
            <a
              href="https://github.com/PranuPranav97"
              className="text-blue-500 hover:underline ml-1"
            >
              github.com/PranuPranav97
            </a>
          </p>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
