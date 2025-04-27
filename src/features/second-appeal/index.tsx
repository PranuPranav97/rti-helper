import { FC } from "react";
import { useTranslation } from "react-i18next";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

export const SecondAppealFeature: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="p-6">
        {/* <h1 className="text-xl font-bold">{t("second_appeal_title")}</h1> */}
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
                <span>{t("second_appeal_heading")}</span>
              </div>

              <div className="pt-5">
                <div className="grid grid-cols-2 gap-2  border-[1px] border-black border-b-0">
                  <div className="border-r-[1px] border-black p-5">
                    {" "}
                    {t("second_appeal_appellant")} (*)
                  </div>
                  <div
                    contentEditable
                    data-tooltip-id="click_to_edit_second_appeal_appellant"
                    data-tooltip-content={`${t("click_to_edit")}`}
                  ></div>
                  <Tooltip id="click_to_edit_second_appeal_appellant" />
                </div>

                <div className="grid grid-cols-2 gap-2  border-[1px] border-black border-b-0">
                  <div className="border-r-[1px] border-black p-5">
                    {" "}
                    {t("second_appeal_PIO_particulars")} (*)
                  </div>
                  <div
                    contentEditable
                    data-tooltip-id="click_to_edit_second_appeal_PIO_particulars"
                    data-tooltip-content={`${t("click_to_edit")}`}
                  ></div>
                  <Tooltip id="click_to_edit_second_appeal_PIO_particulars" />
                </div>

                <div className="grid grid-cols-2 gap-2  border-[1px] border-black border-b-0">
                  <div className="border-r-[1px] border-black p-5">
                    <div>
                      {t("second_appeal_first_appeal_order_details")} (*)
                    </div>
                  </div>
                  <div
                    contentEditable
                    data-tooltip-id="click_to_edit_second_appeal_first_appeal_order_details"
                    data-tooltip-content={`${t("click_to_edit")}`}
                  ></div>
                  <Tooltip id="click_to_edit_second_appeal_first_appeal_order_details" />
                </div>

                <div className="grid grid-cols-2 gap-2  border-[1px] border-black border-b-0">
                  <div className="border-r-[1px] border-black p-5">
                    {" "}
                    {t("first_appeal_second_appeal_brief_facts")} (*)
                  </div>
                  <div
                    contentEditable
                    data-tooltip-id="click_to_edit_second_appeal_brief_facts"
                    data-tooltip-content={`${t("click_to_edit")}`}
                  ></div>
                  <Tooltip id="click_to_edit_second_appeal_brief_facts" />
                </div>

                <div className="grid grid-cols-2 gap-2  border-[1px] border-black border-b-0">
                  <div className="border-r-[1px] border-black p-5">
                    {" "}
                    {t("second_appeal_details_against_deemed_rejection")} (*)
                  </div>
                  <div
                    contentEditable
                    data-tooltip-id="click_to_edit_second_appeal_details_against_deemed_rejection"
                    data-tooltip-content={`${t("click_to_edit")}`}
                  ></div>
                  <Tooltip id="click_to_edit_second_appeal_details_against_deemed_rejection" />
                </div>
                <div className="grid grid-cols-2 gap-2  border-[1px] border-black border-b-0">
                  <div className="border-r-[1px] border-black p-5">
                    {" "}
                    {t("second_appeal_prayer_or_relief_sought")} (*)
                  </div>
                  <div
                    contentEditable
                    data-tooltip-id="click_to_edit_second_appeal_prayer_or_relief_sought"
                    data-tooltip-content={`${t("click_to_edit")}`}
                  ></div>
                  <Tooltip id="click_to_edit_second_appeal_prayer_or_relief_sought" />
                </div>

                <div className="grid grid-cols-2 gap-2  border-[1px] border-black border-b-0">
                  <div className="border-r-[1px] border-black p-5">
                    {" "}
                    {t("second_appeal_grounds_for_relief")} (*)
                  </div>
                  <div
                    contentEditable
                    data-tooltip-id="click_to_edit_second_appeal_grounds_for_relief"
                    data-tooltip-content={`${t("click_to_edit")}`}
                  ></div>
                  <Tooltip id="click_to_edit_second_appeal_grounds_for_relief" />
                </div>

                <div className="grid grid-cols-2 gap-2  border-[1px] border-black border-b-0">
                  <div className="border-r-[1px] border-black p-5">
                    {" "}
                    {t("second_appeal_verification_by_appelant")} (*)
                  </div>
                  <div
                    contentEditable
                    data-tooltip-id="click_to_edit_second_appeal_verification_by_appelant"
                    data-tooltip-content={`${t("click_to_edit")}`}
                  ></div>
                  <Tooltip id="click_to_edit_second_appeal_verification_by_appelant" />
                </div>

                <div className="grid grid-cols-2 gap-2  border-[1px] border-black border-b-0">
                  <div className="border-r-[1px] border-black p-5">
                    {" "}
                    {t("second_appeal_index")} (*)
                  </div>
                  <div
                    contentEditable
                    data-tooltip-id="click_to_edit_second_appeal_index"
                    data-tooltip-content={`${t("click_to_edit")}`}
                  ></div>
                  <Tooltip id="click_to_edit_second_appeal_index" />
                </div>
                <div className="grid grid-cols-2 gap-2  border-[1px] border-black ">
                  <div className="border-r-[1px] border-black p-5">
                    {" "}
                    {t("second_appeal_other_info")} (*)
                  </div>
                  <div
                    contentEditable
                    data-tooltip-id="click_to_edit_second_appeal_other_info"
                    data-tooltip-content={`${t("click_to_edit")}`}
                  ></div>
                  <Tooltip id="click_to_edit_second_appeal_other_info" />
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
                  <div className="pr-10 pt-10 pb-10">{t("appelant_sign")}</div>
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
