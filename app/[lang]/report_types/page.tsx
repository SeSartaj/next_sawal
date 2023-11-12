import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import Takhnik from "@/services/api";
import ReportType from "@/components/pages/ReportType";

export default async function IndexPage({
    params: { lang },
  }: {
    params: { lang: Locale };
  }) {
    let data: any = [];
    await Takhnik.reportTypes.querySearch("").then((res) => {
      data = res.data;
    });
    const dictionary = await getDictionary(lang);
    return <ReportType reportTypes={data} lang={lang} dictionary={dictionary} />;
  }
  