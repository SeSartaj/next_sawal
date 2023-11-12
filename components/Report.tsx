import { FC, useState } from "react";
import ReportModal from "./ui/ReportModal";

interface ReportProps {
  lang: string;
  dictionary: any;
  reportOption: any;
  discussionId?: any;
  reportedUserId?: any;
  dir: string
}

const Report: FC<ReportProps> = ({
  reportOption,
  dictionary,
  lang,
  reportedUserId,
  discussionId,
  dir
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleModal = () => {
    if (!modalOpen) toggleMenu();
    setModalOpen(!modalOpen);
  };
  return (
    <div dir={dir}>
      <div className="relative inline-block text-left">
        <div>
          <svg
            className="w-4 h-4 ml-2 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            onClick={toggleMenu}
          >
            <line
              x1="8"
              y1="12"
              x2="16"
              y2="12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="8"
              y1="6"
              x2="16"
              y2="6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="8"
              y1="18"
              x2="16"
              y2="18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {
          <div
            className={`absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
              isMenuOpen ? "" : "hidden"
            } ${dir == "ltr" ? "right-0": "left-0"}`}
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
                onClick={toggleModal}
              >
                {dictionary["main"].report}
              </a>
            </div>
          </div>
        }
      </div>

      {modalOpen && (
        <>
          <ReportModal
            toggleModal={toggleModal}
            reportOption={reportOption}
            dictionary={dictionary}
            lang={lang}
            reportedUserId={reportedUserId || undefined}
            discussionId={discussionId || undefined}
            dir={dir}
          />
        </>
      )}
    </div>
  );
};

export default Report;
