import { FC, useContext } from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikProps,
  FieldInputProps,
} from "formik";
import * as Yup from "yup";
import Icons from "../Icons";
import Textarea from "../ui/Textarea";
import { Button } from "../ui/Button";
import Takhnik from "@/services/api";
import AuthContext from "../context/AuthContext";
import { getErrorMessage } from "../utils/ErrorMessage";
import { toast } from "react-toastify";
import { detectLanguage } from "../utils/DetectLanguage";
import Image from "next/image";

interface AnswerFormProps {
  toggleState: any;
  discussionId: any;
  setDiscussionState: any;
  lang: string;
  dictionary: any;
}

interface FormValues {
  content: string;
  files: FileList | null;
}

const AnswerForm: FC<AnswerFormProps> = ({
  toggleState,
  discussionId,
  setDiscussionState,
  lang,
  dictionary,
}) => {
  const validationSchema = Yup.object({
    content: Yup.string().required(dictionary['validation'].content_required),
    files: Yup.array().nullable(),
  });

  const context = useContext(AuthContext);
  const initialValues = {
    content: "",
    files: [],
  };

  const handleSubmit = (values: any, { setSubmitting }: any) => {
    const userId = context?.jwt?.id;
    let accessToken = context?.jwt?.accessToken;
    const { content, files } = values;
    let lang: string = "pa";
    const detectedLanguage = detectLanguage(content);

    if (detectedLanguage === "en") {
      lang = "en";
    } else if (detectedLanguage === "da") {
      lang = "da";
    }

    Takhnik.answers
      .create({ content, userId, discussionId, lang }, accessToken)
      .then((res: any) => {
        if (files.length > 1) {
          let formData = new FormData();
          formData.append("id", res.data.id);
          formData.append("entity", "Answers");
          for (let i = 0; i < files.length; i++) {
            formData.append("files", files[i]);
          }

          Takhnik.files.uploadFiles(formData, accessToken);
        }
        toggleState(false);
        Takhnik.discussions.retrieve(discussionId).then((res) => {
          setDiscussionState(res.data);
        });
        toast(dictionary['notify'].answer_added_ok, {
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
    console.log(values, "Here");
    setSubmitting(false);
  };
  return (
    <div className="justify-center items-center flex-1">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="p-3 flex w-full">
            <div className="flex justify-center items-center pr-3">
              <Icons.Pilcrow className="w-6 h-6" />
            </div>
            <div className="relative flex-auto border-2 border-grey-500 rounded w-full">
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
                            const filteredFiles = filesArray.filter((file) =>
                              allowedFileTypes.includes(file.type)
                            );
                            form.setFieldValue(field.name, filteredFiles);
                            form.setFieldTouched(field.name, true);
                          } else {
                            form.setFieldValue(field.name, null);
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
                                form.setFieldValue(field.name, null);
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
          <div className="flex items-center justify-center mt-10 p-6 pb-40">
            <Button type="submit" className="bg-pink-600">
              <Icons.Send /> {dictionary["main"].add}
            </Button>
            <div className="flex px-1">
              <Button onClick={() => toggleState()}>
                {dictionary["main"].close}
              </Button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AnswerForm;
