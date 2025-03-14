import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Navbar from "@/features/app/navbar";

export default function Home() {
  const { t, i18n } = useTranslation();

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
                Create RTI Application
              </h2>
              <p className="text-gray-600 mt-2">
                Easily create your RTI application with a few clicks.
              </p>
            </div>

            <Link href="/rti-application">
              <button className="w-full mt-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Get Started →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
