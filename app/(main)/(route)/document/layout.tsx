import { ReactNode } from "react";
import Sidebar from "./_components/sidebar";

const DocumentLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-1">
      <Sidebar />
      {children}
    </div>
  );
};

export default DocumentLayout;
