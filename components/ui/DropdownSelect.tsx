import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const selectClass = cva(
  "block py-2.5 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer"
);

export interface DropdownSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  isLoading?: boolean;
  options: any;
  placeholderLabel: string;
  dir: string
}

const DropdownSelect = React.forwardRef<HTMLSelectElement, DropdownSelectProps>(
  ({ className, children, isLoading, options, placeholderLabel, dir, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          className={cn(selectClass({ className }))}
          ref={ref}
          disabled={isLoading}
          {...props}
        >
          <option value="">{placeholderLabel}</option>
          {options.map((item: any) => (
            <option key={item.id} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <div className={`absolute inset-y-0 ${dir == "ltr" ? "right-0": "left-0"} flex items-center pr-2 pointer-events-none`}>
          <svg
            className="w-4 h-4 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    );
  }
);

DropdownSelect.displayName = "DropdownSelect";

export default DropdownSelect;
