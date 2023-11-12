import ResetPassForm from "@/components/forms/ResetPassForm";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function IndexPage({
  params: { lang, token },
}: {
  params: { lang: Locale; token: string };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <div className="flex-col justify-between mx-auto lg:max-w-2xl md:justify-start md:px-8">
      <ResetPassForm lang={lang} dictionary={dictionary} token={token} />
    </div>
  );
}
