"use client";

import { FC, useContext, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PageHeader from "../ui/PageHeader";
import Input from "../ui/Input";
import { Button } from "../ui/Button";
import Label from "../ui/Label";
import Link from "next/link";
import AuthContext from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { Locale } from "@/i18n-config";
import LoadingSpinner from "../ui/LoadingSpinner";

// import { signIn, signOut, useSession } from "next-auth/react";

interface SignInFormProps {
  lang: Locale;
  dictionary: any;
}

const SignInForm: FC<SignInFormProps> = ({ lang, dictionary }) => {
  const validationSchema = Yup.object({
    username: Yup.string().required(dictionary['validation'].username_required),
    password: Yup.string().min(4).required(dictionary['validation'].password_required),
  });

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const context = useContext(AuthContext);

  if (context?.user) {
    // router.back();
    router.push(`/${lang}`);
  }
  const initialValues = {
    username: "",
    password: "",
  };

  const handleSubmit = async (data: any, { setSubmitting }: any) => {
    setIsLoading(true);
    context?.login(data.username, data.password);
    setIsLoading(false);
    if (context?.user) {
      router.push(`/${lang}`);
    }
    setSubmitting(false);
  };

  // useEffect(() => {
  //   router.push("/");
  // }, [context?.user]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Form>
          <div className="justify-center">
            <div className="flex py-20 justify-center">
              <PageHeader
                title={dictionary["headers"].sign_in}
                size={"xs"}
                className="text-gray-600"
              />
            </div>
            <div className="relative p-6 flex-auto">
              <Field
                as={Input}
                name="username"
                placeholder={dictionary["main"].username}
                label={dictionary["main"].username}
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>
            <div className="relative p-6 flex-auto">
              <Field
                as={Input}
                name="password"
                type="password"
                placeholder={dictionary["main"].password}
                label={dictionary["main"].password}
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>
            <div className="flex items-center justify-center mt-3 p-6 rounded-b">
              <Button type="submit">{dictionary["headers"].sign_in}</Button>
            </div>
            <div className="flex items-center justify-center p-6 rounded-b">
              <Link href={`/${lang}/sign_up`} className="px-3">
                <Label className="text-blue-500 hover:cursor-pointer">
                  {dictionary["headers"].sign_up}
                </Label>
              </Link>
              <div className="w-1 h-1 bg-black rounded-full"></div>
              <Link href={`/${lang}/forgot_pass`} className="px-3">
                <Label className="text-blue-500 hover:cursor-pointer">
                  {dictionary["main"].forgotten_pass}
                </Label>
              </Link>
            </div>
            <div className="flex items-center justify-center mt-3 p-6 rounded-b">
              <Label className="text-gray-700">
              {dictionary["main"].sign_in_agree}
              </Label>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
