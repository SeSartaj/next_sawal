import { FC, useContext } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import PageHeader from "./PageHeader";
import { Button } from "./Button";
import Input from "./Input";
import Takhnik from "@/services/api";
import { toast } from "react-toastify";
import { getErrorMessage } from "../utils/ErrorMessage";
import AuthContext from "../context/AuthContext";
import { Locale } from "@/i18n-config";

interface CreateReportTypeModelProps {
  toggleModal: any;
  setReportTypeState: any;
  lang: Locale;
  dictionary: any;
}

const CreateReportTypeModel: FC<CreateReportTypeModelProps> = ({
  toggleModal,
  setReportTypeState,
  lang,
  dictionary
}) => {
  const validationSchema = Yup.object({
    name: Yup.string().required(dictionary['validation'].english_name_required),
    namePa: Yup.string().required(dictionary['validation'].pashtu_name_required),
    nameDa: Yup.string().required(dictionary['validation'].dari_name_required),
  });

  const context = useContext(AuthContext);
  const initialValues = {
    name: "",
    namePa: "",
    nameDa: "",
  };

  const handleSubmit = (values: any, { setSubmitting }: any) => {
    let accessToken = context?.jwt?.accessToken;
    const { name, namePa, nameDa } = values;
    Takhnik.reportTypes
      .create({ name, namePa, nameDa }, accessToken)
      .then((res) => {
        Takhnik.reportTypes.querySearch("").then((res) => {
          setReportTypeState(res.data);
        });
        toast(dictionary['notify'].report_type_created_ok, {
          hideProgressBar: true,
          autoClose: 2000,
          type: "success",
        });
        toggleModal();
      })
      .catch((error): void => {
        console.error(getErrorMessage(error));
        toast(getErrorMessage(error), {
          hideProgressBar: true,
          autoClose: 2000,
          type: "error",
        });
      });
    console.log(values, "Here");
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
          <div className="fixed inset-0 z-50 flex items-start justify-center mt-10 overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative lg:w-[35%] md:w-[50%] w-full my-6 max-w-3xl sm:">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 rounded-t">
                  <PageHeader
                    title={dictionary["main"].create_report_type}
                    size={"xs"}
                    className="text-gray-600 "
                  />
                </div>
                <div className="relative p-6 flex">
                  <div className="flex-1 flex-col">
                    <Field
                      as={Input}
                      name="name"
                      placeholder={dictionary["main"].name}
                      label={dictionary["main"].name}
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-xs"
                    />
                  </div>
                </div>
                <div className="relative p-6 flex">
                  <div className="flex-1 flex-col">
                    <Field
                      as={Input}
                      name="namePa"
                      placeholder={dictionary["main"].name_pa}
                      label={dictionary["main"].name_pa}
                    />
                    <ErrorMessage
                      name="namePa"
                      component="div"
                      className="text-red-500 text-xs"
                    />
                  </div>
                </div>
                <div className="relative p-6 flex">
                  <div className="flex-1 flex-col">
                    <Field
                      as={Input}
                      name="nameDa"
                      placeholder={dictionary["main"].name_da}
                      label={dictionary["main"].name_da}
                    />
                    <ErrorMessage
                      name="nameDa"
                      component="div"
                      className="text-red-500 text-xs"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center mt-10 p-6 border-t space-x-2 border-solid border-gray-200 rounded-b">
                  <Button type="submit">{dictionary["main"].add}</Button>
                  <Button onClick={toggleModal} variant={"link"}>
                  {dictionary["main"].close}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      </Form>
    </Formik>
  );
};

export default CreateReportTypeModel;
