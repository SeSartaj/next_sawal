"use client";

import { FC, useContext, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PageHeader from "../ui/PageHeader";
import Input from "../ui/Input";
import { Button } from "../ui/Button";
import Label from "../ui/Label";
import { Locale } from "@/i18n-config";
import Takhnik from "@/services/api";
import { useRouter } from "next/navigation";
import { getErrorMessage } from "../utils/ErrorMessage";
import { toast } from "react-toastify";
import AuthContext from "../context/AuthContext";
import LoadingSpinner from "../ui/LoadingSpinner";

interface SignUpFormProps {
  lang: Locale;
  dictionary: any;
}



const SignUpForm: FC<SignUpFormProps> = ({ lang, dictionary }) => {
  const validationSchema = Yup.object({
    firstName: Yup.string(),
    lastName: Yup.string().required(dictionary['validation'].last_name_required),
    username: Yup.string().required(dictionary['validation'].username_required),
    password: Yup.string().required(dictionary['validation'].password_required),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], dictionary['validation'].password_match)
      .required(dictionary['validation'].confirm_password_required),
    email: Yup.string().email().required(dictionary['validation'].email_required),
  });

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const context = useContext(AuthContext);
  if (context?.jwt) {
    router.push(`/${lang}/questions`);
  }
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  };

  const handleSubmit = (values: any, { setSubmitting }: any) => {
    setIsLoading(true);
    const { firstName, lastName, email, username, password } = values;

    Takhnik.users
      .createUser({ firstName, lastName, email, username, password, lang })
      .then((): void => {
        setIsLoading(false);
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
            <div className="flex py-10 justify-center">
              <PageHeader
                title={dictionary["headers"].sign_up}
                size={"xs"}
                className="text-gray-600"
              />
            </div>
            <div className="relative p-6 flex">
              <div className="flex-1">
                <Field
                  as={Input}
                  name="firstName"
                  placeholder={dictionary["main"].first_name}
                  label={dictionary["main"].first_name}
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>

              <div className="flex-col flex-1 px-4">
                <Field
                  as={Input}
                  name="lastName"
                  placeholder={dictionary["main"].last_name}
                  label={dictionary["main"].last_name}
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>
            </div>
            <div className="relative p-6 flex-auto">
              <Field
                as={Input}
                name="email"
                placeholder={dictionary["main"].email}
                label={dictionary["main"].email}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>
            <div className="relative p-6 flex-auto">
              <Field
                as={Input}
                name="username"
                placeholder={dictionary["main"].username}
                label={dictionary["main"].username}
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500 text-xs"
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
            <div className="flex items-center justify-center mt-3 p-6 rounded-b">
              <Button type="submit">{dictionary["headers"].sign_up}</Button>
            </div>
            <div className="flex items-center justify-center mt-3 p-6 rounded-b">
              <Label className="text-gray-700">
                {dictionary["main"].sign_up_agree}
              </Label>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
