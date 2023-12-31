"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DoubleArrowLeftIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";
import { ElementRef, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { TiDocument } from "react-icons/ti";
import UserItem from "./user-item";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const Sidebar = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const documents = useQuery(api.documents.get);

  const pathname = usePathname(); // Collapse sidebar when Item is clicked
  const isResizingRef = useRef(false);
  const sidebarRef = useRef<ElementRef<"div">>(null);
  const navbarRef = useRef<ElementRef<"nav">>(null);
  const [isResetting, setResetting] = useState(false);
  const [isCollapsed, setCollapsed] = useState(isMobile);

  useEffect(() => {
    if (isMobile) collapseSidebar();
    else resetWidth();
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) collapseSidebar();
  }, [pathname, isMobile]);

  function handleMouseDown(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) {
    event.preventDefault();
    event.stopPropagation(); // TODO: Find what this does

    isResizingRef.current = true;
    document.addEventListener("mousemove", handleMousemove);
    document.addEventListener("mouseup", handleMouseup);
  }

  // Resize sidebar
  function handleMousemove(event: MouseEvent) {
    if (!isResizingRef.current) return;

    let newWidth = event.clientX;

    //TODO: Refactor these codes
    if (newWidth < 256) newWidth = 256;
    if (newWidth > 480) newWidth = 480;

    if (sidebarRef.current && navbarRef.current) {
      sidebarRef.current.style.width = `${newWidth}px`;
      navbarRef.current.style.setProperty("left", `${newWidth}px`);
      navbarRef.current.style.setProperty(
        "width",
        `calculate(100% - ${newWidth}px)`,
      );
    }
  }

  function handleMouseup() {
    isResizingRef.current = false;
    document.removeEventListener("mousemove", handleMousemove);
    document.removeEventListener("mouseup", handleMouseup);
  }

  function resetWidth() {
    if (sidebarRef.current && navbarRef.current) {
      setCollapsed(false);
      setResetting(true);

      sidebarRef.current.style.width = isMobile ? "100%" : "16rem";
      navbarRef.current.style.setProperty(
        "width",
        isMobile ? "0" : "calc(100% - 16rem)",
      );
      navbarRef.current.style.setProperty("left", isMobile ? "100%" : "16rem");

      // animate
      setTimeout(() => setResetting(false), 300);
    }
  }

  function collapseSidebar() {
    if (sidebarRef.current && navbarRef.current) {
      setCollapsed(true);
      setResetting(true);

      sidebarRef.current.style.width = "0";
      navbarRef.current.style.setProperty("width", "100%");
      navbarRef.current.style.setProperty("left", "0");

      // animate
      setTimeout(() => setResetting(false), 300);
    }
  }

  return (
    <>
      <div
        className={cn(
          "relative w-64 overflow-hidden",
          isResetting && "transition-all duration-300 ease-in-out",
          isMobile && "w-0",
        )}
        ref={sidebarRef}
      >
        <aside className="h-full w-full bg-muted/50 p-3">
          {/* Action Items */}
          <div className="flex w-full cursor-pointer select-none items-center justify-between gap-2 rounded-md p-1 transition">
            <UserItem />

            {/* Collapse sidebar */}
            <Button
              size="icon"
              variant="ghost"
              onClick={collapseSidebar}
              className={cn(null, isMobile && "opacity-100")}
            >
              <DoubleArrowLeftIcon />
            </Button>
          </div>

          {/* Documents  */}
          <div className="flex flex-col gap-1">
            {documents?.map((doc) => (
              <Button
                key={doc._id}
                variant="ghost"
                className="justify-start gap-2"
              >
                <TiDocument />
                {doc.title}
              </Button>
            ))}
          </div>
        </aside>

        {/* ------- Handle to resize the sidebar */}
        {/* increased padding for better user experience */}
        <div
          className="group/handle absolute right-0 top-0 flex h-full w-4 translate-x-1/2 cursor-col-resize justify-center"
          onMouseDown={handleMouseDown}
        >
          {/* ------- Actual handle */}
          <div className="h-full border-l border-primary/[0.1] transition group-hover/handle:border-l-2 group-hover/handle:border-primary/20" />
        </div>
      </div>
      <nav
        ref={navbarRef}
        className={cn(
          "w-[calc(100% - 16rem)] absolute left-64 top-0 z-[9]", //TODO: Check the z-index
          isResetting && "transition-all duration-300 ease-in-out",
          isMobile && "left-0 w-full",
        )}
      >
        {isCollapsed && (
          <Button variant="link" size="icon" onClick={resetWidth}>
            <HamburgerMenuIcon />
          </Button>
        )}
      </nav>
    </>
  );
};

export default Sidebar;
