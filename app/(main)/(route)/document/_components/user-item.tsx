"use client";

const UserItem = () => {
  return (
    <>
      {/* Avatar */}
      <div className="grid aspect-square h-7 place-items-center rounded-md bg-secondary text-xs font-bold">
        AI
      </div>

      <h3 className="truncate text-sm uppercase opacity-70">User Name</h3>
    </>
  );
};

export default UserItem;
