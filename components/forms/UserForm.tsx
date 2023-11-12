"use client";

import * as React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Input from "../ui/Input";
import { Button } from "../ui/Button";
import { Locale } from "@/i18n-config";

interface UserFormProps {
  user: any;
  editUser: boolean;
  setEditUser: React.Dispatch<React.SetStateAction<boolean>>;
  lang: Locale;
  dictionary: any;
}

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;



const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phNumber: "",
  username: ""
};

const UserForm: React.FC<UserFormProps> = ({ user, editUser, setEditUser, lang, dictionary }) => {
  initialValues.firstName = user.firstName ? user.firstName : "";
  initialValues.lastName = user.lastName;
  initialValues.username = user.username ? user.username : "";
  initialValues.email = user.email ? user.email : "";
  initialValues.phNumber = user.phNumber ? user.phNumber : "";

  const validationSchema = Yup.object({
    firstName: Yup.string(),
    lastName: Yup.string().required(dictionary['validation'].last_name_required),
    email: Yup.string().email().required(dictionary['validation'].email_required),
    username: Yup.string().required(dictionary['validation'].username_required),
    phNumber: Yup.string().matches(phoneRegExp, dictionary['validation'].phone_no_invalid),
  });

  const handleSubmit = (values: any, { setSubmitting }: any) => {
    setEditUser(false);
    // Handle form submission here
    console.log(values, "Here");
    setSubmitting(false);
  };

  const handleClose = (resetForm: any) => {
    resetForm();
    setEditUser(false);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ resetForm }) => (
        <Form>
          <div>
            <div className="relative p-6 flex">
              <div className="flex-col w-full">
                <Field
                  as={Input}
                  name="firstName"
                  label={dictionary["main"].first_name}
                  disabled={!editUser}
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>
              <div className="flex-col w-full px-4">
                <Field
                  as={Input}
                  name="lastName"
                  label={dictionary["main"].last_name}
                  disabled={!editUser}
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>
            </div>
            <div className="relative p-6 flex">
              <div className="flex-col w-full">
                <Field
                  as={Input}
                  name="username"
                  label={dictionary["main"].username}
                  disabled
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>
              <div className="flex-col w-full px-4">
                <Field
                  as={Input}
                  name="phNumber"
                  label={dictionary["main"].ph_number}
                  disabled={!editUser}
                />
                <ErrorMessage
                  name="phNumber"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>
            </div>
            <div className="relative p-6 flex">
              <div className="flex-col w-full">
                <Field
                  as={Input}
                  name="email"
                  label={dictionary["main"].email}
                  disabled={!editUser}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>
            </div>
            {editUser && (
              <div className="flex items-center justify-center space-x-2 mt-3 p-6 rounded-b">
                <div>
                  <Button type="submit">{dictionary["main"].save}</Button>
                </div>
                <div>
                  <Button onClick={() => handleClose(resetForm)}>{dictionary["main"].close}</Button>
                </div>
              </div>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
