import React from "react";
import { Link } from "lucide-react";
import { Locale } from "@/i18n-config";

const Footer = ({ lang, dictionary }: { lang: Locale; dictionary: any }) => {
  const langs = {
    en: "en",
    pa: "ps",
    da: "dr",
  };

  return (
    <footer className="fixed bottom-0 w-full bg-gray-800 shadow">
      <div className="flex-col justify-between mx-auto px-5 py-5 lg:max-w-7xl md:items-center md:flex md:px-8">
        <div className="flex h-full w-full">
          <a href={`/${lang}/about`} target="_blank">
            <div className="font-bold text-blue-500">{dictionary["headers"].about}</div>
          </a>
          <a href={`/${lang}/privacy_policy`} target="_blank" className="px-4">
            <div className="font-bold text-blue-500">{dictionary["headers"].privacy_policy}</div>
          </a>
          <a href={`/${lang}/use_terms`} target="_blank">
            <div className="font-bold text-blue-500">{dictionary["headers"].terms_use}</div>
          </a>
        </div>
        <div className="flex h-full w-full items-end justify-end">
          <div className="text-gray-100 text-sm flex justify-center">
          <div className="px-2">{dictionary["headers"].website_powered_by}</div>
            <a href={`https://tveta.gov.af/${langs[lang]}`} target="_blank">
              <span className="font-bold text-blue-500">Tveta</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
