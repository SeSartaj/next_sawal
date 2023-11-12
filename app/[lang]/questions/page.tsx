import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import Discussions from "@/components/pages/Discussions";
import Takhnik from "@/services/api";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  let data: any = [];
  await Takhnik.discussions.querySearch("").then((res) => {
    data = res.data;
  });

  let reportOption: any = [];
  await Takhnik.reportTypes.options(lang).then((res) => {
    reportOption = res.data;
  });

  const dictionary = await getDictionary(lang);
  return <Discussions lang={lang} dictionary={dictionary} discussions={data} reportOption={reportOption} />;
}
