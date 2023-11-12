import { FC, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Takhnik from "@/services/api";
import PageHeader from "./PageHeader";
import { Button } from "./Button";
import DropdownSelect from "./DropdownSelect";
import Label from "./Label";
import Input from "./Input";
import AuthContext from "../context/AuthContext";
import { toast } from "react-toastify";
import { getErrorMessage } from "../utils/ErrorMessage";
import { useRouter } from "next/navigation";



interface ReportModalProps {
  toggleModal: any;
  reportOption: any;
  discussionId?: any;
  reportedUserId?: any;
  lang: string;
  dictionary: any;
  dir: string
}

const ReportModal: FC<ReportModalProps> = ({
  toggleModal,
  reportOption,
  discussionId,
  lang,
  dictionary,
  reportedUserId,
  dir
}) => {
  const validationSchema = Yup.object({
    reportTypeId: Yup.string().required(dictionary["validation"].atleast_one_type),
    content: Yup.string(),
  });
  const context = useContext(AuthContext);
  const router = useRouter();
  const initialValues = {
    reportTypeId: "",
    content: "",
  };

  const handleSubmit = (values: any, { setSubmitting }: any) => {
    if (!context?.jwt) {
      toast(dictionary['notify'].sign_in_first, {
        hideProgressBar: true,
        autoClose: 2000,
        type: "info",
      });
      return router.push(`/${lang}/sign_in`);
    }
    const userId = context?.jwt?.id;
    const { content, reportTypeId } = values;
    const accessToken = context?.jwt?.accessToken;
    const data = discussionId
      ? { content, reportTypeId, userId, discussionId }
      : { content, reportTypeId, userId, reportedUserId };

    Takhnik.reports
      .create(data, accessToken)
      .then((res: any) => {
        toggleModal();
        toast(dictionary['notify'].report_submit_ok, {
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
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <>
          <div className="fixed inset-0 z-50 flex items-start justify-center mt-10 overflow-x-hidden overflow-y-auto outline-none focus:outline-none" dir={dir}>
            <div className="relative lg:w-[35%] md:w-[50%] w-full my-6 max-w-3xl sm:">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 rounded-t">
                  <PageHeader
                    title={dictionary["main"].report_problem}
                    size={"xs"}
                    className="text-gray-600 "
                  />
                </div>
                <div className="relative p-6 flex-auto">
                  <Label htmlFor="reportTypeId">{dictionary["main"].report_type}</Label>
                  <Field
                    as={DropdownSelect}
                    name="reportTypeId"
                    options={reportOption}
                    placeholderLabel={dictionary["main"].select_option}
                    dir={dir}
                  />
                  <ErrorMessage
                    name="reportTypeId"
                    component="div"
                    className="text-red-500 text-xs"
                  />
                </div>
                <div className="relative p-6 flex-auto">
                  <Field
                    as={Input}
                    name="content"
                    placeholder={dictionary["main"].describe_wrong}
                  />
                  <ErrorMessage
                    name="content"
                    component="div"
                    className="text-red-500 text-xs"
                  />
                </div>
                <div className="flex items-center justify-center mt-10 p-6 border-t space-x-2 border-solid border-gray-200 rounded-b">
                  <Button type="submit">{dictionary["main"].submit}</Button>
                  <Button onClick={toggleModal} variant={"link"}>
                    {dictionary["main"].close}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="fixed inset-0 z-40 bg-black opacity-25"
          ></div>
        </>
      </Form>
    </Formik>
  );
};

export default ReportModal;
