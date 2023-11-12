"use client";

import { FC } from "react";
import Label from "@/ui/Label";
import Alert from "@/ui/Alert";

interface BadgeCardProps {
  id?: string;
  name: string;
  Icon?: any;
  RemoveIconAlert?: any;
  handleRemoveTag?: () => void;
  openTagRemoveAlert?: any;
  setOpenTagRemoveAlert?: any;
  RemoveIconNoAlert?: any;
  highLightTagId?: string;
}

const BadgeCard: FC<BadgeCardProps> = ({
  id,
  name,
  Icon,
  RemoveIconAlert,
  handleRemoveTag,
  openTagRemoveAlert,
  setOpenTagRemoveAlert,
  RemoveIconNoAlert,
  highLightTagId,
}) => {
  return (
    <div
      className={`flex rounded overflow-hidden shadow-md bg-neutral-200 px-1 ${
        highLightTagId && id === highLightTagId ? "bg-yellow-200" : ""
      }`}
    >
      {Icon && <div className="flex items-center">{Icon}</div>}
      <div className="flex px-1 justify-start items-center">
        <div>
          <Label className="font-bold">{name}</Label>
        </div>
      </div>
      {RemoveIconNoAlert && (
        <div className="flex items-center justify-top flex-grow">
          <button>{RemoveIconNoAlert}</button>
        </div>
      )}
      {RemoveIconAlert && (
        <div className="flex items-center justify-top flex-grow">
          <button onClick={() => setOpenTagRemoveAlert(true)}>
            {RemoveIconAlert}
          </button>
          <Alert
            alertTitle="Remove Tag?"
            alertMessage={`Are you sure you want to remove this ${name} Tag?`}
            open={openTagRemoveAlert}
            setOpen={setOpenTagRemoveAlert}
            handleYes={handleRemoveTag}
          />
        </div>
      )}
    </div>
  );
};

export default BadgeCard;
