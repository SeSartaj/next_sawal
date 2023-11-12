import Moderators from "@/components/pages/Moderators";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import Takhnik from "@/services/api";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  let data: any = [];
  await Takhnik.users.querySearchModerators("").then((res) => {
    data = res.data;
  });

  const dictionary = await getDictionary(lang);
  return <Moderators lang={lang} dictionary={dictionary} moderators={data} />;
}
