import { FC, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Textarea from "../ui/Textarea";
import { Button } from "../ui/Button";
import Takhnik from "@/services/api";
import AuthContext from "../context/AuthContext";
import { toast } from "react-toastify";
import { detectLanguage } from "../utils/DetectLanguage";

interface CommentFormProps {
  toggleState: any;
  discussionId: any;
  answerId: any;
  setDiscussionState: any;
  lang: string;
  dictionary: any;
}



const CommentForm: FC<CommentFormProps> = ({
  toggleState,
  discussionId,
  answerId,
  setDiscussionState,
  lang,
  dictionary,
}) => {
  const validationSchema = Yup.object({
    content: Yup.string().required(dictionary['validation'].content_required),
  });

  const context = useContext(AuthContext);
  const initialValues = {
    content: "",
  };

  const handleSubmit = (values: any, { setSubmitting }: any) => {
    const { content } = values;
    const userId = context?.jwt?.id;
    const accessToken = context?.jwt?.accessToken;
    let lang: string = "pa";
    const detectedLanguage = detectLanguage(content);

    if (detectedLanguage === "en") {
      lang = "en";
    } else if (detectedLanguage === "da") {
      lang = "da";
    }

    Takhnik.comments
      .create({ content, userId, answerId, lang }, accessToken)
      .then(() => {
        toggleState(false);
        Takhnik.discussions.retrieve(discussionId).then((res) => {
          setDiscussionState(res.data);
        });
        toast(dictionary['notify'].comment_added_ok, {
          hideProgressBar: true,
          autoClose: 2000,
          type: "success",
        });
      });
    // Handle form submission here
    console.log(values, "Here");
    setSubmitting(false);
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex w-full">
          <div className="p-3 flex-col w-[90%]">
            <Field
              as={Textarea}
              name="content"
              placeholder={dictionary["main"].enter_comment}
              className="py-2 px-4 h-20 sm:h-15 lg:h-20 resize-none border-2 border-b-gray-500"
            />
            <ErrorMessage
              name="content"
              component="div"
              className="text-red-500 text-xs pt-2"
            />
          </div>
          <div className="flex-col space-y-1 p-2">
            <div className="flex justify-center">
              <Button type="submit" className="bg-pink-600">
                {" "}
                {dictionary["main"].add}
              </Button>
            </div>
            <div className="flex justify-center">
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

export default CommentForm;
