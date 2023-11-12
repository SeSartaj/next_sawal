"use client";

import { FC, useState, useRef, useContext, useEffect } from "react";
import Label from "@/ui/Label";
import Icons from "../Icons";
import BadgeCard from "./BadgeCard";
import { Button } from "@/ui/Button";
import UserForm from "@/forms/UserForm";
import Tabs from "../UserActivityTabs";
import RelativeTime from "@/utils/RelativeTime";
import CustomDate from "@/utils/CustomDate";
import TagModal from "@/ui/TagModel";
import Alert from "@/ui/Alert";
import defaultImg from "@/public/default.png";
import Image from "next/image";
import Takhnik from "@/services/api";
import AuthContext from "@/context/AuthContext";
import { getErrorMessage } from "../utils/ErrorMessage";
import { toast } from "react-toastify";
import { Locale } from "@/i18n-config";
import { Users } from "@/models/global";
import { useRouter } from "next/navigation";
import Report from "../Report";
import Suspend from "../Suspend";

interface ProfileCardProps {
  userDetails: any;
  lang: Locale;
  dictionary: any;
  useractivity: any;
  tagOptions: any;
  reportOption: any;
}

export interface Tag {
  id: number;
  name: string;
  namePa: string;
  nameDa: string;
  discussions: any[];
  users: any[];
}

const ProfileCard: FC<ProfileCardProps> = ({
  userDetails,
  lang,
  dictionary,
  useractivity,
  tagOptions,
  reportOption,
}) => {
  const context = useContext(AuthContext);
  const router = useRouter();
  const [loggedUser, setLoggedUser] = useState<Users | null>();
  const [editUser, setEditUser] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState(userDetails);
  const [openMakeModeratorAlert, setOpenMakeModeratorAlert] = useState(false);
  const [openDismissModeratorAlert, setOpenDismissModeratorAlert] =
    useState(false);
  const [showButton, setShowButton] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [openTagRemoveAlert, setOpenTagRemoveAlert] = useState(false);
  const [suspendUserModel, setSuspendUserModel] = useState(false);

  const handleMouseEnter = () => {
    setShowButton(true);
  };

  const handleMouseLeave = () => {
    setShowButton(false);
  };
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const toggleSuspendUserModal = () => {
    setSuspendUserModel(!suspendUserModel);
  };

  const handleButtonClick = () => {
    // Trigger the file input click event
    fileInputRef.current?.click();
  };

  const handleFileSelect = (e: any) => {
    const file = e.target.files[0];
    let formData = new FormData();
    formData.append("file", file);

    Takhnik.files
      .upload(user?.id, formData, context?.jwt?.accessToken)
      .then(async (res) => {
        await Takhnik.users.retrieve(user.id).then((res) => {
          setUser(res.data);
          context?.updateUser(res.data);
        });

        toast(dictionary['notify'].file_uploaded_ok, {
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

  const handleMakeModerator = () => {
    const accessToken = context?.jwt?.accessToken;
    Takhnik.users
      .makeUserModerator(user.id, accessToken)
      .then(async (res) => {
        setOpenMakeModeratorAlert(false);
        await Takhnik.users.retrieve(user.id).then((res) => {
          setUser(res.data);
        });

        toast(dictionary['notify'].promoted_as_moderator_ok, {
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

  const handleDismissModerator = () => {
    const accessToken = context?.jwt?.accessToken;
    Takhnik.users
      .dismissModeratorUser(user.id, accessToken)
      .then(async (res) => {
        setOpenDismissModeratorAlert(false);
        await Takhnik.users.retrieve(user.id).then((res) => {
          setUser(res.data);
        });

        toast(dictionary['notify'].dismiss_as_moderator_ok, {
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

  const chunkArray = (arr: any[], size: number) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += size) {
      const chunk = arr.slice(i, i + size);
      chunkedArray.push(chunk);
    }
    return chunkedArray;
  };

  const handleRemoveTag = (tag: any) => {
    if (!context?.jwt) {
      toast(dictionary['notify'].sign_in_first, {
        hideProgressBar: true,
        autoClose: 2000,
        type: "info",
      });
      return router.push(`/${lang}/sign_in`);
    }
    const accessToken = context?.jwt?.accessToken;
    const tags = [];
    tags.push(tag);

    Takhnik.users
      .removeTagsFromModerator(user.id, { tags }, accessToken)
      .then((): void => {
        setOpenTagRemoveAlert(false);
        Takhnik.users.retrieve(user.id).then((res) => {
          setUser(res.data);
        });
        toast(dictionary['notify'].tags_removed_ok, {
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

  const tagRows = chunkArray(user.tags, 3);
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col pt-10 w-full md:flex-row lg:flex-row">
        <div className="flex-col mx-8 border-2 shadow-md rounded">
          <div className="flex items-center justify-center">
            {user?.file ? (
              <div
                className="relative w-80 h-80 rounded-md"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={`${process.env.NEXT_PUBLIC_TAKHNIK_BACKEND_URL}/files/${user.file.fileName}`}
                  className={`w-full h-full rounded-md ${
                    showButton ? "filter blur-lg" : ""
                  }`}
                  alt="Logo"
                />
                {showButton && loggedUser?.id === user.id && (
                  <button
                    className="absolute w-full bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={handleButtonClick}
                  >
                    {dictionary['main'].change_profile_dp}
                  </button>
                )}
              </div>
            ) : (
              <div
                className="relative w-80 h-80 rounded-md"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Image
                  src={defaultImg}
                  alt="Picture of the author"
                  className={`w-full h-full rounded-md ${
                    showButton ? "filter blur-lg" : ""
                  }`}
                />
                {showButton && loggedUser?.id === user.id && (
                  <button
                    className="absolute w-full bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={handleButtonClick}
                  >
                    {dictionary['main'].add_profile_dp}
                  </button>
                )}
              </div>
            )}
          </div>
          <div
            className={`items-center flex py-3 ${
              user.isModerator || user.isAdmin
                ? "justify-between px-5"
                : "justify-center"
            }`}
          >
            <Label dir="ltr">{"@" + user.username}</Label>
            {(user.isModerator || user.isAdmin) && (
              <BadgeCard
                name={user.isModerator ? dictionary["main"].moderator : dictionary["main"].administrator}
                Icon={
                  <Icons.Star
                    fill="yellow"
                    color="yellow"
                    className="h-4 w-4"
                  />
                }
              />
            )}
          </div>
          {user.isModerator && (
            <div className="items-center flex-col space-y-1 flex-wrap p-3 border-t-2">
              <div className="flex justify-between items-center pb-2">
                <Label>Tags</Label>
                <div>
                  {loggedUser && loggedUser.isAdmin && (
                    <Button
                      className="rounded-full p-2"
                      size={"xs"}
                      onClick={toggleModal}
                    >
                      <Icons.Plus size={14} />
                    </Button>
                  )}
                </div>{" "}
              </div>
              {tagRows.map((row: Tag[], index: number) => (
                <div key={index} className="flex space-x-1">
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
                      Icon={<Icons.Tag className="h-4 w-4" />}
                      RemoveIconAlert={
                        loggedUser &&
                        loggedUser.isAdmin && <Icons.X size={14} />
                      }
                      handleRemoveTag={() => handleRemoveTag(tag)}
                      openTagRemoveAlert={openTagRemoveAlert}
                      setOpenTagRemoveAlert={setOpenTagRemoveAlert}
                    />
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex-col w-full px-5 sm:pt-10 md:pt-0 lg:pt-0">
          <div className="flex justify-between w-full">
            <div className="flex flex-col md:flex-row w-[70%] justify-between lg:flex-row ">
              <div className="flex-col items-center justify-center">
                <div>
                  {user.isModerator ? (
                    <Label>
                      {" "}
                      {useractivity?.discussions.length}{" "}
                      {dictionary["main"].questions},{" "}
                      {useractivity?.answers.length}{" "}
                      {dictionary["main"].answers},{" "}
                      {useractivity?.comments.length}{" "}
                      {dictionary["main"].comments}
                    </Label>
                  ) : (
                    <Label>
                      {" "}
                      {useractivity?.discussions.length}{" "}
                      {dictionary["main"].answers},{" "}
                      {useractivity?.comments.length}{" "}
                      {dictionary["main"].answers}
                    </Label>
                  )}
                </div>
                <div
                  className={`${
                    lang === "da" ? "flex flex-row-reverse" : "flex"
                  } items-center space-x-1`}
                >
                  <Label>{dictionary["server-component"].active_since}</Label>
                  <CustomDate timestamp={user.createdAt} lang={lang} />
                </div>
              </div>
              <div className="flex items-end justify-start">
                {user.lastSeenAt && (
                  <div
                    className={`${
                      lang === "en" ? "flex" : "flex flex-row-reverse"
                    } items-center space-x-1`}
                  >
                    <Icons.Clock9 size={14} color="grey" />
                    <Label>
                      {dictionary["server-component"].last_activity}
                    </Label>

                    <RelativeTime
                      timestamp={user.lastSeenAt}
                      lang={lang}
                      dictionary={dictionary}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center justify-center">
              {!editUser && (
                <>
                  {loggedUser?.isAdmin &&
                    !user.isModerator &&
                    !user.isAdmin && (
                      <Button
                        onClick={() => setOpenMakeModeratorAlert(true)}
                        size={"xs"}
                        variant={"link"}
                      >
                        {dictionary["main"].make_mod}
                      </Button>
                    )}
                  {loggedUser?.isAdmin && user.isModerator && (
                    <Button
                      onClick={() => setOpenDismissModeratorAlert(true)}
                      size={"xs"}
                      variant={"link"}
                    >
                      {dictionary["main"].dismiss_mod}
                    </Button>
                  )}
                  {loggedUser?.id === user.id ? (
                    <Button onClick={() => setEditUser(true)} size={"lg"}>
                      {dictionary["main"].edit}
                    </Button>
                  ) : (
                    loggedUser &&
                    !loggedUser?.isAdmin && (
                      <Report
                        dictionary={dictionary}
                        reportOption={reportOption}
                        lang={lang}
                        reportedUserId={user.id}
                        dir={ lang == "en" ? "ltr": "rtl"}
                      />
                    )
                  )}
                  {loggedUser && loggedUser?.isAdmin && !user.isAdmin && (
                    <Suspend
                      dictionary={dictionary}
                      lang={lang}
                      suspendedUserId={user.id}
                    />
                  )}
                  <Alert
                    alertTitle="Make Moderator?"
                    alertMessage={`Are you sure you want to Make ${user.lastName} as a Moderator?`}
                    open={openMakeModeratorAlert}
                    setOpen={setOpenMakeModeratorAlert}
                    handleYes={handleMakeModerator}
                  />
                  <Alert
                    alertTitle="Dismiss Moderator?"
                    alertMessage={`Are you sure you want to Dismiss ${user.lastName} as a Moderator?`}
                    open={openDismissModeratorAlert}
                    setOpen={setOpenDismissModeratorAlert}
                    handleYes={handleDismissModerator}
                  />
                </>
              )}
            </div>
          </div>
          <div>
            <UserForm
              user={user}
              editUser={editUser}
              setEditUser={setEditUser}
              lang={lang}
              dictionary={dictionary}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex">
        <Tabs userActivity={useractivity} lang={lang} dictionary={dictionary} />
      </div>
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        ref={fileInputRef}
        onChange={handleFileSelect}
      />
      {modalOpen && (
        <>
          <TagModal
            toggleModal={toggleModal}
            tags={user.tags}
            tagOptions={tagOptions}
            lang={lang}
            dictionary={dictionary}
            setState={setUser}
            moderatorId={user.id}
          />
        </>
      )}
    </div>
  );
};

export default ProfileCard;
