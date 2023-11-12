"use client";

import { FC, useContext, useEffect, useState } from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikProps,
  FieldInputProps,
} from "formik";
import * as Yup from "yup";
import Icons from "@/components/Icons";
import { Button } from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "../ui/Textarea";
import MultiSelect from "../ui/MultiSelect";
import { Locale } from "@/i18n-config";
import Takhnik from "@/services/api";
import AuthContext from "../context/AuthContext";
import { getErrorMessage } from "../utils/ErrorMessage";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import LoadingSpinner from "../ui/LoadingSpinner";
import { Users } from "@/models/global";
import PageHeader from "../ui/PageHeader";
import Label from "../ui/Label";
import { detectLanguage } from "../utils/DetectLanguage";
import Image from "next/image";

interface QuestionFormProps {
  tags: any;
  lang: Locale;
  dictionary: any;
}

interface FormValues {
  title: string;
  content: string;
  files: FileList | null;
  tags: any;
}



const QuestionForm: FC<QuestionFormProps> = ({ tags, lang, dictionary }) => {
  const validationSchema = Yup.object({
    title: Yup.string().required(dictionary['validation'].title_required),
    content: Yup.string().required(dictionary['validation'].content_required),
    tags: Yup.array().min(1).required(dictionary['validation'].atleast_one_tag),
    files: Yup.array(),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [userVerifiedWarning, setUserVerifiedWarning] = useState(true);
  const [user, setUser] = useState<Users | null>();
  const context = useContext(AuthContext);
  const router = useRouter();
  const initialValues = {
    title: "",
    content: "",
    files: [],
    tags: [],
  };

  const handleSubmit = (values: any, { setSubmitting }: any) => {
    setIsLoading(true);
    let { title, content, tags, files } = values;
    let lang: string = "pa";
    const detectedLanguage = detectLanguage(title);

    if (detectedLanguage === "en") {
      lang = "en";
    } else if (detectedLanguage === "da") {
      lang = "da";
    }

    tags = tags.map((option: any) => {
      return {
        id: option.value,
        name: option.label,
      };
    });

    if (!context?.jwt) {
      setIsLoading(false);
      toast(dictionary['notify'].sign_in_first, {
        hideProgressBar: true,
        autoClose: 2000,
        type: "error",
      });
    } else {
      let userId = context?.jwt?.id;
      let accessToken = context?.jwt?.accessToken;
      Takhnik.discussions
        .create({ title, content, tags, userId, lang }, accessToken)
        .then((res: any) => {
          if (files.length > 1) {
            let formData = new FormData();
            formData.append("id", res.data.id);
            formData.append("entity", "Discussions");
            for (let i = 0; i < files.length; i++) {
              formData.append("files", files[i]);
            }

            Takhnik.files.uploadFiles(formData, accessToken);
          }
          toast(dictionary['notify'].discussion_added_ok, {
            hideProgressBar: true,
            autoClose: 2000,
            type: "success",
          });
          setIsLoading(false);
          router.push(`/${lang}/question/${res.data.id}`);
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

      //To route to detail view of new quesition create.
    }
    setSubmitting(false);
  };

  useEffect(() => {
    if (context?.user) {
      setUser(context?.user);
    } else {
      setUser(null);
    }
    router.refresh();
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          {user && !user.isUserVerified && userVerifiedWarning && (
            <div className="bg-yellow-400 w-full flex rounded-md">
              <Label className="flex justify-center items-center w-full text-lg font-bold">
                {dictionary["main"].verify_email}
              </Label>
              <Button
                variant={"ghostNonHover"}
                onClick={() => setUserVerifiedWarning(false)}
              >
                <Icons.X />
              </Button>
            </div>
          )}

          <div className="px-4 py-3 md:justify-start">
            <PageHeader title={dictionary["main"].ask_question} size={"sm"} />
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="relative p-6 flex">
                <div className="flex justify-center items-center pr-3">
                  <Icons.Pilcrow className="w-6 h-6" />
                </div>
                <div className="relative flex-auto">
                  <Field as={Input} name="title" placeholder={dictionary["main"].title} />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className="text-red-500 text-xs"
                  />
                </div>
              </div>
              <div className="relative p-6 flex">
                <div className="flex justify-center items-center pr-3">
                  <Icons.Pilcrow className="w-6 h-6" />
                </div>
                <div className="relative flex-auto border-2 border-grey-500 rounded">
                  <div className="relative">
                    <Field name="files">
                      {({
                        form,
                        field,
                      }: {
                        form: FormikProps<FormValues>;
                        field: FieldInputProps<FormValues>;
                      }) => (
                        <div className="relative">
                          <label
                            htmlFor="button2"
                            title="Click to upload"
                            className="cursor-pointer flex items-center gap-4 px-6 py-4"
                          >
                            <div className="w-max relative">
                              <Icons.Paperclip />
                            </div>
                            <div className="relative">
                              <span className="block text-base font-semibold relative text-blue-900 dark:text-white group-hover:text-blue-500">
                              {dictionary["main"].upload_files}
                              </span>
                            </div>
                          </label>
                          <input
                            type="file"
                            name="button2"
                            id="button2"
                            hidden
                            multiple // Allow multiple file selection
                            accept="image/*,.pdf" // Specify accepted file types
                            onChange={(e) => {
                              if (e.target.files) {
                                const filesArray = Array.from(e.target.files);
                                const allowedFileTypes = [
                                  "image/jpeg",
                                  "image/png",
                                  "application/pdf",
                                ];
                                const filteredFiles = filesArray.filter(
                                  (file) => allowedFileTypes.includes(file.type)
                                );
                                form.setFieldValue(field.name, filteredFiles);
                                form.setFieldTouched(field.name, true);
                              } else {
                                form.setFieldValue(field.name, []);
                                form.setFieldTouched(field.name, true);
                              }
                            }}
                          />
                          {Array.isArray(form.values.files) &&
                            form.values.files.length > 0 && (
                              <div className="mt-2 z-50 bg-gray-100 p-2">
                                <h3>{dictionary["main"].uploaded_files}</h3>
                                <ul className="flex justify-start items-start">
                                  {form.values.files.map((file, index) => (
                                    <li key={index}>
                                      {file.name},
                                      {file.type.includes("image/") && (
                                        <img
                                          src={URL.createObjectURL(file)}
                                          alt={file.name}
                                          className="w-20 h-20"
                                        />
                                      )}
                                    </li>
                                  ))}
                                </ul>
                                <button
                                  type="button"
                                  className="text-red-500 text-xs underline mt-2"
                                  onClick={() => {
                                    form.setFieldValue(field.name, []);
                                    form.setFieldTouched(field.name, true);
                                  }}
                                >
                                  {dictionary["main"].clear_files}
                                </button>
                              </div>
                            )}
                        </div>
                      )}
                    </Field>
                    <ErrorMessage
                      name="files"
                      component="div"
                      className="text-red-500 text-xs"
                    />
                  </div>
                  <Field
                    as={Textarea}
                    name="content"
                    placeholder={dictionary["main"].enter_content}
                    className="py-2 px-4 h-40 sm:h-56 lg:h-64 resize-none border-2 border-t-gray-500"
                  />
                  <ErrorMessage
                    name="content"
                    component="div"
                    className="text-red-500 text-xs pt-2"
                  />
                </div>
              </div>
              <div className="relative p-6 flex">
                <div className="flex justify-center items-center pr-3">
                  <Icons.Tag className="w-6 h-6" />
                </div>
                <div className="relative flex-auto">
                  <Field
                    as={MultiSelect}
                    name="tags"
                    options={tags} // Provide your tag options here
                    label={dictionary["main"].add_tags}
                    placeHolder={dictionary["main"].add_tags}
                  />
                  <ErrorMessage
                    name="tags"
                    component="div"
                    className="text-red-500 text-xs pt-2"
                  />
                </div>
              </div>
              <div className="flex items-center justify-start mt-10 p-6">
                {user && (
                  <Button type="submit" disabled={!user?.isUserVerified}>
                    <Icons.Send /> {dictionary["main"].ask}
                  </Button>
                )}
              </div>
            </Form>
          </Formik>
        </div>
      )}
    </div>
  );
};

export default QuestionForm;
