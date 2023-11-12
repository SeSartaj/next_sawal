"use client";

import { FC } from "react";
import Paragraph from "../ui/Paragragh";
import RelativeTime from "@/utils/RelativeTime";
import BadgeCard from "./BadgeCard";
import Icons from "../Icons";
import defaultImg from "@/public/default.png";
import Image from "next/image";
import Link from "next/link";
import Report from "../Report";

interface QuestionsCardProps {
  discussion: any;
  lang: string;
  dictionary: any;
  reportOption: any;
  highLightTagId?: string;
  dir: string;
}

const QuestionsCard: FC<QuestionsCardProps> = ({
  discussion,
  lang,
  dictionary,
  reportOption,
  highLightTagId,
  dir,
}) => {
  const { id, title, content, user, viewCount, answerCount, createdAt, tag } =
    discussion;

  return (
    <div className="flex rounded overflow-hidden shadow-md" dir={dir}>
      <div className="flex flex-col md:flex-row lg:flex-row w-[75%]">
        <div className="flex flex-row lg:flex-col md:flex-col space-x-2 lg:space-y-2 md:space-y-2 px-6 py-2 justify-center">
          <div className="flex bg-yellow-100 shadow-sm overflow-hidden rounded px-2">
            <div>
              <Paragraph size={"sm"} className="text-xs px-1">
                {answerCount}
              </Paragraph>
            </div>
            <div>
              {" "}
              <Paragraph size={"sm"} className="text-xs">
                {dictionary["main"].answers}
              </Paragraph>
            </div>
          </div>
          <div className="flex border shadow-sm overflow-hidden rounded px-2">
            <div>
              <Paragraph size="sm" className="text-xs px-1">
                {viewCount}
              </Paragraph>
            </div>
            <div>
              <Paragraph size="sm" className="text-xs">
                {dictionary["main"].views}
              </Paragraph>
            </div>
          </div>
        </div>
        <div className="py-3 w-[100%] md:w-[75%] lg:w-[80%] space-y-2">
          <div className="text-xl text-blue-500 mb-2">
            <Link href={`/${lang}/question/${discussion.id}`}>
              <Paragraph className="text-left text-blue-500">{title}</Paragraph>
            </Link>
          </div>
          <Paragraph className="text-left" size={"sm"}>
            {content}
          </Paragraph>
          <span className="flex">
            {discussion.tags.map((tag: any) => (
              <div className="flex px-1" key={tag.id}>
                <BadgeCard
                  id={tag.id}
                  name={
                    lang === "pa"
                      ? tag.namePa
                      : lang === "da"
                      ? tag.nameDa
                      : tag.name
                  }
                  key={tag.id}
                  highLightTagId={highLightTagId}
                />
              </div>
            ))}
          </span>
        </div>
      </div>
      <div className="flex w-[25%] flex-col lg:px-6 md:px-6 justify-around">
        <div className="flex flex-col-reverse md:flex-row lg:flex-row w-full justify-between">
          <div className="flex justify-end md:justify-start lg:justify-start">
            {user?.file ? (
              <img
                src={`${process.env.NEXT_PUBLIC_TAKHNIK_BACKEND_URL}/files/${user.file.fileName}`}
                className="w-11 h-11 rounded-md"
                alt="Logo"
              />
            ) : (
              <Image
                src={defaultImg}
                alt={dictionary["main"].author_picture}
                className="w-11 h-11 rounded-md"
              />
            )}
          </div>
          <div className="flex-col w-[65%] justify-start truncate hidden md:hidden lg:block">
            <div>
              {user?.firstName} {user?.lastName}
            </div>
            <div className="flex h-7">
              {
                <BadgeCard
                  name={
                    user?.isModerator
                      ? dictionary["main"].moderator
                      : user?.isAdmin
                      ? dictionary["main"].administrator
                      : dictionary["main"].member
                  }
                  Icon={<Icons.Star fill="yellow" color="yellow" size={12} />}
                />
              }
            </div>
          </div>
          <div>
            <Report
              reportOption={reportOption}
              dictionary={dictionary}
              lang={lang}
              discussionId={id}
              key={id}
              dir={dir}
            />
          </div>
        </div>
        <div className="flex justify-center">
          {createdAt && (
            <RelativeTime
              timestamp={createdAt}
              lang={lang}
              dictionary={dictionary}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionsCard;
