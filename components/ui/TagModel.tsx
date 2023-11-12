import { FC, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PageHeader from "./PageHeader";
import { Button } from "./Button";
import Icons from "../Icons";
import MultiSelect from "./MultiSelect";
import Takhnik from "@/services/api";
import { useRouter } from "next/navigation";
import AuthContext from "../context/AuthContext";
import { toast } from "react-toastify";
import { Locale } from "@/i18n-config";
import { getErrorMessage } from "../utils/ErrorMessage";

interface TagModalProps {
  lang: Locale;
  dictionary: any;
  toggleModal: any;
  tags: any;
  tagOptions: any;
  setState: any;
  moderatorId: any;
}

const TagModal: FC<TagModalProps> = ({
  toggleModal,
  tags,
  tagOptions,
  lang,
  dictionary,
  setState,
  moderatorId,
}) => {
  const validationSchema = Yup.object({
    tags: Yup.array().min(1).required(dictionary['validation'].atleast_one_tag),
  });

  const router = useRouter();
  const context = useContext(AuthContext);
  const initialValues = {
    tags: [],
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
    let { tags } = values;
    tags = tags.map((option: any) => {
      return {
        id: option.value,
        name: option.label,
      };
    });
    const accessToken = context?.jwt?.accessToken;
    Takhnik.users
      .addTagsToModerator(moderatorId, { tags }, accessToken)
      .then((): void => {
        Takhnik.users.retrieve(moderatorId).then((res) => {
          setState(res.data);
        });
        toast(dictionary['notify'].tag_added_to_mod, {
          hideProgressBar: true,
          autoClose: 2000,
          type: "success",
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
    // Handle form submission here
    console.log(values, "Here");
    setSubmitting(false);
  };

  const tagsOption = tagOptions.filter((tag: any) => {
    return !tags.some((t: any) => t.id.toString() === tag.value);
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <>
          <div className="fixed inset-0 z-50 flex items-start justify-center mt-10 overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative lg:w-[35%] md:w-[50%] w-full my-6 max-w-3xl sm:">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 rounded-t">
                  <PageHeader
                    title="Add Tags"
                    size={"xs"}
                    className="text-gray-600 "
                  />
                </div>
                <div className="relative p-6 flex">
                  <div className="flex justify-center items-center pr-3">
                    <Icons.Tag className="w-6 h-6" />
                  </div>
                  <div className="relative flex-auto">
                    <Field
                      as={MultiSelect}
                      name="tags"
                      options={tagsOption} // Provide your tag options here
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
                  <Button type="submit">{dictionary["main"].add}</Button>
                  <Button onClick={toggleModal} variant={"link"}>
                    {dictionary["main"].close}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="fixed inset-0 z-40 bg-black opacity-25"
            onClick={toggleModal}
          ></div>
        </>
      </Form>
    </Formik>
  );
};

export default TagModal;
