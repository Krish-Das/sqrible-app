import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "@radix-ui/react-icons";

const Sidebar = () => {
  return (
    <div className="relative">
      <aside className="h-full w-64 overflow-hidden bg-muted/50">
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
          <Button size="icon" variant="ghost">
            <ChevronLeftIcon />
          </Button>
        </div>
      </aside>

      {/* ------- Handle to resize the sidebar */}
      {/* increased padding for better user experience */}
      <div className="group/handle absolute right-0 top-0 flex h-full w-4  translate-x-1/2 cursor-col-resize justify-center">
        {/* ------- Actual handle */}
        <div className="h-full border-l border-primary/[0.1] transition group-hover/handle:border-l-2 group-hover/handle:border-primary/20" />
      </div>
    </div>
  );
};

export default Sidebar;
