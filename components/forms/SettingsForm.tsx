"use client";

import { FC, useContext, useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PageHeader from "../ui/PageHeader";
import { Button } from "../ui/Button";
import Label from "../ui/Label";
import SwitchField from "../ui/Switch";
import AuthContext from "@/context/AuthContext";
import { Locale } from "@/i18n-config";
import Takhnik from "@/services/api";
import { getErrorMessage } from "../utils/ErrorMessage";
import { toast } from "react-toastify";
import PasswordModel from "@/ui/PasswordModel";
import { Users } from "@/models/global";

interface SettingsFormProps {
  lang: Locale;
  dictionary: any;
}

const validationSchema = Yup.object({
  postNewQuestionNotify: Yup.boolean(),
  soAnsToDiscussionNotify: Yup.boolean(),
  soComOnDiscussionNotify: Yup.boolean(),
});

const SettingsForm: FC<SettingsFormProps> = ({ lang, dictionary }) => {
  const context = useContext(AuthContext);
  const [user, setUser] = useState<Users | null>();

  const [passwordModalOpen, setPasswordModalOpen] = useState(false);

  const togglePasswordModal = () => {
    setPasswordModalOpen(!passwordModalOpen);
  };

  const initialValues = {
    postNewQuestionNotify: context?.user?.setting.postNewQuestionNotify,
    soAnsToDiscussionNotify: context?.user?.setting.soAnsToDiscussionNotify,
    soComOnDiscussionNotify: context?.user?.setting.soComOnDiscussionNotify,
  };

  const handleSubmit = (values: any, { setSubmitting }: any) => {
    const {
      postNewQuestionNotify,
      soAnsToDiscussionNotify,
      soComOnDiscussionNotify,
    } = values;
    const id = context?.user?.setting.id;
    Takhnik.setting
      .update(
        {
          id,
          postNewQuestionNotify,
          soAnsToDiscussionNotify,
          soComOnDiscussionNotify,
        },
        context?.jwt?.accessToken
      )
      .then((res) => {
        Takhnik.users.retrieve(context?.user?.id).then((res) => {
          context?.updateUser(res.data);
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

  useEffect(() => {
    if (context?.user) {
      setUser(context?.user);
    } else {
      setUser(null);
    }
  }, []);

  return (
    <>
      {user && (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="justify-center">
              <div className="flex py-20 px-10 justify-between">
                <PageHeader
                  title={dictionary["headers"].settings}
                  size={"sm"}
                  className="text-gray-600"
                />
                <Button onClick={togglePasswordModal}>{dictionary["main"].change_password}</Button>
              </div>
              <div className="relative p-6 flex-auto">
                <div className="flex items-center">
                  <Field name="postNewQuestionNotify">
                    {() => (
                      <>
                        <SwitchField name="postNewQuestionNotify" />
                        <Label className="mr-2">
                          {dictionary["main"].postNewQuestionNotify}
                        </Label>
                      </>
                    )}
                  </Field>
                </div>
                <ErrorMessage
                  name="postNewQuestionNotify"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>
              <div className="relative p-6 flex-auto">
                <div className="flex items-center">
                  <Field name="soAnsToDiscussionNotify">
                    {() => (
                      <>
                        <SwitchField name="soAnsToDiscussionNotify" />
                        <Label className="mr-2">
                          {dictionary["main"].soAnsToDiscussionNotify}
                        </Label>
                      </>
                    )}
                  </Field>
                </div>
                <ErrorMessage
                  name="soAnsToDiscussionNotify"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>
              <div className="relative p-6 flex-auto">
                <div className="flex items-center">
                  <Field name="soComOnDiscussionNotify">
                    {() => (
                      <>
                        <SwitchField name="soComOnDiscussionNotify" />
                        <Label className="mr-2">
                          {dictionary["main"].soComOnDiscussionNotify}
                        </Label>
                      </>
                    )}
                  </Field>
                </div>
                <ErrorMessage
                  name="soComOnDiscussionNotify"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>
              <div className="flex items-start justify-start mt-3 p-6 rounded-b">
                <Button type="submit">{dictionary["main"].save}</Button>
              </div>
            </div>
          </Form>
        </Formik>
      )}
      {passwordModalOpen && (
        <div className="modal-background">
          <PasswordModel
            toggleModal={togglePasswordModal}
            jwt={context?.jwt}
            lang={lang}
            dictionary={dictionary}
          />
        </div>
      )}
    </>
  );
};

export default SettingsForm;
