import { FC, useContext, useEffect, useState } from "react";
import Paragraph from "../ui/Paragragh";
import RelativeTime from "@/utils/RelativeTime";
import AuthContext from "../context/AuthContext";
import { Users } from "@/models/global";
import Alert from "../ui/Alert";
import Takhnik from "@/services/api";
import { toast } from "react-toastify";
import { getErrorMessage } from "../utils/ErrorMessage";
import IconsBar from "../ui/IconsBar";
import EditCommentModel from "../ui/EditCommentModel";

interface CommentCardProps {
  comment: any;
  lang: string;
  dictionary: any;
  discussionId: any;
  setDiscussionState: any;
}

const CommentCard: FC<CommentCardProps> = ({
  comment,
  lang,
  dictionary,
  discussionId,
  setDiscussionState,
}) => {
  const context = useContext(AuthContext);
  const [loggedUser, setLoggedUser] = useState<Users | null>();
  const [openDeleteCommentAlert, setOpenDeleteCommentAlert] = useState(false);
  const [isCommentMenuOpen, setIsCommentMenuOpen] = useState(false);
  const [editCommentModalOpen, setEditCommentModalOpen] = useState(false);

  const toggleCommentMenu = () => {
    setIsCommentMenuOpen(!isCommentMenuOpen);
  };

  const toggleEditCommentModal = () => {
    if (isCommentMenuOpen) toggleCommentMenu();
    setEditCommentModalOpen(!editCommentModalOpen);
  };

  const handleDeleteComment = () => {
    const accessToken = context?.jwt?.accessToken;
    Takhnik.comments
      .delete(comment.id, accessToken)
      .then(async (res) => {
        setOpenDeleteCommentAlert(false);
        Takhnik.discussions.retrieve(discussionId).then((res) => {
          setDiscussionState(res.data);
        });

        toast(dictionary['notify'].comment_deleted_ok, {
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

  useEffect(() => {
    if (context?.user) {
      setLoggedUser(context?.user);
    } else {
      setLoggedUser(null);
    }
  }, []);

  return (
    <div className="flex w-full space-x-2 items-baseline">
      <div className="flex justify-center items-center">
        <Paragraph size={"xs"}>{comment.content}</Paragraph>
      </div>
      <span className="flex justify-center items-center">{" - "}</span>
      <div className="flex justify-center items-center">
        <Paragraph size={"xs"} className="text-blue-500">
          {comment.user?.firstName
            ? comment.user?.firstName
            : comment.user?.lastName}
        </Paragraph>
      </div>
      <div className="flex justify-center items-center">
        {comment.createdAt && (
          <RelativeTime
            timestamp={comment.createdAt}
            lang={lang}
            dictionary={dictionary}
          />
        )}
      </div>
      <div className="flex justify-center items-center">
        {loggedUser && loggedUser.id === comment?.user?.id && (
          <div className="relative inline-block text-left">
          <IconsBar toggleMenu={toggleCommentMenu} />
          <div
            className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
              isCommentMenuOpen ? "" : "hidden"
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
                  onClick={toggleEditCommentModal}
                >
                  {dictionary["main"].edit}
                </a>
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  id="menu-item-0"
                  onClick={() => setOpenDeleteCommentAlert(true)}
                >
                  {dictionary["main"].delete}
                </a>
            </div>
          </div>
        </div>
        )}
      </div>
      <Alert
        alertTitle="Delete comment?"
        alertMessage={`Are you sure you want to Delete comment?`}
        open={openDeleteCommentAlert}
        setOpen={setOpenDeleteCommentAlert}
        handleYes={handleDeleteComment}
      />
      {editCommentModalOpen && (
        <EditCommentModel
          dictionary={dictionary}
          lang={lang}
          comment={comment}
          toggleModal={toggleEditCommentModal}
          setDiscussion={setDiscussionState}
          discussionId={discussionId}
        />
      )}
    </div>
  );
};

export default CommentCard;
