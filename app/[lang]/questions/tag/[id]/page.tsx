import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import Takhnik from "@/services/api";
import TagDiscussions from "@/components/pages/TagDiscussions";

export default async function IndexPage({
  params: { lang, id },
}: {
  params: { lang: Locale; id: string };
}) {
  let data: any = [];
  await Takhnik.discussions.fetchByTagId(id).then((res) => {
    data = res.data;
  });

  let reportOption: any = [];
  await Takhnik.reportTypes.options(lang).then((res) => {
    reportOption = res.data;
  });

  let tag: any = {};
  await Takhnik.tags.retrieve(id).then((res) => {
    tag = res.data;
  });

  const dictionary = await getDictionary(lang);

  return (
    <TagDiscussions
      lang={lang}
      dictionary={dictionary}
      discussions={data}
      reportOption={reportOption}
      tag={tag}
    />
  );
}
