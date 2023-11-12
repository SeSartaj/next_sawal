import Profile from "@/components/pages/Profile";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import Takhnik from "@/services/api";

export default async function IndexPage({
  params: { lang, id },
}: {
  params: { lang: Locale; id: string };
}) {
  let data: any = [];
  await Takhnik.users.retrieve(id).then((res) => {
    data = res.data;
  });

  let userActivity: any = [];
  await Takhnik.users.userActivity(id).then((res) => {
    userActivity = res.data;
  });

  let tagsOptions: any = [];
  await Takhnik.tags.options(lang).then((res) => {
    tagsOptions = res.data;
  });

  let reportOption: any = [];
  await Takhnik.reportTypes.options(lang).then((res) => {
    reportOption = res.data;
  });

  const dictionary = await getDictionary(lang);
  return (
    <Profile
      lang={lang}
      dictionary={dictionary}
      user={data}
      useractivity={userActivity}
      tagOptions={tagsOptions}
      reportOption={reportOption}
    />
  );
}
