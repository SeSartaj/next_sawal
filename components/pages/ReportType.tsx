"use client";

import { FC, useEffect, useState } from "react";
import Takhnik from "@/services/api";
import SearchForm from "../forms/SearchForm";
import PageHeader from "../ui/PageHeader";
import ReportCard from "../Cards/TagsCard";
import { Pagination, Stack } from "@mui/material";
import { Button } from "../ui/Button";
import CreateReportTypeModel from "../ui/CreateReportTypeModel";
import { Locale } from "@/i18n-config";

interface ReportTypeProps {
  reportTypes: any;
  lang: Locale;
  dictionary: any;
}

const ReportType: FC<ReportTypeProps> = (props) => {
  const [reportTypes, setReportTypes] = useState(props.reportTypes);
  const [page, setPage] = useState(1);
  const [createReportTypesModalOpen, setCreatereportTypesModalOpen] =
    useState(false);

  const toggleCreateReportTypeModal = () => {
    setCreatereportTypesModalOpen(!createReportTypesModalOpen);
  };

  useEffect(() => {
    if (page >= 1) {
      Takhnik.reportTypes.querySearch(`page=${page - 1}`).then((res) => {
        setReportTypes(res.data);
      });
    }
  }, [page]);
  return (
    <div className="flex-col space-y-3 justify-between mx-auto lg:max-w-7xl md:justify-start md:px-8">
      <div>
        <div className="px-4 py-3 md:justify-start">
          <div className="flex justify-between pr-5">
            <PageHeader
              title={props.dictionary["headers"].report_types}
              numberCount={reportTypes.totalElements}
              size={"sm"}
            />
            <Button
              className="bg-blue-500"
              onClick={toggleCreateReportTypeModal}
            >
              {props.dictionary["main"].create}
            </Button>
          </div>
          <SearchForm
            setState={setReportTypes}
            model="reportTypes"
            lang={props.lang}
            dictionary={props.dictionary}
          />
        </div>
      </div>
      <div className="px-4 flex flex-wrap">
        {reportTypes.content.map((reportType: any) => (
          <div className="lg:w-1/2 w-full px-2 mb-4" key={reportType.id}>
            <ReportCard
              key={reportType.id}
              id={reportType.id}
              name={
                props.lang === "pa"
                  ? reportType.namePa
                  : props.lang === "da"
                  ? reportType.nameDa
                  : reportType.name
              }
              lang={props.lang}
              dictionary={props.dictionary}
              setReportTypes={setReportTypes}
              reportType={reportType}
            />
          </div>
        ))}
      </div>
      <div className="flex py-4 items-center justify-center">
        <Stack spacing={2}>
          <Pagination
            count={reportTypes.totalPages}
            showFirstButton
            showLastButton
            onChange={(e, value) => setPage(value)}
          />
        </Stack>
      </div>
      {createReportTypesModalOpen && (
        <div className="modal-background">
          <CreateReportTypeModel
            toggleModal={toggleCreateReportTypeModal}
            setReportTypeState={setReportTypes}
            lang={props.lang}
            dictionary={props.dictionary}
          />
        </div>
      )}
    </div>
  );
};

export default ReportType;
