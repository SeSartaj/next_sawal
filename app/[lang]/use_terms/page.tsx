import UseTerms from "@/components/pages/UseTerms";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return <UseTerms lang={lang} dictionary={dictionary} />;
}
