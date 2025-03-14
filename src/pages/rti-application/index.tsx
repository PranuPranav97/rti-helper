import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useTranslation } from "react-i18next";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import Navbar from "@/features/app/navbar";
import { useEffect } from "react";
import Footer from "@/features/app/footer";

export default function Home() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Navbar />

      <div className="p-6">
        <h1 className="text-xl font-bold">{t("homepage_title")}</h1>
        {/* <button
          className="mt-4 p-2 bg-blue-500 text-white rounded"
          onClick={() =>
            i18n.changeLanguage(i18n.language === "kn" ? "en" : "kn")
          }
        >
          {i18n.language === "kn" ? "Switch to English" : "ಕನ್ನಡಕ್ಕೆ ಬದಲಾಯಿಸಿ"}
        </button> */}

        <div className="flex justify-center pt-10">
          <div id="printableArea" className="p-4 h-full w-[87%]">
            <div className=" border-[1px] border-black p-5">
              <div className="flex justify-center font-bold text-3xl">
                <span>{t("application_heading")}</span>
              </div>
              <div className="flex justify-center font-bold text-xl">
                <span>{t("application_sub_heading")}</span>
              </div>

              <div className="pt-5">
                <div className="grid grid-cols-2 gap-2  border-[1px] border-black border-b-0">
                  <div className="border-r-[1px] border-black p-5">
                    {" "}
                    {t("applicant_name")}(*)
                  </div>
                  <div
                    contentEditable
                    data-tooltip-id="click_to_edit_applicant_name"
                    data-tooltip-content={`${t("click_to_edit")}`}
                  ></div>
                  <Tooltip id="click_to_edit_applicant_name" />
                </div>

                <div className="grid grid-cols-2 gap-2  border-[1px] border-black border-b-0">
                  <div className="border-r-[1px] border-black p-5">
                    {" "}
                    {t("applicant_address")}(*)
                  </div>
                  <div
                    contentEditable
                    data-tooltip-id="click_to_edit_applicant_address"
                    data-tooltip-content={`${t("click_to_edit")}`}
                  ></div>
                  <Tooltip id="click_to_edit_applicant_address" />
                </div>

                <div className="grid grid-cols-2 gap-2  border-[1px] border-black border-b-0">
                  <div className="border-r-[1px] border-black p-5">
                    {" "}
                    {t("application_content")}(*)
                  </div>
                  <div
                    contentEditable
                    data-tooltip-id="click_to_edit_application_content"
                    data-tooltip-content={`${t("click_to_edit")}`}
                  ></div>
                  <Tooltip id="click_to_edit_application_content" />
                </div>

                <div className="grid grid-cols-2 gap-2  border-[1px] border-black border-b-0">
                  <div className="border-r-[1px] border-black p-5">
                    {" "}
                    {t("application_related_to_year")}(*)
                  </div>
                  <div
                    contentEditable
                    data-tooltip-id="click_to_edit_application_related_to_year"
                    data-tooltip-content={`${t("click_to_edit")}`}
                  ></div>
                  <Tooltip id="click_to_edit_application_related_to_year" />
                </div>

                <div className="grid grid-cols-2 gap-2  border-[1px] border-black ">
                  <div className="border-r-[1px] border-black p-5">
                    {" "}
                    {t("application_from_which_officer")}(*)
                  </div>
                  <div
                    contentEditable
                    data-tooltip-id="click_to_edit_application_from_which_officer"
                    data-tooltip-content={`${t("click_to_edit")}`}
                  ></div>
                  <Tooltip id="click_to_edit_application_from_which_officer" />
                </div>
              </div>

              <div className="pt-5">
                <div className="flex justify-items-start">
                  ₹{" "}
                  <div
                    contentEditable
                    className="pl-5 pr-8 border-b-1 border-black"
                    data-tooltip-id="click_to_edit_application_postal_order_attached"
                    data-tooltip-content={`${t("click_to_edit")}`}
                  ></div>
                  <Tooltip id="click_to_edit_application_postal_order_attached" />{" "}
                  {t("application_postal_order_attached")}
                </div>
              </div>

              <div className="pt-5">
                <div className="flex justify-items-start">
                  {t("application_postal_order_number")}:{" "}
                  <div
                    contentEditable
                    className="pl-24 pr-24 border-b-1 border-black"
                    data-tooltip-id="click_to_edit_application_postal_order_number"
                    data-tooltip-content={`${t("click_to_edit")}`}
                  ></div>
                  <Tooltip id="click_to_edit_application_postal_order_number" />{" "}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2  pt-32 ">
                <div>
                  <div>
                    <div className="flex justify-items-start">
                      <div>{t("place")} : </div>
                      <div
                        contentEditable
                        className="pl-24 pr-24 border-b-1 border-black"
                        data-tooltip-id="click_to_edit_place"
                        data-tooltip-content={`${t("click_to_edit")}`}
                      ></div>
                      <Tooltip id="click_to_edit_place" />{" "}
                    </div>
                  </div>
                  <div className=" pt-5">
                    <div className="flex justify-items-start">
                      <div>{t("date")}: </div>
                      <div
                        contentEditable
                        className="pl-24 pr-24 border-b-1 border-black"
                        data-tooltip-id="click_to_edit_date"
                        data-tooltip-content={`${t("click_to_edit")}`}
                      ></div>
                      <Tooltip id="click_to_edit_date" />{" "}
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="pr-10">{t("applicant_sign")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            className="mt-4 p-2 bg-blue-500 text-white rounded cursor-pointer"
            onClick={() => window.print()}
          >
            {t("print")}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
