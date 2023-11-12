"use client";

import { FC, useState } from "react";
import Label from "./ui/Label";
import ImageViewModel from "./ui/ImageViewModel";
import Image from "next/image";

interface FileDisplayProps {
  file: any;
}

const FileDisplay: FC<FileDisplayProps> = ({ file }) => {
  const { id, fileName, fileType } = file;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  if (fileType === "Image") {
    return (
      <div>
        <img
          key={id}
          src={`${process.env.NEXT_PUBLIC_TAKHNIK_BACKEND_URL}/files/${fileName}`}
          alt={fileName}
          className="w-20 h-20 rounded-md cursor-pointer"
          onClick={openModal}
        />
        <ImageViewModel isOpen={isModalOpen} onClose={closeModal}>
          <img
            src={`${process.env.NEXT_PUBLIC_TAKHNIK_BACKEND_URL}/files/${fileName}`}
            alt={fileName}
            className="max-w-full max-h-full"
          />
        </ImageViewModel>
      </div>
    );
  } else if (fileType === "Attachments") {
    return (
      <div key={id}>
        <a
          href={`${process.env.NEXT_PUBLIC_TAKHNIK_BACKEND_URL}/files/${fileName}`}
          download
          className="cursor-pointer"
        >
          <Label className="text-xs text-blue-500">{fileName}</Label>
        </a>
      </div>
    );
  }

  return null;
};

export default FileDisplay;
