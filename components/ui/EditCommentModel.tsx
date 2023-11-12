import { FC, useContext } from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from "formik";
import * as Yup from "yup";
import AuthContext from "../context/AuthContext";
import { toast } from "react-toastify";
import PageHeader from "./PageHeader";
import Textarea from "./Textarea";
import { Button } from "./Button";
import Paragraph from "./Paragragh";
import Takhnik from "@/services/api";
import { getErrorMessage } from "../utils/ErrorMessage";
import { detectLanguage } from "../utils/DetectLanguage";

interface EditCommentModelProps {
  comment: any;
  lang: string;
  dictionary: any;
  toggleModal: any;
  setDiscussion: any;
  discussionId: string;
}

interface FormValues {
  content: string;
}

const EditCommentModel: FC<EditCommentModelProps> = ({
  comment,
  lang,
  dictionary,
  toggleModal,
  setDiscussion,
  discussionId,
}) => {
  const validationSchema = Yup.object({
    content: Yup.string().required(dictionary['validation'].content_required),
  });

  const context = useContext(AuthContext);
  const initialValues = {
    content: comment.content,
  };

  const handleSubmit = (values: any, { setSubmitting }: any) => {
    let { content } = values;
    let lang: string = "pa";
    const detectedLanguage = detectLanguage(content);

    if (detectedLanguage === "en") {
      lang = "en";
    } else if (detectedLanguage === "da") {
      lang = "da";
    }
    if (!context?.jwt) {
      toast(dictionary['notify'].sign_in_first, {
        hideProgressBar: true,
        autoClose: 2000,
        type: "error",
      });
    } else {
      let editedUserId = context?.jwt?.id;
      let accessToken = context?.jwt?.accessToken;
      let id = comment.id;
      Takhnik.comments
        .update({ id, content, editedUserId, lang }, accessToken)
        .then((res: any) => {
          toggleModal();
          Takhnik.discussions.retrieve(discussionId).then((res) => {
            setDiscussion(res.data);
          });
          toast(dictionary['notify'].comment_updated_ok, {
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

      //To route to detail view of new quesition create.
    }
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
          <div className="modal-background">
            <div className="relative lg:w-[35%] md:w-[50%] w-full my-6 max-w-3xl sm:">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 rounded-t">
                  <PageHeader
                    title={dictionary["main"].edit_comment}
                    size={"xs"}
                    className="text-gray-600 "
                  />
                </div>
                <div className="p-6 flex flex-col space-x-10">
                  <div className="p-6 flex flex-col">
                    <div className="flex justify-start pr-3">
                      <Paragraph size={"sm"}>{dictionary["main"].content}</Paragraph>
                    </div>
                    <div className="flex flex-col w-full">
                      <Field
                        as={Textarea}
                        name="content"
                        placeholder={dictionary["main"].enter_content}
                        className="py-2 px-4 h-24 sm:h-36 lg:h-40 resize-none border-2 border-t-gray-500"
                      />
                      <ErrorMessage
                        name="content"
                        component="div"
                        className="text-red-500 text-xs pt-2"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center mt-10 p-6 border-t space-x-2 border-solid border-gray-200 rounded-b">
                  <Button type="submit">{dictionary["main"].update}</Button>
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

export default EditCommentModel;
