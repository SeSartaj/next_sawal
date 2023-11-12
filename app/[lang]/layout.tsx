import * as React from "react";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Locale, i18n } from "@/i18n-config";
import Navbar from "@/components/NavBar";
import { cn } from "@/lib/utils";
import { getDictionary } from "@/get-dictionary";
import Footer from "@/components/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "@/context/AuthContext";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Takhnik",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);
  const dir = params.lang === "en" ? "ltr" : "rtl";

  return (
    <html
      lang={params.lang}
      className={cn(
        "bg-white text-slate-900 antialiased pb-20 mb-10",
        inter.className
      )}
      dir={dir}
    >
      <body className={inter.className}>
        <AuthProvider>
          <Navbar
            lang={params.lang}
            dictionary={dictionary}
            locale={i18n.locales}
          />
          <ToastContainer />
          {children}
          <Footer lang={params.lang} dictionary={dictionary} />
        </AuthProvider>
      </body>
    </html>
  );
}
