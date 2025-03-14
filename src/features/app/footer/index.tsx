import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <footer className="bg-white shadow-md top-0  text-gray-700 py-4 text-center  w-full onlyPrint">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} {t("app_name")}. All rights reserved.
      </p>
    </footer>
  );
}
