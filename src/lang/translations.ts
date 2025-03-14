export const translations = {
  en: {
    homepage_title: "RTI Helper",
    rti_application_title: "RTI Application",

    //Buttons
    print: "🖨️  Print",

    //instructions
    click_to_edit: "✏️ Click to Edit.",

    //Generic
    place: "Place",
    date: "Date",

    //RTI-Application
    application_heading:
      "Form of application for seeking information under the Right to Information Act,2005.",
    application_sub_heading: "",
    applicant_name: "Applicant Name",
    applicant_address: "Address",
    application_content: " Document Details  / For Enquiry  / Certified Copy",
    application_related_to_year: "From Year",
    application_from_which_officer:
      " From which public information officer the information is requested and designation.",
    application_postal_order_attached: "Attached Postal Order. ",
    application_postal_order_number: "Postal Order Number",
    applicant_sign: "Signature",
  },
  kn: {
    //Page titles
    homepage_title: "ಮಾಹಿತಿ ಹಕ್ಕು ಸಹಾಯಕ",
    rti_application_title: "ಮಾಹಿತಿ ಹಕ್ಕು ಕಾಯಿದೆಯ ಅರ್ಜಿ",
    //Generic
    place: "ಸ್ಥಳ",
    date: "ದಿನಾಂಕ ",

    //Buttons
    print: "🖨️  ಪ್ರಿಂಟ್ ",

    //instructions
    click_to_edit: "✏️ ಎಡಿಟ್ ಮಾಡಲು ಕ್ಲಿಕ್ ಮಾಡಿ. ",

    ////RTI-Application
    application_heading: "ಮಾಹಿತಿ ಹಕ್ಕು ಅಧಿನಿಯಮ ಕಾಯಿದೆ",
    application_sub_heading:
      "ನಮೂನೆ ಎ (ಪ್ರಕರಣ 6(1) ಮತ್ತು 7 91 ) ರ ಮಾಹಿತಿ ಹಕ್ಕು ಅಧಿನಿಯಮ 2005",
    applicant_name: "ಅರ್ಜಿದಾರರ ಪೂರ್ಣ ಹೆಸರು",
    applicant_address: "ವಿಳಾಸ",
    application_content: " ದಾಖಲೆಯ ವಿವರಗಳು  / ತನಿಖೆಗಾಗಿ  / ಪ್ರಮಾಣೀಕೃತ  ಮಾದರಿ",
    application_related_to_year: "ಯಾವ ವರ್ಷಕ್ಕೆ ಸಂಭಂದಿಸಿದ್ದು ",
    application_from_which_officer:
      "ಯಾವ ಸಾರ್ವಜನಿಕ ಮಾಹಿತಿ ಅಧಿಕಾರಿಯಿಂದ ಮಾಹಿತಿ ಬೇಕಾಗಿರುತ್ತದೆ ಹಾಗೂ ಅವರ ಹುದ್ದೆ ",
    application_postal_order_attached: "ಪೋಸ್ಟಲ್  ಆರ್ಡರನ್ನು ಲಗತ್ತಿಸಿದೆ. ",
    application_postal_order_number: "ಪೋಸ್ಟಲ್  ಆರ್ಡರ ನ0",
    applicant_sign: "ಅರ್ಜಿದಾರರ ಸಹಿ",
  },
};

export type Languages = keyof typeof translations; // "en" | "kn"
