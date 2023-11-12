"use client";

import { FC, useContext, useEffect, useState } from "react";
import { Locale } from "@/i18n-config";
import Takhnik from "@/services/api";
import PageHeader from "@/ui/PageHeader";
import TagsCard from "@/Cards/TagsCard";
import SearchForm from "@/forms/SearchForm";
import { Pagination, Stack } from "@mui/material";
import { Button } from "../ui/Button";
import CreateTagModel from "../ui/CreateTagModel";
import AuthContext from "../context/AuthContext";
import { Users } from "@/models/global";

interface TagsProps {
  tags: any;
  lang: Locale;
  dictionary: any;
}

const Tags: FC<TagsProps> = (props) => {
  const context = useContext(AuthContext);
  const [user, setUser] = useState<Users | null>();
  const [tags, setTags] = useState(props.tags);
  const [page, setPage] = useState(1);
  const [createTagModalOpen, setCreateTagModalOpen] = useState(false);

  const toggleCreateTagModal = () => {
    setCreateTagModalOpen(!createTagModalOpen);
  };

  useEffect(() => {
    if (page >= 1) {
      Takhnik.tags.querySearch(`page=${page - 1}`).then((res) => {
        setTags(res.data);
      });
    }
  }, [page]);

  useEffect(() => {
    if (context?.user) {
      setUser(context?.user);
    } else {
      setUser(null);
    }
  }, []);

  return (
    <div className="flex-col space-y-3 justify-between mx-auto lg:max-w-7xl md:justify-start md:px-8">
      <div>
        <div className="px-4 py-3 md:justify-start">
          <div className="flex justify-between pr-5">
            <PageHeader
              title={props.dictionary["headers"].tags}
              numberCount={tags.totalElements}
              size={"sm"}
            />
            {user && user.isAdmin && (
              <Button className="bg-blue-500" onClick={toggleCreateTagModal}>
                {props.dictionary["main"].create}
              </Button>
            )}
          </div>
          <SearchForm
            setState={setTags}
            model="tags"
            lang={props.lang}
            dictionary={props.dictionary}
          />
        </div>
      </div>
      <div className="px-4 flex flex-wrap">
        {tags.content.map((tag: any) => (
          <div className="lg:w-1/4 md:w-1/3 w-1/2 px-2 mb-4" key={tag.id}>
            <TagsCard
              key={tag.id}
              id={tag.id}
              name={
                props.lang === "pa"
                  ? tag.namePa
                  : props.lang === "da"
                  ? tag.nameDa
                  : tag.name
              }
              dictionary={props.dictionary}
              lang={props.lang}
              discussionsCount={tag.discussionsCount}
              isTag
              isAdmin={user?.isAdmin}
              setTags={setTags}
              tag={tag}
            />
          </div>
        ))}
      </div>
      <div className="flex py-4 items-center justify-center">
        <Stack spacing={2}>
          <Pagination
            count={tags.totalPages}
            showFirstButton
            showLastButton
            onChange={(e, value) => setPage(value)}
          />
        </Stack>
      </div>
      {createTagModalOpen && (
        <div className="modal-background">
          <CreateTagModel
            toggleModal={toggleCreateTagModal}
            setTagState={setTags}
            lang={props.lang}
            dictionary={props.dictionary}
          />
        </div>
      )}
    </div>
  );
};

export default Tags;
