import SettingsForm from "@/components/forms/SettingsForm";
import Setting from "@/components/pages/Setting";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return <Setting lang={lang} dictionary={dictionary} />;
}
