import Tags from "@/components/pages/Tags";
import Takhnik from "@/services/api";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  let data: any = [];
  await Takhnik.tags.querySearch("").then((res) => {
    data = res.data;
  });
  const dictionary = await getDictionary(lang);
  return <Tags lang={lang} dictionary={dictionary} tags={data} />;
}
