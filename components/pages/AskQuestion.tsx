import { FC } from "react";
import { Locale } from "@/i18n-config";
import QuestionForm from "@/forms/QuestionForm";

interface AskQuestionProps {
  tags: any;
  lang: Locale;
  dictionary: any;
}

const AskQuestion: FC<AskQuestionProps> = ({ tags, lang, dictionary }) => {
  return (
    <div className="flex-col space-y-3 justify-between mx-auto lg:max-w-7xl md:justify-start md:px-8">
        <div className="px-4 py-3 md:justify-start">
          <QuestionForm lang={lang} dictionary={dictionary} tags={tags} />
        </div>
    </div>
  );
};

export default AskQuestion;
