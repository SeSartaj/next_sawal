import Users from "@/components/pages/Users";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import Takhnik from "@/services/api";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  let data: any = [];
  await Takhnik.users.querySearchMembers("").then((res) => {
    data = res.data;
  });
  const dictionary = await getDictionary(lang);
  return <Users members={data} lang={lang} dictionary={dictionary} />;
}
