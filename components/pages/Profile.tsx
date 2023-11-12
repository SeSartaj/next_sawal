import { FC } from "react";
import ProfileCard from "../Cards/ProfileCard";
import { Locale } from "@/i18n-config";

interface ProfileProps {
  user: any;
  lang: Locale;
  dictionary: any;
  useractivity: any;
  tagOptions: any;
  reportOption: any;
}

const Profile: FC<ProfileProps> = ({
  user,
  lang,
  dictionary,
  useractivity,
  tagOptions,
  reportOption,
}) => {
  return (
    <div className="flex justify-between mx-auto lg:max-w-7xl md:justify-start md:px-8">
      <ProfileCard
        userDetails={user}
        lang={lang}
        dictionary={dictionary}
        useractivity={useractivity}
        tagOptions={tagOptions}
        reportOption={reportOption}
      />
    </div>
  );
};

export default Profile;
