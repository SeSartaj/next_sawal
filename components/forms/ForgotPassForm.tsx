"use client";

import { FC, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PageHeader from "../ui/PageHeader";
import Input from "../ui/Input";
import { Button } from "../ui/Button";
import Takhnik from "@/services/api";
import { Locale } from "@/i18n-config";
import { toast } from "react-toastify";
import { getErrorMessage } from "../utils/ErrorMessage";
import { useRouter } from "next/navigation";
import LoadingSpinner from "../ui/LoadingSpinner";

interface ForgotPassFormProps {
  dictionary: any;
  lang: Locale;
}

const ForgotPassForm: FC<ForgotPassFormProps> = ({ dictionary, lang }) => {
  const validationSchema = Yup.object({
    email: Yup.string().email().required(dictionary['validation'].email_required),
  });

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const initialValues = {
    email: "",
  };

  const handleSubmit = (values: any, { setSubmitting }: any) => {
    setIsLoading(true);
    const { email } = values;

    Takhnik.users
      .emailSendForPasswordReset({ email })
      .then((res) => {
        setIsLoading(false);
        toast(res.data.message, {
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
              title={dictionary["main"].forgotten_pass}
              size={"sm"}
              className="text-gray-600"
            />
          </div>
          <div className="relative p-6 flex-auto">
            <Field as={Input} name="email" placeholder={dictionary["main"].email} />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-xs"
            />
          </div>
          <div className="flex items-center justify-center mt-3 p-6 rounded-b">
            <Button type="submit" size={"lg"}>
              {dictionary["main"].send}
            </Button>
          </div>
        </div>
      </Form>
      )}
    </Formik>
  );
};

export default ForgotPassForm;
