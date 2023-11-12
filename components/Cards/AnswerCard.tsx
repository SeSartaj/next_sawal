import { FC, useContext, useEffect, useState } from "react";
import Paragraph from "@/ui/Paragragh";
import ReportModal from "@/ui/ReportModal";
import Icons from "../Icons";
import CommentCard from "./CommentCard";
import Label from "@/ui/Label";
import CommentForm from "../forms/CommentForm";
import RelativeTime from "@/utils/RelativeTime";
import defaultImg from "@/public/default.png";
import Image from "next/image";
import AuthContext from "../context/AuthContext";
import Takhnik from "@/services/api";
import { toast } from "react-toastify";
import { getErrorMessage } from "../utils/ErrorMessage";
import FileDisplay from "../FileDisplay";
import { Button } from "../ui/Button";
import { Users } from "@/models/global";
import IconsBar from "../ui/IconsBar";
import Alert from "../ui/Alert";
import EditAnswerModel from "../ui/EditAnswerModel";

interface AnswerCardProps {
  answer: any;
  lang: string;
  dictionary: any;
  discussionId: any;
  setDiscussionState: any;
  reportOption: any;
  discussionLocked: any;
}

const AnswerCard: FC<AnswerCardProps> = ({
  answer,
  lang,
  dictionary,
  discussionId,
  setDiscussionState,
  reportOption,
  discussionLocked,
}) => {
  const context = useContext(AuthContext);
  const [ansReportModalOpen, setAnsReportModalOpen] = useState(false);
  const [isAnsReportMenuOpen, setIsAnsReportMenuOpen] = useState(false);
  const [commentOpen, setCommentOpen] = useState(false);
  const [vote, setVote] = useState<any>(null);
  const [userHasVotedLike, setUserHasVotedLike] = useState<boolean>();
  const [userHasVotedDislike, setUserHasVotedDislike] = useState<boolean>();
  const [voteInProgress, setVoteInProgress] = useState<any>(false);
  const [user, setUser] = useState<Users | null>();
  const [voteCount, setVoteCount] = useState(0);
  const [openDeleteAlert, setOpenDeleteAlert] = useState(false);
  const [isAnswerMenuOpen, setIsAnswerMenuOpen] = useState(false);
  const [editAnswerModalOpen, setEditAnswerModalOpen] = useState(false);

  const images = answer?.files?.filter(
    (file: any) => file.fileType === "Image"
  );
  const attachments = answer?.files?.filter(
    (file: any) => file.fileType === "Attachments"
  );

  const toggleAnsReportMenu = () => {
    setIsAnsReportMenuOpen(!isAnsReportMenuOpen);
  };

  const toggleComment = () => {
    setCommentOpen(!commentOpen);
  };

  const toggleAnsReportModal = () => {
    if (ansReportModalOpen) toggleAnsReportMenu();
    setAnsReportModalOpen(!ansReportModalOpen);
  };

  const toggleAnswerMenu = () => {
    setIsAnswerMenuOpen(!isAnswerMenuOpen);
  };

  const toggleEditAnswerModal = () => {
    if (isAnswerMenuOpen) toggleAnswerMenu();
    setEditAnswerModalOpen(!editAnswerModalOpen);
  };

  const handleVote = (like: boolean, dislike: boolean) => {
    setVoteInProgress(true);
    if (vote) {
      setVote(null);
      handleDeleteVote();
    }

    const userId = context?.jwt?.id;
    const accessToken = context?.jwt?.accessToken;
    const answerId = answer.id;

    Takhnik.vote
      .create({ userId, answerId, like, dislike }, accessToken)
      .then((res) => {
        Takhnik.discussions.retrieve(discussionId).then((res) => {
          setDiscussionState(res.data);
        });

        const toastMessage = like
          ? dictionary['notify'].vote_like_ok
          : dictionary['notify'].vote_dislike_ok;
        setVoteInProgress(false);
        toast(toastMessage, {
          hideProgressBar: true,
          autoClose: 2000,
          type: "success",
        });
      })
      .catch((error) => {
        console.error(getErrorMessage(error));
        toast(getErrorMessage(error), {
          hideProgressBar: true,
          autoClose: 2000,
          type: "error",
        });
      });
  };

  const handleVoteUp = () => {
    if (vote) {
      setVote(null);
      return handleDeleteVote();
    }
    setUserHasVotedLike(true);
    handleVote(true, false);
  };

  const handleDeleteVote = () => {
    setUserHasVotedDislike(false);
    setUserHasVotedLike(false);
    const accessToken = context?.jwt?.accessToken;
    Takhnik.vote
      .delete(vote.id, accessToken)
      .then((res: any) => {
        Takhnik.discussions.retrieve(discussionId).then((res) => {
          setDiscussionState(res.data);
        });
        toast(dictionary['notify'].vote_removed_ok, {
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

  const handleVoteDown = () => {
    if (vote) {
      setVote(null);
      return handleDeleteVote();
    }
    setUserHasVotedDislike(false);
    handleVote(false, true);
  };

  useEffect(() => {
    Takhnik.answers.getVotes(answer?.id).then((res): void => {
      if (
        res.data?.some(
          (vote: any) => vote.userId === context?.jwt?.id && vote.like
        )
      ) {
        setUserHasVotedLike(true);
        let vote = res.data?.filter(
          (vote: any) => vote.userId === context?.jwt?.id && vote.like
        );
        setVote(vote[0]);
      } else if (
        res.data?.some(
          (vote: any) => vote.userId === context?.jwt?.id && vote.dislike
        )
      ) {
        setUserHasVotedDislike(true);
        let vote = res.data?.filter(
          (vote: any) => vote.userId === context?.jwt?.id && vote.dislike
        );
        setVote(vote[0]);
      }
      const newLikeCount = res.data.filter((vote: any) => vote.like).length;
      const newDislikeCount = res.data.filter(
        (vote: any) => vote.dislike
      ).length;

      setVoteCount(newLikeCount - newDislikeCount);
    });
  }, [answer]);

  const handleDelete = () => {
    const accessToken = context?.jwt?.accessToken;
    Takhnik.answers
      .delete(answer.id, accessToken)
      .then(async (res) => {
        setOpenDeleteAlert(false);
        toast(dictionary['notify'].answer_deleted_ok, {
          hideProgressBar: true,
          autoClose: 2000,
          type: "success",
        });
        await Takhnik.discussions.retrieve(discussionId).then((res) => {
          setDiscussionState(res.data);
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

  useEffect(() => {
    if (context?.user) {
      setUser(context?.user);
    } else {
      setUser(null);
    }
  }, []);

  return (
    <div className="flex flex-col w-full border-t-2 pt-4">
      <div className="flex w-full justify-between">
        <Paragraph size={"sm"}>{answer.content}</Paragraph>
        {user && user.isModerator && (
          <div className="relative inline-block text-left">
            <IconsBar toggleMenu={toggleAnswerMenu} />
            <div
              className={`absolute ${answer.lang ? answer.lang === "en" ? "right-0": "left-0" : "right-0"} z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
                isAnswerMenuOpen ? "" : "hidden"
              }`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
            >
              <div className="py-1" role="none">
                {
                  <a
                    href="#"
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    id="menu-item-0"
                    onClick={toggleEditAnswerModal}
                  >
                    {dictionary["main"].edit}
                  </a>
                }
                {user.id === answer?.user?.id && (
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
      <div className="flex justify-between p-2">
        <div className="flex space-x-1">
          {answer.bestAnswer && (
            <div className="flex justify-center items-center">
              {" "}
              <Icons.CheckCircle2 size={30} color="green" />
            </div>
          )}
          {user && (
            <>
              <div className="flex justify-center items-center cursor-pointer">
                <Button
                  variant={"ghost"}
                  onClick={handleVoteUp}
                  disabled={
                    userHasVotedDislike ||
                    user.isModerator ||
                    voteInProgress ||
                    user.id == answer.user.id
                  }
                >
                  <Icons.ThumbsUp size={20} color="blue" />
                  {voteCount > 0 && (
                    <Label className="text-lg px-1 flex justify-center items-center text-blue-500">
                      {voteCount}
                    </Label>
                  )}
                </Button>
              </div>
              <div className="flex justify-center items-center cursor-pointer">
                <Button
                  variant={"ghost"}
                  onClick={handleVoteDown}
                  disabled={
                    userHasVotedLike ||
                    user.isModerator ||
                    voteInProgress ||
                    user.id == answer.user.id
                  }
                >
                  <Icons.ThumbsDown size={20} color="red" />
                  {voteCount < 0 && (
                    <Label className="text-lg px-1 flex justify-center items-center text-red-500">
                      {Math.abs(voteCount)}
                    </Label>
                  )}
                </Button>
              </div>
            </>
          )}
        </div>
        <div className="flex w-full justify-end px-2">
          <div className="flex px-2">
            {answer.createdAt && (
              <RelativeTime
                timestamp={answer.createdAt}
                lang={lang}
                dictionary={dictionary}
              />
            )}
          </div>
          <div>
            {answer.user.file ? (
              <img
                src={`${process.env.NEXT_PUBLIC_TAKHNIK_BACKEND_URL}/files/${answer.user.file.fileName}`}
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
              {answer.user?.firstName} {answer.user?.lastName}
            </div>
          </div>
          <div>
            <div className="relative inline-block text-left">
              <IconsBar toggleMenu={toggleAnsReportMenu} />
              <div
                className={`absolute ${answer.lang ? answer.lang === "en" ? "right-0": "left-0" : "right-0"} z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
                  isAnsReportMenuOpen ? "" : "hidden"
                }`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
              >
                <div className="py-1" role="none">
                  {user && user.id != answer.user.id && (
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      id="menu-item-0"
                      onClick={toggleAnsReportModal}
                    >
                      {dictionary["main"].report}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {answer.editedUser && (
        <div className="flex justify-end p-2">
          <div className="flex px-2">
            {answer.editedAt && (
              <RelativeTime
                timestamp={answer.editedAt}
                lang={lang}
                dictionary={dictionary}
              />
            )}
          </div>
          <div>
            {answer?.editedUser?.file ? (
              <img
                src={`${process.env.NEXT_PUBLIC_TAKHNIK_BACKEND_URL}/files/${answer.editedUser?.file?.fileName}`}
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
          <div className="flex-col w-[20%] justify-start px-2 mr-2">
            <div>{dictionary["main"].edited_by}</div>
            <div className="flex w-full">{answer.editedUser?.lastName}</div>
          </div>
        </div>
      )}
      <div className="flex flex-col px-8 mx-2">
        {answer.comments.map((comment: any) => (
          <CommentCard
            key={comment.id}
            comment={comment}
            lang={lang}
            dictionary={dictionary}
            discussionId={discussionId}
            setDiscussionState={setDiscussionState}
          />
        ))}
      </div>
      <div className="flex flex-col w-full border-2 rounded-sm px-2">
        <button
          className="cursor-pointer py-2"
          onClick={() => toggleComment()}
          disabled={discussionLocked}
        >
          <span className="flex justify-items-center items-center space-x-1">
            <Icons.MessageCircle
              size={20}
              color={`${discussionLocked ? "#1E3A8A" : "#2563EB"}`}
            />
            <span>
              <Label
                className={`text-sm ${
                  discussionLocked ? "text-blue-900" : "text-blue-600"
                } cursor-pointer`}
              >
                {dictionary["main"].add_comment}
              </Label>
            </span>
          </span>
        </button>
        {commentOpen && (
          <CommentForm
            toggleState={toggleComment}
            answerId={answer.id}
            setDiscussionState={setDiscussionState}
            discussionId={discussionId}
            dictionary={dictionary}
            lang={lang}
          />
        )}
        <Alert
          alertTitle="Delete Answer?"
          alertMessage={`Are you sure you want to Delete this Answer?`}
          open={openDeleteAlert}
          setOpen={setOpenDeleteAlert}
          handleYes={handleDelete}
        />
      </div>

      {editAnswerModalOpen && (
        <EditAnswerModel
          dictionary={dictionary}
          lang={lang}
          answer={answer}
          toggleModal={toggleEditAnswerModal}
          setDiscussion={setDiscussionState}
          discussionId={discussionId}
        />
      )}

      {ansReportModalOpen && (
        <div className="modal-background">
          <ReportModal
            toggleModal={toggleAnsReportModal}
            reportOption={reportOption}
            discussionId={discussionId}
            dictionary={dictionary}
            lang={lang}
            dir={lang == "en" ? "ltr": "rtl"}
          />
        </div>
      )}
    </div>
  );
};

export default AnswerCard;
