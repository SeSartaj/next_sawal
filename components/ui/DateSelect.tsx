import * as React from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import Icons from "../Icons";
import { Button } from "./Button";
import { enUS, faIR } from "date-fns/locale";
import { Calendar } from "./Calender";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover";

interface DateSelectProps {
  date: Date | undefined;
  onChange: any;
  lang: string;
  dictionary: any;
}

const DateSelect: React.FC<DateSelectProps> = ({
  lang,
  date,
  onChange,
  dictionary,
}) => {
  const [datePicked, setDate] = React.useState<Date>();
  const handleDateSelect = (selectedDate: any) => {
    onChange(selectedDate);
    setDate(selectedDate);
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !datePicked && "text-muted-foreground"
          )}
        >
          <Icons.CalendarIcon className="mr-2 h-4 w-4" />
          {datePicked ? format(datePicked, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={datePicked}
          onSelect={handleDateSelect}
          showOutsideDays={false}
          locale={lang == "en" ? enUS : faIR}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default DateSelect;
