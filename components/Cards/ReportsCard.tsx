import { FC, useContext, useState } from "react";
import PageHeader from "@/ui/PageHeader";
import Icons from "../Icons";
import Label from "@/ui/Label";
import { Button } from "@/ui/Button";
import RelativeTime from "@/utils/RelativeTime";
import Paragraph from "../ui/Paragragh";
import Link from "next/link";
import Takhnik from "@/services/api";
import AuthContext from "../context/AuthContext";
import { toast } from "react-toastify";
import { getErrorMessage } from "../utils/ErrorMessage";
import Alert from "../ui/Alert";

interface ReportsCardProps {
  report: any;
  lang: string;
  dictionary: any;
  setState: any;
}

const ReportsCard: FC<ReportsCardProps> = ({
  report,
  lang,
  dictionary,
  setState,
}) => {
  const { reportType, user, discussion, reportedUser, content } = report;
  const context = useContext(AuthContext);
  const [openDeleteReportAlert, setOpenDeleteReportAlert] = useState(false);
  const [openCloseReportAlert, setOpenCloseReportAlert] = useState(false);

  const handleDelete = () => {
    const accessToken = context?.jwt?.accessToken;
    Takhnik.reports
      .delete(report.id, accessToken)
      .then((res: any) => {
        setOpenDeleteReportAlert(false);
        Takhnik.reports.querySearch("").then((res) => {
          setState(res.data);
        });
        toast(dictionary['notify'].report_deleted_ok, {
          hideProgressBar: true,
          autoClose: 2000,
          type: "success",
        });
      })
      .catch((error): void => {
        console.error(getErrorMessage(error));
        toast(getErrorMessage(error), {
          hideProgressBar: true,
          autoClose: 2000,
          type: "error",
        });
      });
  };

  const handleClose = () => {
    const accessToken = context?.jwt?.accessToken;
    Takhnik.reports
      .closeReport(report.id, accessToken)
      .then((res: any) => {
        setOpenCloseReportAlert(false);
        Takhnik.reports.querySearch("").then((res) => {
          setState(res.data);
        });
        toast(dictionary['notify'].report_cleared_ok, {
          hideProgressBar: true,
          autoClose: 2000,
          type: "success",
        });
      })
      .catch((error): void => {
        console.error(getErrorMessage(error));
        toast(getErrorMessage(error), {
          hideProgressBar: true,
          autoClose: 2000,
          type: "error",
        });
      });
  };

  return (
    <div className="flex rounded overflow-hidden shadow-md justify-between">
      <div
        className={`flex-col justify-start ${
          lang === "en" ? "pl-5" : "pr-5"
        } py-2 space-y-2`}
      >
        <div className="pb-1">
          <PageHeader
            title={
              lang === "pa"
                ? reportType.namePa
                : lang === "da"
                ? reportType.nameDa
                : reportType.name
            }
            size={"xs"}
          />
          <Paragraph className="text-start" size={"sm"}>
            {content}
          </Paragraph>
        </div>
        <div className="pb-7">
          <div className="flex pb-1">
            <Icons.User />
            <Label className="pl-1 flex items-center justify-center">
              {user.lastName}
            </Label>
          </div>
          <div className="flex">
            <Icons.ExternalLink />
            {discussion && (
              <div className="text-xl text-blue-500 mb-2 px-1">
                <Link href={`/${lang}/question/${discussion.id}`}>
                  <Paragraph className="text-left text-blue-500">
                    {discussion.title}
                  </Paragraph>
                </Link>
              </div>
            )}
            {reportedUser && (
              <div className="text-xl text-blue-500 mb-2 px-1">
                <Link href={`/${lang}/profile/${reportedUser.id}`}>
                  <Paragraph className="text-left text-blue-500">
                    {reportedUser.lastName}
                  </Paragraph>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex-col pr-5 py-2">
        <div className="space-x-2 pb-7 flex">
          {!report.isClosed && (
            <Button
              className="bg-green-600"
              onClick={() => setOpenCloseReportAlert(true)}
            >
              <Icons.Check /> {dictionary["main"].close}
            </Button>
          )}
          <div className="flex px-1">
            <Button
              className="bg-red-600"
              onClick={() => setOpenDeleteReportAlert(true)}
            >
              <Icons.X /> {dictionary["main"].delete}
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <RelativeTime
            timestamp={report.createdAt}
            lang={lang}
            dictionary={dictionary}
          />
        </div>
        <Alert
          alertTitle="Delete Report?"
          alertMessage={`Are you sure you want to Delete ${reportType.name} Report?`}
          open={openDeleteReportAlert}
          setOpen={setOpenDeleteReportAlert}
          handleYes={handleDelete}
        />
        <Alert
          alertTitle="Close Report?"
          alertMessage={`Are you sure you want to Close ${reportType.name} Report?`}
          open={openCloseReportAlert}
          setOpen={setOpenCloseReportAlert}
          handleYes={handleClose}
        />
      </div>
    </div>
  );
};

export default ReportsCard;
