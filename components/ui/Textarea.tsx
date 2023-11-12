import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textareaClass = cva(
  "block py-2.5 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-b-gray-800 peer"
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string; // Add a value prop to make the textarea controlled
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void; // Add an onChange handler
}

const Textarea: React.ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextareaProps
> = ({ className, children, value, onChange, ...props }, ref) => {
  return (
    <textarea
      className={cn(textareaClass({ className }))}
      ref={ref}
      value={value} // Bind the value to the prop
      onChange={onChange} // Bind the onChange event handler
      {...props}
    />
  );
};

export default React.forwardRef(Textarea);
