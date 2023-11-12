import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva(
  "text-gray-800 text-center lg:text-left leading-tight tracking-tighter",
  {
    variants: {
      size: {
        default: "text-4xl md:text-5xl lg:text-6xl",
        lg: "text-5xl md:text-6xl lg:text-7xl",
        sm: "text-2xl md:text-3xl lg:text-4xl",
        xs: "text-1xl md:text-1xl lg:text-2xl",
        xxs: "text-sm md:text-sm lg:text-sm",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface PageHeaderProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  title: string;
  numberCount?: number;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  numberCount,
  children,
  className,
  size,
  ...props
}) => {
  return (
    <div className="items-baseline flex">
      <h1 {...props} className={cn(headingVariants({ size, className }))}>
        {title}
      </h1>
      {numberCount ? (
        <h2 className="text-gray-500 text-2xl px-4">{numberCount}</h2>
      ) : null}
    </div>
  );
};

export default PageHeader;
