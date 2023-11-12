"use client";

import { FC, useState } from "react";
import PageHeader from "../ui/PageHeader";
import QuestionsCard from "../Cards/QuestionsCard";
import { Locale } from "@/i18n-config";
import BadgeCard from "../Cards/BadgeCard";
import Icons from "../Icons";
import { useRouter } from "next/navigation";

interface TagDiscussionsProps {
  discussions: any;
  lang: Locale;
  dictionary: any;
  reportOption: any;
  tag?: any;
}

const TagDiscussions: FC<TagDiscussionsProps> = (props) => {
  const router = useRouter();
  const [discussions, setDiscussions] = useState(props.discussions);

  const handleClearTag = () => {
    router.push(`/${props.lang}/questions`);
  };

  return (
    <div className="flex-col space-y-3 justify-between mx-auto lg:max-w-7xl md:justify-start md:px-8 pb-20">
      <div>
        <div className="px-4 py-3">
          <PageHeader
            title={props.dictionary["main"].questions}
            numberCount={discussions.length || 0}
            size={"sm"}
          />
          <div className="w-full flex pt-5">
            <BadgeCard
              name={
                props.lang === "pa"
                  ? props.tag.namePa
                  : props.lang === "da"
                  ? props.tag.nameDa
                  : props.tag.name
              }
              Icon={<Icons.Tag className="h-4 w-4" />}
              id={props.tag.id}
              highLightTagId={props.tag.id}
              RemoveIconNoAlert={<Icons.X size={14} onClick={handleClearTag} />}
            />
          </div>
        </div>
      </div>
      <div className="px-4 flex-col space-y-2">
        {discussions.map((discussion: any) => (
          <QuestionsCard
            key={discussion.id}
            discussion={discussion}
            lang={props.lang}
            dictionary={props.dictionary}
            reportOption={props.reportOption}
            highLightTagId={props.tag.id}
            dir={discussion.lang ? discussion.lang == "en" ? "ltr": "rtl" : "ltr"}
          />
        ))}
      </div>
    </div>
  );
};

export default TagDiscussions;
