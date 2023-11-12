import React, { FC } from "react";
import { formatDistance } from "date-fns";
import { enUS, faIR } from "date-fns/locale";
import Label from "../ui/Label";

interface RelativeTimeProps {
  timestamp: any;
  lang: string;
  dictionary: any;
}

type Dictionary = {
  [key: string]: string;
};

type DateAf = {
  result: string;
  number: string;
};

const RelativeTime: FC<RelativeTimeProps> = ({
  timestamp,
  lang,
  dictionary,
}) => {
  const getCurrentLocale = () => {
    switch (lang) {
      case "da":
        return faIR;
      default:
        return enUS;
    }
  };

  const digitMap: any = {
    0: "۰",
    1: "۱",
    2: "۲",
    3: "۳",
    4: "۴",
    5: "۵",
    6: "۶",
    7: "۷",
    8: "۸",
    9: "۹",
  };

  const formatInAf = (formattedDate: string) => {
    let result = formattedDate;
    let number = "";

    if (lang === "pa") {
      const units: Dictionary = {
        years: dictionary["timestamp"]["year"],
        months: dictionary["timestamp"]["month"],
        weeks: dictionary["timestamp"]["week"],
        days: dictionary["timestamp"]["day"],
        hours: dictionary["timestamp"]["hour"],
        minutes: dictionary["timestamp"]["minute"],
        seconds: dictionary["timestamp"]["second"],
        about: dictionary["timestamp"]["about"],
        over: dictionary["timestamp"]["over"],
      };

      // Replace each time unit with its Pashto translation
      for (const unit in units) {
        result = result.replace(unit, units[unit]);
      }
    }

    const matches = result.match(/\d+/);
    if (matches && matches.length > 0) {
      number = matches[0];
      result = result.replace(number, "");
    }
    number = number.replace(
      /[0-9]/g,
      (match: string) => digitMap[parseInt(match)] || match
    );

    return { result, number };
  };

  const formatDate = (date: any) => {
    const locale = getCurrentLocale();
    return formatDistance(date, new Date(), { locale });
  };

  const formattedDate = formatDate(timestamp * 1000); // Convert timestamp to milliseconds
  let formattedDateAf: DateAf = { result: "", number: "" };
  //Pushto language not support by date-fns/locale.
  if (lang !== "en") {
    formattedDateAf = formatInAf(formattedDate);
  }

  return lang !== "en" ? (
    <div className="flex flex-row-reverse space-x-1">
      <div className="px-1">
        <Label>{formattedDateAf.number}</Label>
      </div>
      <div>
        <Label>{formattedDateAf.result}</Label>
      </div>
      <div>
        <Label>{dictionary["timestamp"]["ago"]}</Label>
      </div>
    </div>
  ) : (
    <div>
      <Label>
        {formattedDate} {dictionary["timestamp"]["ago"]}
      </Label>
    </div>
  );
};

export default RelativeTime;
