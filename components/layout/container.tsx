import { cn } from "@/lib/utils";
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  children: ReactNode;
};

const Container = ({ children, className, ...props }: Props) => {
  return (
    <>
      <div className={cn("w-full max-w-7xl mx-auto", className)} {...props}>
        {children}
      </div>
    </>
  );
};

export default Container;
