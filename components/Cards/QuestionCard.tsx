"use client";

import { FC, useContext, useEffect, useState } from "react";
import ReportModal from "../ui/ReportModal";
import Label from "../ui/Label";
import { Tag } from "./ProfileCard";
import BadgeCard from "./BadgeCard";
import Icons from "../Icons";
import PageHeader from "../ui/PageHeader";
import AnswerCard from "./AnswerCard";
import AnswerForm from "../forms/AnswerForm";
import { Button } from "../ui/Button";
import RelativeTime from "@/utils/RelativeTime";
import defaultImg from "@/public/default.png";
import Image from "next/image";
import Takhnik from "@/services/api";
import FileDisplay from "../FileDisplay";
import { Users } from "@/models/global";
import AuthContext from "../context/AuthContext";
import Alert from "../ui/Alert";
import { toast } from "react-toastify";
import { getErrorMessage } from "../utils/ErrorMessage";
import EditDiscussionModel from "../ui/EditDiscussionModel";
import IconsBar from "../ui/IconsBar";
import { useRouter } from "next/navigation";

interface QuestionCardProps {
  discussionDetails: any;
  lang: string;
  dictionary: any;
  reportOption: any;
  tags: any;
}

async function sortAnswersByLikes(discussion: any) {
  return new Promise((resolve, reject) => {
    try {
      discussion.answers.sort((a: any, b: any) => {
        const likesA = a.votes.filter((vote: any) => vote.like).length;
        const likesB = b.votes.filter((vote: any) => vote.like).length;
        return likesB - likesA;
      });

      if (discussion.answers.length > 0) {
        const mostLikedAnswer = discussion.answers[0];
        const mostLikes = mostLikedAnswer.votes.filter(
          (vote: any) => vote.like
        ).length;

        if (mostLikes > 0) {
          mostLikedAnswer.bestAnswer = true;
        }
      }

      resolve(discussion.answers);
    } catch (error) {
      reject(error);
    }
  });
}

const QuestionCard: FC<QuestionCardProps> = ({
  discussionDetails,
  lang,
  dictionary,
  reportOption,
  tags,
}) => {
  const router = useRouter();
  const context = useContext(AuthContext);
  const [user, setUser] = useState<Users | null>();
  const [discussion, setDiscussion] = useState<any>(discussionDetails);
  const [answers, setAnswers] = useState<any>([]);
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isDiscussionMenuOpen, setIsDiscussionMenuOpen] = useState(false);
  const [answerOpen, setAnswerOpen] = useState(false);
  const [openDiscussionLockAlert, setOpenDiscussionLockAlert] = useState(false);
  const [openDiscussionUnlockAlert, setOpenDiscussionUnlockAlert] =
    useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState(false);
  const [editDiscussionModalOpen, setEditDiscussionModalOpen] = useState(false);

  const images = discussion?.files?.filter(
    (file: any) => file.fileType === "Image"
  );
  const attachments = discussion?.files?.filter(
    (file: any) => file.fileType === "Attachments"
  );

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const toggleDiscussionMenu = () => {
    setIsDiscussionMenuOpen(!isDiscussionMenuOpen);
  };

  const toggleEditDiscussionModal = () => {
    if (isDiscussionMenuOpen) toggleDiscussionMenu();
    setEditDiscussionModalOpen(!editDiscussionModalOpen);
  };

  const toggleReportModal = () => {
    if (reportModalOpen) toggleUserMenu();
    setReportModalOpen(!reportModalOpen);
  };
  const toggleAnswer = () => {
    setAnswerOpen(!answerOpen);
  };

  const chunkArray = (arr: any[], size: number) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += size) {
      const chunk = arr.slice(i, i + size);
      chunkedArray.push(chunk);
    }
    return chunkedArray;
  };
  const tagRows = chunkArray(discussion.tags, 3);

  const moderatorIsEligible: () => boolean = () => {
    const tags = discussion.tags;
    const userTags = context?.user?.tags;

    if (tags && userTags) {
      for (const tag of tags) {
        if (userTags.some((userTag: any) => userTag.id === tag.id)) {
          return true;
        }
      }
    }

    return false;
  };

  const handleLockDiscussion = () => {
    const accessToken = context?.jwt?.accessToken;
    Takhnik.discussions
      .lockDiscussion(discussion.id, accessToken)
      .then(async (res) => {
        setOpenDiscussionLockAlert(false);
        await Takhnik.discussions.retrieve(discussion.id).then((res) => {
          setDiscussion(res.data);
        });

        toast(dictionary['notify'].discussion_lock_ok, {
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
  };

  const handleUnlockDiscussion = () => {
    const accessToken = context?.jwt?.accessToken;
    Takhnik.discussions
      .unlockDiscussion(discussion.id, accessToken)
      .then(async (res) => {
        setOpenDiscussionUnlockAlert(false);
        await Takhnik.discussions.retrieve(discussion.id).then((res) => {
          setDiscussion(res.data);
        });

        toast(dictionary['notify'].discussion_unlock_ok, {
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
  };

  const handleDelete = () => {
    const accessToken = context?.jwt?.accessToken;
    Takhnik.discussions
      .delete(discussion.id, accessToken)
      .then(async (res) => {
        setOpenDeleteAlert(false);
        toast(dictionary['notify'].discussion_deleted_ok, {
          hideProgressBar: true,
          autoClose: 2000,
          type: "success",
        });
        router.push(`/${lang}/questions`);
      })
      .catch((error): void => {
        console.error(getErrorMessage(error));
        toast(getErrorMessage(error), {
          hideProgressBar: true,
          autoClose: 2000,
          type: "error",
        });
      });
  };

  useEffect(() => {
    if (context?.user) {
      setUser(context?.user);
    } else {
      setUser(null);
    }
  }, []);

  useEffect(() => {
    sortAnswersByLikes(discussion)
      .then((sortedAnswers) => {
        setAnswers(sortedAnswers);
      })
      .catch((error) => {
        console.error("Error sorting answers:", error);
      });
  }, [discussion]);

  return (
    <>
      <div className="flex w-full flex-col md:flex-row lg:flex-row pt-8">
        <div className="flex flex-col w-full pb-5 px-5 md:w-[70%] lg:w-[70%]">
          <div className="flex flex-col">
            {discussion.answers.length > 0 && (
              <div className="w-full justify-between flex pb-1">
                <PageHeader
                  title={dictionary["main"].answered}
                  size={"xxs"}
                  className="text-gray-400"
                />
                {discussion.isLocked && (
                  <PageHeader
                    title={dictionary["notify"].discussion_locked}
                    size={"xxs"}
                    className="text-gray-400"
                  />
                )}
              </div>
            )}
            <div className="w-full justify-between flex border-b-2 mb-6 pb-1">
              <PageHeader
                title={discussion.title}
                size={"xs"}
                className="text-gray-600 w-full"
              />
              {user && (moderatorIsEligible() || user.isAdmin) && (
                <div className="relative inline-block text-left">
                  <IconsBar toggleMenu={toggleDiscussionMenu} />
                  <div
                    className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
                      isDiscussionMenuOpen ? "" : "hidden"
                    }`}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                  >
                    <div className="py-1" role="none">
                      {!discussion.isLocked && !user.isAdmin && (
                        <a
                          href="#"
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          id="menu-item-0"
                          onClick={toggleEditDiscussionModal}
                        >
                          {dictionary["main"].edit}
                        </a>
                      )}
                      {!discussion.isLocked && !user.isAdmin && (
                        <a
                          href="#"
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          id="menu-item-0"
                          onClick={() => setOpenDiscussionLockAlert(true)}
                        >
                          {dictionary["main"].lock}
                        </a>
                      )}
                      {discussion.isLocked && !user.isAdmin && (
                        <a
                          href="#"
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          id="menu-item-0"
                          onClick={() => setOpenDiscussionUnlockAlert(true)}
                        >
                          {dictionary["main"].unlock}
                        </a>
                      )}
                      {user.isAdmin && (
                        <a
                          href="#"
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          id="menu-item-0"
                          onClick={() => setOpenDeleteAlert(true)}
                        >
                          {dictionary["main"].delete}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="w-full flex">
              {discussion.content}
              <Alert
                alertTitle="Lock Question?"
                alertMessage={`Are you sure you want to Lock this question?`}
                open={openDiscussionLockAlert}
                setOpen={setOpenDiscussionLockAlert}
                handleYes={handleLockDiscussion}
              />
              <Alert
                alertTitle="Unlock Question?"
                alertMessage={`Are you sure you want to Unlock this question?`}
                open={openDiscussionUnlockAlert}
                setOpen={setOpenDiscussionUnlockAlert}
                handleYes={handleUnlockDiscussion}
              />
              <Alert
                alertTitle="Delete Question?"
                alertMessage={`Are you sure you want to Delete this question?`}
                open={openDeleteAlert}
                setOpen={setOpenDeleteAlert}
                handleYes={handleDelete}
              />
            </div>
            <div className="flex flex-col space-y-1 w-full">
              <div className="flex">
                {attachments.map((file: any) => (
                  <FileDisplay key={file.id} file={file} />
                ))}
              </div>
              <div className="flex flex-wrap space-x-1">
                {images.map((file: any) => (
                  <FileDisplay key={file.id} file={file} />
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-end p-2">
            <div>
              {discussion?.user?.file ? (
                <img
                  src={`${process.env.NEXT_PUBLIC_TAKHNIK_BACKEND_URL}/files/${discussion.user?.file?.fileName}`}
                  className="w-11 h-11 rounded-md"
                  alt="Logo"
                />
              ) : (
                <Image
                  src={defaultImg}
                  alt="Picture of the author"
                  className="w-11 h-11 rounded-md"
                />
              )}
            </div>
            <div className="flex-col w-[20%] justify-start px-2">
              <div>
                {discussion.user?.firstName} {discussion.user?.lastName}
              </div>
            </div>
            <div>
              <div className="relative inline-block text-left">
                <IconsBar toggleMenu={toggleUserMenu} />
                <div
                  className={`absolute ${discussion.lang ? discussion.lang == "en" ? "right-0": "left-0" : "right-0"} z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
                    isUserMenuOpen ? "" : "hidden"
                  }`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  <div className="py-1" role="none">
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      id="menu-item-0"
                      onClick={toggleReportModal}
                    >
                      {dictionary["main"].report}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {discussion.editedUser && (
            <div className="flex justify-end p-2">
              <div>
                {discussion?.editedUser?.file ? (
                  <img
                    src={`${process.env.NEXT_PUBLIC_TAKHNIK_BACKEND_URL}/files/${discussion.editedUser?.file?.fileName}`}
                    className="w-11 h-11 rounded-md"
                    alt="Logo"
                  />
                ) : (
                  <Image
                    src={defaultImg}
                    alt="Picture of the author"
                    className="w-11 h-11 rounded-md"
                  />
                )}
              </div>
              <div className="flex-col w-[20%] justify-start px-2 mr-5">
                <div>{dictionary["main"].edited_by}</div>
                <div className="flex w-full">
                  {discussion.editedUser?.lastName}
                </div>
              </div>
            </div>
          )}

          {reportModalOpen && (
            <>
              <ReportModal
                toggleModal={toggleReportModal}
                reportOption={reportOption}
                discussionId={discussion.id}
                lang={lang}
                dictionary={dictionary}
                dir={
                  discussion.lang
                    ? discussion.lang == "en"
                      ? "ltr"
                      : "rtl"
                    : "ltr"
                }
              />
            </>
          )}
        </div>
        <div className="flex flex-col rounded overflow-hidden shadow-md px-3 py-5 space-y-2">
          <div>
            {discussion.viewCount}
            <Label className="font-bold"> {dictionary["main"].views} </Label>
          </div>
          <div>
            {discussion.answerCount}
            <Label className="font-bold"> {dictionary["main"].answers} </Label>
          </div>
          <div className="flex items-center space-x-1">
            <Icons.Clock9 size={14} color="grey" />
            <RelativeTime
              timestamp={discussion.createdAt}
              lang={lang}
              dictionary={dictionary}
            />
          </div>
          <span>{dictionary["headers"].tags}</span>
          <div className="flex-col space-y-1 flex-wrap">
            {tagRows.map((row: Tag[], index: number) => (
              <div key={index} className="flex space-x-2">
                {row.map((tag: Tag) => (
                  <BadgeCard
                    key={tag.id}
                    name={
                      lang === "pa"
                        ? tag.namePa
                        : lang === "da"
                        ? tag.nameDa
                        : tag.name
                    }
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full space-y-5 px-5 md:w-[70%] lg:w-[70%] border-b-2 pb-5">
        <div className="w-full flex border-b-2 mb-6 pb-1">
          <PageHeader
            title={dictionary["main"].answers}
            size={"xs"}
            className="text-gray-400"
          />
        </div>
        {answers &&
          answers.map((answer: any) => (
            <AnswerCard
              key={answer.id}
              answer={answer}
              lang={lang}
              dictionary={dictionary}
              setDiscussionState={setDiscussion}
              discussionId={discussion.id}
              reportOption={reportOption}
              discussionLocked={discussion.isLocked}
            />
          ))}
      </div>
      <div className="flex w-full justify-center items-center space-y-5 px-5 pt-5 md:w-[70%] lg:w-[70%]">
        {!answerOpen && user && moderatorIsEligible() && (
          <Button
            onClick={() => toggleAnswer()}
            className="w-[15%] bg-pink-600"
            disabled={discussion.isLocked}
          >
            {dictionary["main"].answer}
          </Button>
        )}
        {answerOpen && (
          <AnswerForm
            toggleState={toggleAnswer}
            discussionId={discussion.id}
            setDiscussionState={setDiscussion}
            lang={lang}
            dictionary={dictionary}
          />
        )}
        {editDiscussionModalOpen && (
          <EditDiscussionModel
            dictionary={dictionary}
            lang={lang}
            discussion={discussion}
            tags={tags}
            toggleModal={toggleEditDiscussionModal}
            setDiscussion={setDiscussion}
          />
        )}
      </div>
    </>
  );
};

export default QuestionCard;
