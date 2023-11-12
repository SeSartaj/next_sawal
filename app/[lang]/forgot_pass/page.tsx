import ForgotPassForm from "@/components/forms/ForgotPassForm";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <div className="flex-col justify-between mx-auto lg:max-w-2xl md:justify-start md:px-8">
      <ForgotPassForm lang={lang} dictionary={dictionary} />
    </div>
  );
}
