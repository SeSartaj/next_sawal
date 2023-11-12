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
import Icons from "../Icons";
import Input from "./Input";
import Textarea from "./Textarea";
import MultiSelect from "./MultiSelect";
import { Button } from "./Button";
import Paragraph from "./Paragragh";
import Takhnik from "@/services/api";
import { getErrorMessage } from "../utils/ErrorMessage";
import { detectLanguage } from "../utils/DetectLanguage";

interface EditDiscussionModelProps {
  discussion: any;
  lang: string;
  dictionary: any;
  tags: any;
  toggleModal: any;
  setDiscussion: any;
}

interface FormValues {
  title: string;
  content: string;
  tags: any;
}

const EditDiscussionModel: FC<EditDiscussionModelProps> = ({
  discussion,
  lang,
  dictionary,
  tags,
  toggleModal,
  setDiscussion,
}) => {
  const validationSchema = Yup.object({
    title: Yup.string().required(dictionary['validation'].title_required),
    content: Yup.string().required(dictionary['validation'].content_required),
    tags: Yup.array().min(1).required(dictionary['validation'].atleast_one_tag),
  });

  const discussionTagIds = discussion.tags.map((tag: any) => tag.id);
  const tagOptions = tags.filter(
    (tag: any) => !discussionTagIds.includes(tag.id)
  );

  const discussionTags =
    discussion.tags.map((tag: any) => {
      return {
        value: tag.id,
        label: tag.name,
      };
    }) || [];
  const context = useContext(AuthContext);
  const initialValues = {
    title: discussion.title,
    content: discussion.content,
    tags: discussionTags,
  };

  const handleSubmit = (values: any, { setSubmitting }: any) => {
    let { title, content, tags } = values;
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
      toast(dictionary['notify'].sign_in_first, {
        hideProgressBar: true,
        autoClose: 2000,
        type: "error",
      });
    } else {
      let editedUserId = context?.jwt?.id;
      let accessToken = context?.jwt?.accessToken;
      let id = discussion.id;
      Takhnik.discussions
        .update({ id, title, content, tags, editedUserId, lang }, accessToken)
        .then((res: any) => {
          toggleModal();
          Takhnik.discussions.retrieve(discussion.id).then((res) => {
            setDiscussion(res.data);
          });
          toast(dictionary['notify'].discussion_updated_ok, {
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
                    title="Edit Discussion"
                    size={"xs"}
                    className="text-gray-600 "
                  />
                </div>
                <div className="p-6 flex flex-col space-x-10">
                  <div className="p-6 flex">
                    <div className="flex justify-center items-center pr-3">
                      <Icons.Pilcrow className="w-6 h-6" />
                    </div>
                    <div className="flex-auto">
                      <Field as={Input} name="title" placeholder="Title" />
                      <ErrorMessage
                        name="title"
                        component="div"
                        className="text-red-500 text-xs"
                      />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col">
                    <div className="flex justify-start pr-3">
                      <Paragraph size={"sm"}>Content</Paragraph>
                    </div>
                    <div className="flex flex-col w-full">
                      <Field
                        as={Textarea}
                        name="content"
                        placeholder="Enter your content"
                        className="py-2 px-4 h-40 sm:h-56 lg:h-64 resize-none border-2 border-t-gray-500"
                      />
                      <ErrorMessage
                        name="content"
                        component="div"
                        className="text-red-500 text-xs pt-2"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-6 flex">
                  <div className="flex justify-center items-center pr-3">
                    <Icons.Tag className="w-6 h-6" />
                  </div>
                  <div className="flex-auto">
                    <Field
                      as={MultiSelect}
                      name="tags"
                      options={tagOptions} // Provide your tag options here
                      label="Select Tags"
                      placeHolder="Add Tags"
                    />
                    <ErrorMessage
                      name="tags"
                      component="div"
                      className="text-red-500 text-xs pt-2"
                    />
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

export default EditDiscussionModel;
