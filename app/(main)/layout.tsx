"use client";
import Spinner from "@/components/ui/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading)
    return (
      <div className="grid flex-1 place-items-center">
        <Spinner />
      </div>
    );

  if (!isAuthenticated) return redirect("/");

  return <>{children}</>;
};

export default MainLayout;
