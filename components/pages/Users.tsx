"use client";

import { FC, useEffect, useState } from "react";
import PageHeader from "@/ui/PageHeader";
import UserCard from "@/Cards/UserCard";
import Takhnik from "@/services/api";
import SearchForm from "@/forms/SearchForm";
import { Locale } from "@/i18n-config";
import { Pagination, Stack } from "@mui/material";

interface UsersProps {
  members: any;
  lang: Locale;
  dictionary: any;
}

const Users: FC<UsersProps> = (props) => {
  const [members, setMembers] = useState(props.members);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (page >= 1) {
      Takhnik.users.querySearchMembers(`page=${page - 1}`).then((res) => {
        setMembers(res.data);
      });
    }
  }, [page]);

  return (
    <div className="flex-col space-y-3 justify-between mx-auto lg:max-w-7xl md:justify-start md:px-8">
      <div>
        <div className="px-4 py-3 md:justify-start">
          <PageHeader
            title={props.dictionary["headers"].users}
            numberCount={members.totalElements}
            size={"sm"}
          />
          <SearchForm
            setState={setMembers}
            model="members"
            lang={props.lang}
            dictionary={props.dictionary}
          />
        </div>
        <div className="px-4 flex flex-wrap">
          {members.content.map((user: any) => (
            <div className="lg:w-1/3 md:w-1/2 w-full px-2 mb-4" key={user.id}>
              <UserCard
                user={user}
                lang={props.lang}
                dictionary={props.dictionary}
              />
            </div>
          ))}
        </div>
        <div className="flex py-4 items-center justify-center">
          <Stack spacing={2}>
            <Pagination
              count={members.totalPages}
              showFirstButton
              showLastButton
              onChange={(e, value) => setPage(value)}
            />
          </Stack>
        </div>
      </div>
      <div className="px-4 flex-col space-y-2"></div>
    </div>
  );
};

export default Users;
