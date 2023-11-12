"use client";

import { FC, useEffect, useState } from "react";
import PageHeader from "../ui/PageHeader";
import SearchForm from "../forms/SearchForm";
import { Pagination, Stack } from "@mui/material";
import QuestionsCard from "../Cards/QuestionsCard";
import { Locale } from "@/i18n-config";
import Takhnik from "@/services/api";

interface DiscussionsProps {
  discussions: any;
  lang: Locale;
  dictionary: any;
  reportOption: any;
}

const Discussions: FC<DiscussionsProps> = (props) => {
  const [discussions, setDiscussions] = useState(props.discussions);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (page >= 1) {
      Takhnik.discussions.querySearch(`page=${page - 1}`).then((res) => {
        setDiscussions(res.data);
      });
    }
  }, [page]);

  return (
    <div className="flex-col space-y-3 justify-between mx-auto lg:max-w-7xl md:justify-start md:px-8 pb-20">
      <div>
        <div className="px-4 py-3">
          <PageHeader
            title={props.dictionary["main"].questions}
            numberCount={discussions.totalElements}
            size={"sm"}
          />
          <SearchForm
            setState={setDiscussions}
            model="discussions"
            lang={props.lang}
            dictionary={props.dictionary}
          />
        </div>
      </div>
      <div className="px-4 flex-col space-y-2">
        {discussions.content.map((discussion: any) => (
          <QuestionsCard
            key={discussion.id}
            discussion={discussion}
            lang={props.lang}
            dictionary={props.dictionary}
            reportOption={props.reportOption}
            dir={
              discussion.lang
                ? discussion.lang == "en"
                  ? "ltr"
                  : "rtl"
                : "ltr"
            }
          />
        ))}
      </div>
      <div className="flex py-4 items-center justify-center">
        <Stack spacing={2}>
          <Pagination
            count={discussions.totalPages}
            showFirstButton
            showLastButton
            onChange={(e, value) => setPage(value)}
          />
        </Stack>
      </div>
    </div>
  );
};

export default Discussions;
