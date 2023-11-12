import { FC } from "react";
import Label from "@/ui/Label";
import jmoment from "jalali-moment";

interface DateProps {
  timestamp: number;
  lang: string;
}

const CustomDate: FC<DateProps> = ({ timestamp, lang }) => {
  const date = new Date(timestamp * 1000);

  const formatCalendar = (date: Date, lang: string) => {
    if (lang !== "en") {
      return jmoment(date).locale("fa").format("DD MMMM, YYYY");
    } else {
      return date.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    }
  };

  const formattedDate = formatCalendar(date, lang).toString();

  return (
    <span className="flex items-center">
      <Label>{formattedDate}</Label>{" "}
    </span>
  );
};

export default CustomDate;
