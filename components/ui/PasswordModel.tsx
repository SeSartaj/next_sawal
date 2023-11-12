import { FC } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PageHeader from "./PageHeader";
import { Button } from "./Button";
import Input from "./Input";
import Takhnik from "@/services/api";
import { Jwt } from "@/models/global";
import { toast } from "react-toastify";
import { getErrorMessage } from "../utils/ErrorMessage";
import { Locale } from "@/i18n-config";

interface PasswordModelProps {
  toggleModal: any;
  jwt: Jwt | null | undefined;
  lang: Locale;
  dictionary: any;
}

const PasswordModel: FC<PasswordModelProps> = ({ toggleModal, jwt, lang, dictionary }) => {
  const validationSchema = Yup.object({
    password: Yup.string().required(dictionary['validation'].password_required),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], dictionary['validation'].password_match)
      .required(dictionary['validation'].confirm_password_required),
  });

  const initialValues = {
    password: "",
  };

  const handleSubmit = (values: any, { setSubmitting }: any) => {
    const { password } = values;
    Takhnik.users
      .changePassword(jwt?.id, { password }, jwt?.accessToken)
      .then((res) => {
        toast(dictionary['notify'].pass_changed_ok, {
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
                    title={dictionary["main"].change_password}
                    size={"xs"}
                    className="text-gray-600 "
                  />
                </div>
                <div className="relative p-6 flex">
                  <div className="flex-1 flex-col">
                    <Field
                      as={Input}
                      name="password"
                      type="password"
                      placeholder={dictionary["main"].password}
                      label={dictionary["main"].password}
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-xs"
                    />
                  </div>
                  <div className="flex-1 flex-col px-4">
                    <Field
                      as={Input}
                      name="confirmPassword"
                      type="password"
                      placeholder={dictionary["main"].confirm_password}
                      label={dictionary["main"].confirm_password}
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="text-red-500 text-xs"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center mt-10 p-6 border-t space-x-2 border-solid border-gray-200 rounded-b">
                  <Button type="submit">{dictionary["main"].change}</Button>
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

export default PasswordModel;
