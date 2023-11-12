"use client";

import { FC, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Locale } from "@/i18n-config";
import PageHeader from "./PageHeader";
import Input from "./Input";
import { Button } from "./Button";
import Takhnik from "@/services/api";
import { getErrorMessage } from "../utils/ErrorMessage";
import { toast } from "react-toastify";
import AuthContext from "../context/AuthContext";
import { useRouter } from "next/navigation";

interface CreateModeratorModelProps {
  lang: Locale;
  dictionary: any;
  toggleModal: any;
  setModeratorState: any;
}

const CreateModeratorModel: FC<CreateModeratorModelProps> = ({
  lang,
  dictionary,
  toggleModal,
  setModeratorState,
}) => {
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

  const router = useRouter();
  const context = useContext(AuthContext);
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
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
    const { firstName, lastName, email, username, password } = values;
    const accessToken = context?.jwt?.accessToken;
    Takhnik.users
      .createModerator(
        { firstName, lastName, email, username, password, lang },
        accessToken
      )
      .then((): void => {
        Takhnik.users.querySearchModerators("").then((res) => {
          setModeratorState(res.data);
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
        <div className="fixed inset-0 z-50 flex items-start justify-center mt-10 overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative lg:w-[35%] md:w-[50%] w-full my-6 max-w-3xl sm:">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 rounded-t">
                <PageHeader
                  title={dictionary["main"].register_moderator}
                  size={"xs"}
                  className="text-gray-600 "
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

                <div className="flex-col flex-1 px-2">
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
                <div className="flex-1 flex-col px-2">
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
              <div className="flex items-center justify-center mt-3 p-6 rounded-b space-x-2">
                <Button type="submit">{dictionary["main"].register}</Button>
                <Button onClick={toggleModal} variant={"link"}>
                {dictionary["main"].close}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default CreateModeratorModel;
