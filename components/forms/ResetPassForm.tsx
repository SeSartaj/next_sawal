"use client";

import { FC, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PageHeader from "../ui/PageHeader";
import Input from "../ui/Input";
import { Button } from "../ui/Button";
import { Locale } from "@/i18n-config";
import Takhnik from "@/services/api";
import { toast } from "react-toastify";
import { getErrorMessage } from "../utils/ErrorMessage";
import { useRouter } from "next/navigation";
import LoadingSpinner from "../ui/LoadingSpinner";

interface ResetPassFormProps {
  lang: Locale;
  dictionary: any;
  token: string;
}

const ResetPassForm: FC<ResetPassFormProps> = ({ token, dictionary, lang }) => {
  const validationSchema = Yup.object({
    password: Yup.string().required(dictionary['validation'].password_required),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], dictionary['validation'].password_match)
      .required(dictionary['validation'].confirm_password_required),
  });

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values: any, { setSubmitting }: any) => {
    setIsLoading(true);
    const { password } = values;

    Takhnik.users
      .resetPasswordByToken(token, { password })
      .then(() => {
        setIsLoading(false);
        toast(dictionary['notify'].pass_reset_ok, {
          hideProgressBar: true,
          autoClose: 2000,
          type: "success",
        });
        router.push(`/${lang}/sign_in`);
      })
      .catch((error): void => {
        setIsLoading(false);
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
      {isLoading ? (
        <LoadingSpinner />
      ) : (
      <Form>
        <div className="justify-center">
          <div className="flex py-20 justify-center">
            <PageHeader
              title={dictionary["main"].pass_reset}
              size={"sm"}
              className="text-gray-600"
            />
          </div>
          <div className="relative p-6 flex-auto">
            <Field
              as={Input}
              name="password"
              type="password"
              placeholder={dictionary["main"].password}
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-xs"
            />
          </div>
          <div className="relative p-6 flex-auto">
            <Field
              as={Input}
              name="confirmPassword"
              type="password"
              placeholder={dictionary["main"].confirm_password}
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="text-red-500 text-xs"
            />
          </div>
          <div className="flex items-center justify-center mt-3 p-6 rounded-b">
            <Button type="submit" size={"lg"}>
            {dictionary["main"].submit}
            </Button>
          </div>
        </div>
      </Form>
      )}
    </Formik>
  );
};

export default ResetPassForm;
