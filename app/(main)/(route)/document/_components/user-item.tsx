"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SignOutButton, useUser } from "@clerk/clerk-react";
import { CaretSortIcon } from "@radix-ui/react-icons";

const UserItem = () => {
  const { user } = useUser();

  if (!user) return;

  // @ts-ignore
  function getUserInitial(user) {
    // TODO: Check for Null values
    const firstName = user.firstName;
    const lastName = user.lastName;

    const initial = firstName[0] + lastName[0];
    return initial;
  }

  return (
    <div className="flex w-full items-center gap-3">
      <DropdownMenu>
        <DropdownMenuTrigger className="w-full" asChild>
          <Button className="flex justify-between" variant="secondary">
            <UserDetails user={user} userInitial={getUserInitial(user)} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-80" align="start" forceMount>
          <div className="flex flex-col gap-3 p-3">
            <p className="text-xs font-medium leading-none text-muted-foreground">
              {user.emailAddresses[0].emailAddress}
            </p>
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={user.imageUrl} />
                <AvatarFallback className="text-xs font-bold">
                  {getUserInitial(user)}
                </AvatarFallback>
              </Avatar>

              <p className="line-clamp-1 text-sm">
                {user.fullName}&apos;s Sqrible
              </p>
            </div>
          </div>

          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Button asChild className="w-full" variant="secondary">
              <SignOutButton />
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserItem;

// @ts-ignore //TODO: Fix this
function UserDetails({ user, userInitial }: { user; userInitial: string }) {
  return (
    <>
      <div className="flex items-center justify-start gap-2">
        <Avatar className="h-6 w-6">
          <AvatarImage src={user.imageUrl} />
          <AvatarFallback className="text-xs font-bold">
            {userInitial}
          </AvatarFallback>
        </Avatar>

        <h3 className="text-star tracking line-clamp-1 truncate text-base font-bold opacity-80">
          {user.fullName}
        </h3>
      </div>

      <CaretSortIcon className="justify-self-end" />
    </>
  );
}
