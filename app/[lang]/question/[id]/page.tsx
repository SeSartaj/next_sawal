import QuestionCard from "@/components/Cards/QuestionCard";
import NotFound from "@/components/pages/NotFound";
import { getErrorMessage } from "@/components/utils/ErrorMessage";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import Takhnik from "@/services/api";
import Head from "next/head";

export default async function IndexPage({
  params: { lang, id },
}: {
  params: { lang: Locale; id: string };
}) {
  const dictionary = await getDictionary(lang);

  let notFound: boolean = false;
  let data: any = [];
  await Takhnik.discussions
    .retrieve(id)
    .then((res) => {
      data = res.data;
    })
    .catch((error): void => {
      notFound = true;
      console.error(getErrorMessage(error));
    });

  let reportOption: any = [];
  await Takhnik.reportTypes.options(lang).then((res) => {
    reportOption = res.data;
  });

  let tags: any = [];
  await Takhnik.tags.options(lang).then((res) => {
    tags = res.data;
  });

  if (notFound) {
    return (
      <div className="flex-col justify-between mx-auto lg:max-w-7xl md:justify-start md:px-8">
        <NotFound lang={lang} dictionary={dictionary} />
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.content} />
      </Head>
      <div className="flex-col justify-between mx-auto lg:max-w-7xl md:justify-start md:px-8">
        <QuestionCard
          discussionDetails={data}
          lang={lang}
          dictionary={dictionary}
          reportOption={reportOption}
          tags={tags}
        />
      </div>
    </>
  );
}
