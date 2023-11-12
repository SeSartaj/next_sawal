import PrivacyPolicy from "@/components/pages/PrivacyPolicy";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return <PrivacyPolicy lang={lang} dictionary={dictionary} />;
}
