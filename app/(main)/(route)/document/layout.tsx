import { ReactNode } from "react";
import Sidebar from "./_components/sidebar";

const DocumentLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-full">
      <Sidebar />
      {children}
    </div>
  );
};

export default DocumentLayout;
