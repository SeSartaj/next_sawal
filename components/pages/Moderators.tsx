"use client";

import { FC, useContext, useEffect, useState } from "react";
import PageHeader from "@/ui/PageHeader";
import ModeratorCard from "@/Cards/ModeratorCard";
import { Locale } from "@/i18n-config";
import Takhnik from "@/services/api";
import { Pagination, Stack } from "@mui/material";
import SearchForm from "@/forms/SearchForm";
import { Button } from "../ui/Button";
import CreateModeratorModel from "../ui/CreateModeratorModel";
import AuthContext from "../context/AuthContext";
import { Users } from "@/models/global";

interface ModeratorsProps {
  moderators: any;
  lang: Locale;
  dictionary: any;
}

const Moderators: FC<ModeratorsProps> = (props) => {
  const context = useContext(AuthContext);
  const [user, setUser] = useState<Users | null>();
  const [moderators, setModerators] = useState(props.moderators);
  const [page, setPage] = useState(1);
  const [createModeratorModalOpen, setCreateModeratorModalOpen] =
    useState(false);

  const toggleCreateModeratorModal = () => {
    setCreateModeratorModalOpen(!createModeratorModalOpen);
  };

  useEffect(() => {
    if (context?.user) {
      setUser(context?.user);
    } else {
      setUser(null);
    }
  }, []);

  useEffect(() => {
    if (page >= 1) {
      Takhnik.users.querySearchModerators(`page=${page - 1}`).then((res) => {
        setModerators(res.data);
      });
    }
  }, [page]);
  return (
    <div className="flex-col space-y-3 justify-between mx-auto lg:max-w-7xl md:justify-start md:px-8">
      <div>
        <div className="px-4 py-3 md:justify-start">
          <div className="flex justify-between pr-5">
            <PageHeader
              title={props.dictionary["headers"].moderators}
              numberCount={moderators.totalElements}
              size={"sm"}
            />
            {user && user?.isAdmin && (
              <Button
                className="bg-blue-500"
                onClick={toggleCreateModeratorModal}
              >
                {props.dictionary["main"].create}
              </Button>
            )}
          </div>
          <SearchForm
            setState={setModerators}
            model="moderators"
            lang={props.lang}
            dictionary={props.dictionary}
          />
        </div>
        <div className="px-4 flex flex-wrap">
          {moderators.content.map((moderator: any) => (
            <div
              className="lg:w-1/3 md:w-1/2 w-full px-2 mb-4"
              key={moderator.id}
            >
              <ModeratorCard
                moderator={moderator}
                lang={props.lang}
                dictionary={props.dictionary}
              />
            </div>
          ))}
        </div>
        <div className="flex py-4 items-center justify-center">
          <Stack spacing={2}>
            <Pagination
              count={moderators.totalPages}
              showFirstButton
              showLastButton
              onChange={(e, value) => setPage(value)}
            />
          </Stack>
        </div>
      </div>
      {createModeratorModalOpen && (
        <div className="modal-background">
          <CreateModeratorModel
            toggleModal={toggleCreateModeratorModal}
            setModeratorState={setModerators}
            lang={props.lang}
            dictionary={props.dictionary}
          />
        </div>
      )}
    </div>
  );
};

export default Moderators;
