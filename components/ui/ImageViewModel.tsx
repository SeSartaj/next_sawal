import * as React from "react";
import Icons from "../Icons";

interface ImageViewModelProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ImageViewModel: React.FC<ImageViewModelProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) return null;

  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log(event);
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-filter backdrop-blur-sm"
      onClick={handleBackgroundClick}
    >
      <div className="modal relative">
        <div className="modal-content relative">
          <span className="close absolute top-3 right-3" onClick={onClose}>
            <Icons.X size={30} />
          </span>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ImageViewModel;
