"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { ElementRef, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

const Sidebar = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const isResizingRef = useRef(false);
  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const navbarRef = useRef<ElementRef<"div">>(null);
  const [isResetting, setResetting] = useState(false);
  const [isCollapsed, setCollapsed] = useState(isMobile);

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
    if (newWidth < 240) newWidth = 240;
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

  return (
    <>
      <div className="relative">
        <aside
          className={cn(
            "h-full w-64 overflow-hidden bg-muted/50",
            isResetting && "transition-all duration-300 ease-in-out",
            isMobile && "w-0",
          )}
          ref={sidebarRef}
        >
          {/* Action Items */}
          <div className="flex w-full cursor-pointer select-none items-center justify-between rounded-md p-1 transition hover:bg-primary/5">
            <div className="flex items-center gap-3">
              {/* Avatar */}
              <div className="grid aspect-square h-7 place-items-center rounded-md bg-secondary text-xs font-bold">
                AI
              </div>

              <h3 className="text-sm uppercase opacity-70">Action Items</h3>
            </div>

            {/* Collapse sidebar */}
            <Button
              size="icon"
              variant="ghost"
              className={cn(null, isMobile && "opacity-100")}
            >
              <ChevronLeftIcon />
            </Button>
          </div>
        </aside>

        {/* ------- Handle to resize the sidebar */}
        {/* increased padding for better user experience */}
        <div
          className="group/handle absolute right-0 top-0 flex h-full w-4  translate-x-1/2 cursor-col-resize justify-center"
          onMouseDown={handleMouseDown}
          onClick={() => {}}
        >
          {/* ------- Actual handle */}
          <div className="h-full border-l border-primary/[0.1] transition group-hover/handle:border-l-2 group-hover/handle:border-primary/20" />
        </div>
      </div>
      <div
        ref={navbarRef}
        className={cn(
          "w-[calc(100% - 15rem)] absolute left-60 top-0 z-[999]",
          isResetting && "transition-all duration-300 ease-in-out",
          isMobile && "left-0 w-full",
        )}
      >
        <nav className="p-3">
          {isCollapsed && (
            <Button variant="ghost" size="icon">
              <HamburgerMenuIcon />
            </Button>
          )}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
