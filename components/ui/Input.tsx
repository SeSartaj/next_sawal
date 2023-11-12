import React, { useState } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Label from "./Label";
import { Locale } from "@/i18n-config";

const inputClass = cva(
  "block py-2.5 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer"
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string; // Add a value prop to make the input controlled
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Add an onChange handler
  label?: string;
  disabled: boolean;
  clearIcon?: boolean;
  cleanStateToggle?: any;
  lang?: Locale;
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    className,
    children,
    value,
    onChange,
    label,
    disabled,
    clearIcon,
    cleanStateToggle,
    lang,
    ...props
  },
  ref
) => {
  return (
    <div className="w-full">
      {label && value && <Label>{label}</Label>}
      <div className="relative">
        <input
          className={cn(inputClass({ className }))}
          ref={ref}
          value={value} // Bind the value to the prop
          onChange={onChange} // Bind the onChange event handler
          disabled={disabled}
          {...props}
        />
        {clearIcon && (
          <button
            className={`absolute ${
              lang ? (lang == "en" ? "right-0" : "left-0") : "right-0"
            } top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none`}
            onClick={() => cleanStateToggle()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 cursor-pointer"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11.414l3.536-3.536 1.414 1.414L11.414 10l3.536 3.536-1.414 1.414L10 11.414l-3.536 3.536-1.414-1.414L8.586 10 5.05 6.464l1.414-1.414L10 8.586l3.536-3.536 1.415 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default React.forwardRef(Input);
