import Link from "next/link";
import { FC } from "react";
import Label from "./Label";

interface NavBarItemProps {
  lang: string;
  dictionary: any;
  navbar: boolean;
  route: string;
}

const NavBarItem: FC<NavBarItemProps> = ({
  lang,
  dictionary,
  navbar,
  route,
}) => {
  return (
    <Link href={`/${lang}/${route}`}>
      <div
        className={`${
          navbar
            ? "hover:bg-gray-700 px-4 py-3"
            : "hover:bg-gray-700 h-full py-5 px-3"
        }`}
      >
        <Label className="text-gray-100 text-lg cursor-pointer">
          {dictionary["headers"][route]}
        </Label>
      </div>
    </Link>
  );
};

export default NavBarItem;
