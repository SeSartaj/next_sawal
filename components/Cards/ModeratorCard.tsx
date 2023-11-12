import { FC } from "react";
import Icons from "../Icons";
import RelativeTime from "@/utils/RelativeTime";
import defaultImg from "@/public/default.png";
import Image from "next/image";
import Link from "next/link";
import Paragraph from "../ui/Paragragh";

interface ModeratorCardProps {
  moderator: any;
  lang: string;
  dictionary: any;
}

const ModeratorCard: FC<ModeratorCardProps> = ({
  moderator,
  lang,
  dictionary,
}) => {
  return (
    <div className="flex rounded overflow-hidden shadow-md">
      <div>
        {moderator.file ? (
          <img
            className="rounded-md w-20 h-20 mb-1"
            src={`${process.env.NEXT_PUBLIC_TAKHNIK_BACKEND_URL}/files/${moderator.file.fileName}`}
            alt="jane avatar"
          />
        ) : (
          <Image
            src={defaultImg}
            alt="Picture of the author"
            className="rounded-md w-20 h-20 mb-1"
          />
        )}
      </div>
      <div className="flex justify-between flex-col w-[65%] pl-5 truncate">
        <div className="text-xl text-blue-500 mb-2">
          <Link href={`/${lang}/profile/${moderator.id}`}>
            <Paragraph size={"xs"} className="text-left text-blue-500">
              {moderator?.firstName} {moderator?.lastName}
            </Paragraph>
          </Link>
        </div>
        {moderator.createdAt && (
          <div className="flex justify-end pb-2 space-x-1 items-center">
            <Icons.Clock9 size={14} color="grey" />
            <RelativeTime
              timestamp={moderator.createdAt}
              lang={lang}
              dictionary={dictionary}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ModeratorCard;
