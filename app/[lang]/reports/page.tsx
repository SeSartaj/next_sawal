import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import Takhnik from "@/services/api";
import Report from "@/components/pages/Report";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  let data: any = [];
  await Takhnik.reports.querySearch("").then((res) => {
    data = res.data;
  });
  const dictionary = await getDictionary(lang);
  return <Report reports={data} lang={lang} dictionary={dictionary} />;
}
