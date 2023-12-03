const Sidebar = () => {
  return (
    <div className="relative w-56 pr-2">
      <aside className="h-full bg-muted/50 p-2 py-3">
        <div className="h-10 w-full rounded-md bg-primary/5" />
      </aside>

      {/* ------- Handle to resize the sidebar */}
      <div className="group/handle absolute right-0 top-0 flex h-full w-4 cursor-col-resize  justify-center">
        <div className="h-full border-l border-primary/[0.1] group-hover/handle:border-l-2 group-hover/handle:border-primary/20" />
      </div>
    </div>
  );
};

export default Sidebar;
