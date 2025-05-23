"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import { imageDirectoryBasePath } from "../../../../imagePath";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("ka"); // Default: Kannada
  const [langDropdown, setLangDropdown] = useState(false);

  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    console.log("Changing language to:", lang);
    setLanguage(lang);

    i18n
      .changeLanguage(i18n.language === "kn" ? lang : "kn")
      .then(() => {
        console.log("Language changed to:", i18n.language);
      })
      .catch((err) => console.error("Language change failed:", err));
    localStorage.setItem("language", lang);
    setLangDropdown(false);
  };
  return (
    <nav className="bg-white shadow-md sticky w-full  ">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo & Brand Name */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          <div className="flex items-center space-x-2">
            <Image
              alt="RTI Helper Logo"
              src={`${imageDirectoryBasePath}logo.png`}
              height={40}
              width={40}
            />
            <span className="pt-1">{t("app_name")}</span>
          </div>
        </Link>
        {/* Desktop navbar */}
        <div className="sm:hidden md:hidden">
          <div className="flex space-x-6">
            <NavLink href="/">{t("app_home")}</NavLink>
            <NavLink href="/about">{t("app_about")}</NavLink>

            <div className="relative px-3 py-2">
              <button
                className="flex items-center text-gray-700 hover:text-blue-600 transition"
                onClick={() => setLangDropdown(!langDropdown)}
              >
                🌏 &nbsp;{language.toUpperCase()}
              </button>
              {langDropdown && (
                <div className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-md">
                  <button
                    onClick={() => handleLanguageChange("ka")}
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                  >
                    ಕನ್ನಡ (KA)
                  </button>
                  <button
                    onClick={() => handleLanguageChange("en")}
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                  >
                    English (EN)
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="lg:hidden xl:hidden 2xl:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className="lg:hidden xl:hidden 2xl:hidden">
        <div
          className={` bg-white border-t p-4 transition-all duration-300 ${
            isOpen
              ? "max-h-60 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <NavLink href="/" onClick={() => setIsOpen(false)}>
            {t("app_home")}
          </NavLink>
          <NavLink href="/about" onClick={() => setIsOpen(false)}>
            {t("app_about")}
          </NavLink>

          <div className="relative px-3 py-2">
            <button
              className="flex items-center text-gray-700 hover:text-blue-600 transition"
              onClick={() => setLangDropdown(!langDropdown)}
            >
              🌏 &nbsp;{language.toUpperCase()}
            </button>
            {langDropdown && (
              <div className="absolute  mt-2 w-32 bg-white border rounded-lg shadow-md">
                <button
                  onClick={() => handleLanguageChange("ka")}
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  ಕನ್ನಡ (KA)
                </button>
                <button
                  onClick={() => handleLanguageChange("en")}
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  English (EN)
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

/* Reusable NavLink Component */
function NavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition"
    >
      {children}
    </Link>
  );
}
