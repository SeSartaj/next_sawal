import { FC, useState } from "react";
import Label from "../ui/Label";
import Icons from "../Icons";
import Link from "next/link";
import { Locale } from "@/i18n-config";
import Paragraph from "../ui/Paragragh";
import { Button } from "../ui/Button";
import EditTagModel from "../ui/EditTagModel";
import EditReportTypeModel from "../ui/EditReportTypeModel";

interface TagsCardProps {
  id?: string;
  name: string;
  isTag?: boolean;
  discussionsCount?: number;
  lang: Locale;
  dictionary: any;
  isAdmin?: any;
  setTags?: any;
  setReportTypes?: any;
  tag?: any
  reportType?: any
}

const TagsCard: FC<TagsCardProps> = ({
  id,
  name,
  isTag,
  lang,
  discussionsCount,
  dictionary,
  isAdmin,
  setTags,
  setReportTypes,
  tag,
  reportType
}) => {
  const [editTagModalOpen, setEditTagModalOpen] = useState(false);
  const [editReportTypeModalOpen, setEditReportTypeModalOpen] = useState(false);

  const toggleEditTagModal = () => {
    setEditTagModalOpen(!editTagModalOpen);
  };

  const toggleEditReportTypeModal = () => {
    setEditReportTypeModalOpen(!editReportTypeModalOpen);
  };
  return (
    <div className="flex rounded overflow-hidden shadow-md">
      {isTag && (
        <div className="flex items-center justify-center flex-grow">
          <Icons.Tag className="w-6 h-6" />
        </div>
      )}
      <div className="flex w-[65%] py-1 px-1 justify-start items-center">
        {isTag ? (
          <div className="text-xl text-blue-500 mb-2">
            <Link href={`/${lang}/questions/tag/${id}`}>
              <Paragraph className="text-left text-blue-500">{name}</Paragraph>
            </Link>
          </div>
        ) : (
          <div>
            <Label>{name}</Label>
          </div>
        )}
      </div>
      <div className="flex items-center justify-center flex-grow">
        {isTag ? (
          <div className="flex flex-col">
            {isAdmin && (
              <div className="flex justify-end">
                <Button variant={"ghost"} onClick={toggleEditTagModal}>
                  <Icons.FileEdit size={15} />
                </Button>
              </div>
            )}
            <div className="flex items-center">
              <Icons.X size={15} />
              <Label className="px-1 font-bold text-lg">
                {discussionsCount || 0}
              </Label>
            </div>
          </div>
        ) : (
          <div className="flex justify-end">
            <Button variant={"ghost"} onClick={toggleEditReportTypeModal}>
              <Icons.FileEdit size={15} />
            </Button>
          </div>
        )}
      </div>
      {editTagModalOpen && (
        <EditTagModel
          dictionary={dictionary}
          lang={lang}
          tagId={id}
          tag={tag}
          toggleModal={toggleEditTagModal}
          setTags={setTags}
        />
      )}
      {editReportTypeModalOpen && (
        <EditReportTypeModel
          dictionary={dictionary}
          lang={lang}
          reportTypeId={id}
          reportType={reportType}
          toggleModal={toggleEditReportTypeModal}
          setReportTypes={setReportTypes}
        />
      )}
    </div>
  );
};

export default TagsCard;
