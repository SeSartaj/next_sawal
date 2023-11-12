import { FC } from "react";

interface IconsBarProps {
  toggleMenu: any;
}

const IconsBar: FC<IconsBarProps> = ({toggleMenu}) => {
  return (
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
  );
};

export default IconsBar;
