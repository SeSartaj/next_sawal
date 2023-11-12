"use client";

import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import Logo from "@/images/logo.png";
import AuthContext from "@/context/AuthContext";
import { Users } from "@/models/global";
import defaultImg from "@/public/default.png";
import Image from "next/image";
import Label from "./ui/Label";
import Paragraph from "./ui/Paragragh";
import Takhnik from "@/services/api";
import { toast } from "react-toastify";
import { getErrorMessage } from "./utils/ErrorMessage";
import { useRouter } from "next/navigation";
import NavBarItem from "./ui/NavBarItem";
import Icons from "./Icons";

const Navbar = ({
  lang,
  dictionary,
  locale,
}: {
  lang: string;
  dictionary: any;
  locale: any;
}) => {
  var language = "en";
  locale.map((element: string) => {
    if (element === lang) {
      language = element;
    }
  });
  const router = useRouter();
  const context = useContext(AuthContext);
  const [user, setUser] = useState<Users | null>();
  const [navbar, setNavbar] = useState(false);
  const [langBar, setLangBar] = useState(false);
  const [accountBar, setAccountBar] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     const { innerWidth } = window;
  //     if (innerWidth > 768) {
  //       setNavbar(!navbar);
  //       console.log("here");
  //     }
  //   };

  //   // Add event listener on component mount
  //   window.addEventListener('resize', handleResize);

  //   // Remove event listener on component unmount
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  const handleLogout = () => {
    context?.logout();
  };

  useEffect(() => {
    if (context?.user) {
      setUser(context?.user);
    } else {
      setUser(null);
    }
    router.refresh();
  }, [context?.user]);

  const handleLanguageChange = (lang: string) => {
    if (user) {
      const accessToken = context?.jwt?.accessToken;
      const data = { lang };
      Takhnik.users
        .changeUserLang(user.id, data, accessToken)
        .then(async () => {})
        .catch((error): void => {
          console.error(getErrorMessage(error));
          toast(getErrorMessage(error), {
            hideProgressBar: true,
            autoClose: 2000,
            type: "error",
          });
        });
    }
  };

  useEffect(() => {
    const handleScreenClick = () => {
      setLangBar(false);
      setAccountBar(false);
    };

    if (langBar || accountBar) {
      document.addEventListener("click", handleScreenClick);
    }

    return () => {
      document.removeEventListener("click", handleScreenClick);
    };
  }, [langBar, accountBar]);

  return (
    <div>
      <nav className="w-full bg-gray-800 shadow">
        <div className="justify-between mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center px-4 justify-between py-3 md:py-5 md:block">
              <div>
                <a href={`/${lang}`}>
                  <img src={Logo.src} className="w-50 h-5 mr-2" alt="Logo" />
                </a>
              </div>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div
            className={`flex-1 justify-end pb-3 mt-8 lg:px-4 md:pb-0 md:mt-0 md:flex ${
              navbar ? "block" : "hidden"
            }`}
          >
            <NavBarItem
              lang={lang}
              navbar={navbar}
              dictionary={dictionary}
              route="questions"
              key={0}
            />
            <NavBarItem
              lang={lang}
              navbar={navbar}
              dictionary={dictionary}
              route="moderators"
              key={1}
            />
            <NavBarItem
              lang={lang}
              navbar={navbar}
              dictionary={dictionary}
              route="users"
              key={2}
            />
            <NavBarItem
              lang={lang}
              navbar={navbar}
              dictionary={dictionary}
              route="tags"
              key={3}
            />
            <NavBarItem
              lang={lang}
              navbar={navbar}
              dictionary={dictionary}
              route="ask_question"
              key={4}
            />

            <div
              className={`flex text-gray-100 text-sm ${
                navbar
                  ? "hover:bg-gray-700 px-4 py-3"
                  : "hover:bg-gray-700 h-full py-5 px-3"
              }`}
            >
              <div className="relative">
                <button
                  className="relative z-10 flex items-center text-lg text-gray-100 hover:bg-gray-700"
                  onClick={() => setLangBar(!langBar)}
                >
                  <span className="mx-1">{dictionary["lang"][language]}</span>
                  <Icons.ChevronDown size={20} color="white" />
                </button>

                <div
                  className={`absolute left-0 z-20 w-56 items-center py-0 mt-5 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800 ${
                    langBar ? "block" : "hidden"
                  }`}
                >
                  {locale.map((item: string, index: number) => {
                    if (item !== language) {
                      return (
                        <a
                          key={index}
                          href={`/${item}`}
                          onClick={() => handleLanguageChange(item)}
                          className="block px-4 py-3 text-lg text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          {dictionary["lang"][item]}
                        </a>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            </div>
            {!user && (
              <Link href={`/${lang}/sign_in`}>
                <div
                  className={`text-gray-100 text-lg ${
                    navbar
                      ? "hover:bg-gray-700 px-4 py-3"
                      : "hover:bg-gray-700 h-full py-5 px-3"
                  }`}
                >
                  {dictionary["headers"].sign_in}
                </div>
              </Link>
            )}
            {user && (
              <div
                className={`flex text-gray-100 text-lg py-1 ${
                  navbar ? "hidden" : "hover:bg-gray-700 h-full"
                }`}
              >
                <div className="relative">
                  <button
                    className="relative z-10 flex text-lg mt-2 text-gray-100 hover:bg-gray-700"
                    onClick={() => setAccountBar(!accountBar)}
                  >
                    <a
                      href="#"
                      className="flex items-center p-3 -mt-2 text-lg text-gray-600 transition-colors duration-200 transform"
                    >
                      {user.file ? (
                        <img
                          className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                          src={`${process.env.NEXT_PUBLIC_TAKHNIK_BACKEND_URL}/files/${user.file.fileName}`}
                          alt="jane avatar"
                        />
                      ) : (
                        <Image
                          src={defaultImg}
                          alt="Picture of the author"
                          className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                        />
                      )}
                      <Icons.ChevronDown size={20} color="white" />
                    </a>
                  </button>

                  <div
                    className={`absolute right-0 z-20 w-56 py-2 mt-5 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800 ${
                      accountBar ? "block" : "hidden"
                    }`}
                  >
                    <a
                      href="#"
                      className="flex items-center p-3 -mt-2 text-lg text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      {user.file ? (
                        <img
                          className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                          src={`${process.env.NEXT_PUBLIC_TAKHNIK_BACKEND_URL}/files/${user.file.fileName}`}
                          alt="jane avatar"
                        />
                      ) : (
                        <Image
                          src={defaultImg}
                          alt="Picture of the author"
                          className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                        />
                      )}
                      <div className="mx-1">
                        <Label className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                          {user.firstName} {user.lastName}
                        </Label>
                        <Paragraph size={"xs"}>{user.email}</Paragraph>
                      </div>
                    </a>

                    <hr className="border-gray-200 dark:border-gray-700 " />

                    <a
                      href={`/${lang}/settings`}
                      className="block px-4 py-3 text-lg text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      {dictionary["headers"].settings}
                    </a>

                    <hr className="border-gray-200 dark:border-gray-700 " />

                    <a
                      href={`/${lang}/profile/${user.id}`}
                      className="block px-4 py-3 text-lg text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      {dictionary["headers"].profile}
                    </a>
                    {user?.isAdmin && (
                      <>
                        <a
                          href={`/${lang}/reports`}
                          className="block px-4 py-3 text-lg text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          {dictionary["headers"].reports}
                        </a>
                        <a
                          href={`/${lang}/report_types`}
                          className="block px-4 py-3 text-lg text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          {dictionary["headers"].report_types}
                        </a>
                      </>
                    )}
                    <a
                      href="#"
                      className="block px-4 py-3 text-lg text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <button onClick={handleLogout}>
                        {dictionary["headers"].sign_out}
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
