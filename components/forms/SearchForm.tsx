"use client";

import { FC, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Input from "../ui/Input";
import { Button } from "../ui/Button";
import Icons from "../Icons";
import Takhnik from "@/services/api";
import { Locale } from "@/i18n-config";

interface SearchFormProps {
  setState?: any;
  lang: Locale;
  dictionary: any;
  model: "discussions" | "members" | "moderators" | "tags" | "reportTypes" | "reports";
}

const validationSchema = Yup.object({
  content: Yup.string(),
});

const SearchForm: FC<SearchFormProps> = ({ setState, model, lang, dictionary }) => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const initialValues = {
    content: "",
  };

  const handleSearch = (search: string) => {
    if (model === "discussions") {
      Takhnik.discussions.querySearch(`title=${search}`).then((res) => {
        setState(res.data);
      });
    } else if (model === "moderators") {
      Takhnik.users.querySearchModerators(`name=${search}`).then((res) => {
        setState(res.data);
      });
    } else if (model === "members") {
      Takhnik.users.querySearchMembers(`name=${search}`).then((res) => {
        setState(res.data);
      });
    } else if (model === "tags") {
      Takhnik.tags.querySearch(`name=${search}`).then((res) => {
        setState(res.data);
      });
    } else if (model === "reportTypes") {
      Takhnik.reportTypes.querySearch(`name=${search}`).then((res) => {
        setState(res.data);
      });
    } else if (model === "reports") {
      Takhnik.reports.querySearch(`content=${search}`).then((res) => {
        setState(res.data);
      });
    }
  };

  const handleSubmit = (values: any, { setSubmitting }: any) => {
    handleSearch(`${values.content}`);
  };

  const handleClear = (resetForm: Function) => {
    resetForm();
    setShowSearchInput(false);
    handleSearch("");
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ resetForm }) => (
          <Form className="flex w-full justify-end">
            {showSearchInput && (
              <>
                <div className="p-3 flex-col w-full px-3 mt-3">
                  <div className="relative flex-auto">
                    <Field
                      as={Input}
                      name="content"
                      placeholder={dictionary["main"].search_here}
                      clearIcon
                      cleanStateToggle={() => handleClear(resetForm)}
                      lang={lang}
                    />
                    <ErrorMessage
                      name="content"
                      component="div"
                      className="text-red-500 text-xs"
                    />
                  </div>
                </div>

                <div className="flex p-2">
                  <div className="flex items-center justify-center">
                    <Button type="submit" className="bg-blue-600">
                      <Icons.Search />
                    </Button>
                  </div>
                </div>
              </>
            )}
            {!showSearchInput && (
              <div className="flex p-2">
                <div className="flex items-center justify-center">
                  <Button
                    type="submit"
                    variant={"ghost"}
                    onClick={() => setShowSearchInput(true)}
                  >
                    <Icons.Search />
                  </Button>
                </div>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearchForm;
