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
import Takhnik from "@/services/api";
import { getErrorMessage } from "../utils/ErrorMessage";
import PageHeader from "./PageHeader";
import Input from "./Input";
import { Button } from "./Button";

interface EditTagModelProps {
  tagId: any;
  tag: any;
  lang: string;
  dictionary: any;
  toggleModal: any;
  setTags: any;
}

interface FormValues {
  name: string;
  namePa: string;
  nameDa: string;
}

const EditTagModel: FC<EditTagModelProps> = ({
  tagId,
  tag,
  lang,
  dictionary,
  toggleModal,
  setTags,
}) => {
  const validationSchema = Yup.object({
    name: Yup.string().required(dictionary['validation'].english_name_required),
    namePa: Yup.string().required(dictionary['validation'].pashtu_name_required),
    nameDa: Yup.string().required(dictionary['validation'].pashtu_name_required),
  });

  const context = useContext(AuthContext);
  const initialValues = {
    name: tag.name,
    namePa: tag.namePa,
    nameDa: tag.nameDa
  };

  const handleSubmit = (values: any, { setSubmitting }: any) => {
    let { name, namePa, nameDa } = values;
    if (!context?.jwt) {
      toast(dictionary['notify'].sign_in_first, {
        hideProgressBar: true,
        autoClose: 2000,
        type: "error",
      });
    } else {
      let accessToken = context?.jwt?.accessToken;
      let id = tagId;
      Takhnik.tags
        .update({ id, name, namePa, nameDa }, accessToken)
        .then((res: any) => {
          toggleModal();

          toast(dictionary['notify'].tag_updated_ok, {
            hideProgressBar: true,
            autoClose: 2000,
            type: "success",
          });

          Takhnik.tags.querySearch("").then((res) => {
            setTags(res.data);
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
                    title={dictionary["main"].edit_tag}
                    size={"xs"}
                    className="text-gray-600 "
                  />
                </div>
                <div className="p-6 flex flex-col">
                  <div className="relative p-6 flex">
                    <div className="flex-1 flex-col">
                      <Field
                        as={Input}
                        name="name"
                        placeholder={dictionary["main"].name}
                        label={dictionary["main"].name}
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-red-500 text-xs"
                      />
                    </div>
                  </div>
                  <div className="relative p-6 flex">
                    <div className="flex-1 flex-col">
                      <Field
                        as={Input}
                        name="namePa"
                        placeholder={dictionary["main"].name_pa}
                        label={dictionary["main"].name_pa}
                      />
                      <ErrorMessage
                        name="namePa"
                        component="div"
                        className="text-red-500 text-xs"
                      />
                    </div>
                  </div>
                  <div className="relative p-6 flex">
                    <div className="flex-1 flex-col">
                      <Field
                        as={Input}
                        name="nameDa"
                        placeholder={dictionary["main"].name_da}
                        label={dictionary["main"].name_da}
                      />
                      <ErrorMessage
                        name="nameDa"
                        component="div"
                        className="text-red-500 text-xs"
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

export default EditTagModel;
