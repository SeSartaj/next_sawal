import { FC, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import AuthContext from "../context/AuthContext";
import Takhnik from "@/services/api";
import { toast } from "react-toastify";
import PageHeader from "./PageHeader";
import Input from "./Input";
import { Button } from "./Button";
import Label from "./Label";
import DateSelect from "./DateSelect";
import { getErrorMessage } from "../utils/ErrorMessage";

interface SuspendUserModelProps {
  toggleModal: any;
  suspendedUserId?: any;
  lang: string;
  dictionary: any;
}

const SuspendUserModel: FC<SuspendUserModelProps> = ({
  toggleModal,
  suspendedUserId,
  lang,
  dictionary,
}) => {
  const validationSchema = Yup.object({
    suspendReason: Yup.string().required(dictionary['validation'].reason_required),
    suspendUntil: Yup.date().required(dictionary['validation'].suspend_until_required),
  });

  const context = useContext(AuthContext);
  const router = useRouter();
  const initialValues = {
    suspendReason: "",
    suspendUntil: "",
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

    const { suspendReason, suspendUntil } = values;
    const accessToken = context?.jwt?.accessToken;
    const data = { suspendReason, suspendUntil };

    Takhnik.users
      .suspendUser(suspendedUserId, data, accessToken)
      .then((res: any) => {
        toggleModal();
        toast(res.data.message, {
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
    // Handle form submission here
    console.log(values, "Here");
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Form>
          <>
            <div className="fixed inset-0 z-50 flex items-start justify-center mt-10 overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
              <div className="relative lg:w-[35%] md:w-[50%] w-full my-6 max-w-3xl sm:">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 rounded-t">
                    <PageHeader
                      title="Suspend User"
                      size={"xs"}
                      className="text-gray-600 "
                    />
                  </div>
                  <div className="relative p-6 flex items-center space-x-5">
                    <Label htmlFor="suspendUntil">Suspend Until</Label>
                    <Field
                      as={DateSelect}
                      lang={lang}
                      dictionary={dictionary}
                      name="suspendUntil" // Make sure the field name matches your initialValues object
                      onChange={(date: any) =>
                        formik.setFieldValue("suspendUntil", date)
                      }
                    />
                    <ErrorMessage
                      name="suspendUntil"
                      component="div"
                      className="text-red-500 text-xs"
                    />
                  </div>
                  <div className="relative p-6 flex-auto">
                    <Field
                      as={Input}
                      name="suspendReason"
                      placeholder="Describe what's wrong"
                    />
                    <ErrorMessage
                      name="suspendReason"
                      component="div"
                      className="text-red-500 text-xs"
                    />
                  </div>
                  <div className="flex items-center justify-center mt-10 p-6 border-t space-x-2 border-solid border-gray-200 rounded-b">
                    <Button type="submit">Suspend</Button>
                    <Button onClick={toggleModal} variant={"link"}>
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="fixed inset-0 z-40 bg-black opacity-25"
              onClick={toggleModal}
            ></div>
          </>
        </Form>
      )}
    </Formik>
  );
};

export default SuspendUserModel;
