import * as React from "react";
import { cn } from "@/lib/utils";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  onCopy?: React.ClipboardEventHandler<HTMLLabelElement>;
}

const Label = React.forwardRef<HTMLDivElement, LabelProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <label className={cn("text-sm text-gray-700", className)} {...props}>
        {children}
      </label>
    );
  }
);

Label.displayName = "Label";

export default Label;
