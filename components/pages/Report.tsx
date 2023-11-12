"use client";

import { FC, useEffect, useState } from "react";
import { Locale } from "@/i18n-config";
import PageHeader from "../ui/PageHeader";
import ReportsCard from "../Cards/ReportsCard";
import Takhnik from "@/services/api";
import SearchForm from "../forms/SearchForm";
import { Pagination, Stack } from "@mui/material";

interface ReportProps {
  lang: Locale;
  dictionary: any;
  reports: any;
}

const Report: FC<ReportProps> = (props) => {
  const [reports, setReports] = useState(props.reports);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (page >= 1) {
      Takhnik.reports.querySearch(`page=${page - 1}`).then((res) => {
        setReports(res.data);
      });
    }
  }, [page]);

  return (
    <div className="flex-col space-y-3 justify-between mx-auto lg:max-w-7xl md:justify-start md:px-8">
      <div className="px-4 py-3 md:justify-start">
        <PageHeader
          title={props.dictionary["main"].reports}
          numberCount={reports.totalElements}
          size={"sm"}
        />
        <SearchForm
          setState={setReports}
          model="reports"
          lang={props.lang}
          dictionary={props.dictionary}
        />
      </div>
      <div className="px-4 flex-col space-y-2">
        {reports.content.map((report: any) => (
          <ReportsCard
            key={report.id}
            report={report}
            lang={props.lang}
            dictionary={props.dictionary}
            setState={setReports}
          />
        ))}
      </div>
      <div className="flex py-4 items-center justify-center">
        <Stack spacing={2}>
          <Pagination
            count={reports.totalPages}
            showFirstButton
            showLastButton
            onChange={(e, value) => setPage(value)}
          />
        </Stack>
      </div>
    </div>
  );
};

export default Report;
