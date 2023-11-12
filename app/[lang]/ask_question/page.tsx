import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import Takhnik from "@/services/api";
import AskQuestion from "@/components/pages/AskQuestion";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  let data: any = [];
  await Takhnik.tags.options(lang).then((res) => {
    data = res.data;
  });

  const dictionary = await getDictionary(lang);
  return <AskQuestion lang={lang} dictionary={dictionary} tags={data} />;
}
