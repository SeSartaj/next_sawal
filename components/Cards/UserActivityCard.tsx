import { FC } from "react";
import Paragraph from "../ui/Paragragh";
import RelativeTime from "../utils/RelativeTime";

interface UserActivityCardProps {
  activity: any;
  discussion: boolean;
  lang: string;
  dictionary: any;
}

const UserActivityCard: FC<UserActivityCardProps> = ({
  activity,
  discussion,
  lang,
  dictionary,
}) => {
  return (
    <div
      className="flex rounded overflow-hidden shadow-md"
      dir={activity.lang ? (activity.lang == "en" ? "ltr" : "rtl") : "ltr"}
    >
      {discussion && (
        <div className="flex flex-col space-y-2 px-6 py-2 justify-center">
          <div className="flex space-x-2 justify-center border bg-yellow-100 shadow-sm overflow-hidden rounded px-2">
            <div>
              <Paragraph size={"sm"} className="text-xs">
                {activity.answerCount}
              </Paragraph>
            </div>
            <div>
              {" "}
              <Paragraph size={"sm"} className="text-xs">
                {dictionary["main"].answers}
              </Paragraph>
            </div>
          </div>
          <div className="flex space-x-2 justify-center border shadow-sm overflow-hidden rounded px-2">
            <div>
              <Paragraph size="sm" className="text-xs">
                {activity.viewCount}
              </Paragraph>
            </div>
            <div>
              <Paragraph size="sm" className="text-xs">
                {dictionary["main"].views}
              </Paragraph>
            </div>
          </div>
        </div>
      )}
      <div className="py-3 px-3 w-[65%] space-y-2">
        <div className="text-xl text-blue-500 mb-2">
          <Paragraph className="text-left">
            {discussion ? activity.title : activity.discussionTitle}
          </Paragraph>
        </div>
        <Paragraph className="text-left" size={"sm"}>
          {activity.content}
        </Paragraph>
      </div>
      <div className="flex w-[25%] flex-col px-6 py-2 justify-end">
        <div className="flex justify-end">
          {activity.createdAt && (
            <RelativeTime
              timestamp={activity.createdAt}
              lang={lang}
              dictionary={dictionary}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserActivityCard;
