import { FC, useState } from "react";
import SuspendUserModel from "./ui/SuspendUserModel";

interface SuspendProps {
  lang: string;
  dictionary: any;
  suspendedUserId: any;
}

const Suspend: FC<SuspendProps> = ({ lang, dictionary, suspendedUserId }) => {
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
    <div>
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
            className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
              isMenuOpen ? "" : "hidden"
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
                onClick={toggleModal}
              >
                Suspend
              </a>
            </div>
          </div>
        }
      </div>

      {modalOpen && (
        <>
          <SuspendUserModel
            toggleModal={toggleModal}
            dictionary={dictionary}
            lang={lang}
            suspendedUserId={suspendedUserId || undefined}
          />
        </>
      )}
    </div>
  );
};

export default Suspend;
