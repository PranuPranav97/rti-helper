import { FC } from "react";
import { useTranslation } from "react-i18next";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

export const FirstAppealFeature: FC = () => {
  const { t } = useTranslation();
  return (
    <>
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
                <span>{t("first_appeal_heading")}</span>
              </div>

              <div className="pt-5">
                <div className="grid grid-cols-2 gap-2  border-[1px] border-black border-b-0">
                  <div className="border-r-[1px] border-black p-5">
                    {" "}
                    {t("first_appeal_to")} (*)
                  </div>
                  <div
                    contentEditable
                    data-tooltip-id="click_to_edit_first_appeal_to"
                    data-tooltip-content={`${t("click_to_edit")}`}
                  ></div>
                  <Tooltip id="click_to_edit_first_appeal_to" />
                </div>

                <div className="grid grid-cols-2 gap-2  border-[1px] border-black border-b-0">
                  <div className="border-r-[1px] border-black p-5">
                    {" "}
                    {t("first_appeal_appellant")} (*)
                  </div>
                  <div
                    contentEditable
                    data-tooltip-id="click_to_edit_first_appeal_appellant"
                    data-tooltip-content={`${t("click_to_edit")}`}
                  ></div>
                  <Tooltip id="click_to_edit_first_appeal_appellant" />
                </div>

                <div className="grid grid-cols-2 gap-2  border-[1px] border-black border-b-0">
                  <div className="border-r-[1px] border-black p-5">
                    <div>{t("first_appeal_PIO_particulars")} (*)</div>
                    <div>{t("first_appeal_PIO_name")} (*)</div>
                    <div>{t("first_appeal_PIO_address")} (*)</div>
                  </div>
                  <div
                    contentEditable
                    data-tooltip-id="click_to_edit_first_appeal_PIO_particulars"
                    data-tooltip-content={`${t("click_to_edit")}`}
                  ></div>
                  <Tooltip id="click_to_edit_first_appeal_PIO_particulars" />
                </div>

                <div className="grid grid-cols-2 gap-2  border-[1px] border-black border-b-0">
                  <div className="border-r-[1px] border-black p-5">
                    {" "}
                    {t("first_appeal_details_of_information_sought")} (*)
                  </div>
                  <div
                    contentEditable
                    data-tooltip-id="click_to_edit_first_appeal_details_of_information_sought"
                    data-tooltip-content={`${t("click_to_edit")}`}
                  ></div>
                  <Tooltip id="click_to_edit_first_appeal_details_of_information_sought" />
                </div>

                <div className="grid grid-cols-2 gap-2  border-[1px] border-black border-b-0">
                  <div className="border-r-[1px] border-black p-5">
                    {" "}
                    {t("first_appeal_particulars_of_application_fee")} (*)
                  </div>
                  <div
                    contentEditable
                    data-tooltip-id="click_to_edit_first_appeal_particulars_of_application_fee"
                    data-tooltip-content={`${t("click_to_edit")}`}
                  ></div>
                  <Tooltip id="click_to_edit_first_appeal_particulars_of_application_fee" />
                </div>
                <div className="grid grid-cols-2 gap-2  border-[1px] border-black border-b-0">
                  <div className="border-r-[1px] border-black p-5">
                    {" "}
                    {t(
                      "first_appeal_date_of_seeking_information_application"
                    )}{" "}
                    (*)
                  </div>
                  <div
                    contentEditable
                    data-tooltip-id="click_to_edit_first_appeal_date_of_seeking_information_application"
                    data-tooltip-content={`${t("click_to_edit")}`}
                  ></div>
                  <Tooltip id="click_to_edit_first_appeal_date_of_seeking_information_application" />
                </div>

                <div className="grid grid-cols-2 gap-2  border-[1px] border-black ">
                  <div className="border-r-[1px] border-black p-5">
                    {" "}
                    {t("first_appeal_reason")} (*)
                  </div>
                  <div
                    contentEditable
                    data-tooltip-id="click_to_edit_first_appeal_reason"
                    data-tooltip-content={`${t("click_to_edit")}`}
                  ></div>
                  <Tooltip id="click_to_edit_first_appeal_reason" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2  pt-12 ">
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
                  <div className="pr-10 pt-10 pb-10">{t("applicant_sign")}</div>
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
    </>
  );
};
