"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useConvexAuth } from "convex/react";
import { SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";
import Spinner from "@/components/ui/spinner";

const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <header className="flex h-14 items-center justify-between border-b p-3">
      <Link href="/" className="text-xl font-bold tracking-tight">
        Sqrible.
      </Link>

      <div className="flex items-center gap-2">
        {isLoading && <Spinner className="mr-5" />}
        {!isAuthenticated && !isLoading && (
          <>
            <Button variant="ghost" size="sm" asChild>
              <SignInButton mode="modal" afterSignInUrl="/document">
                Log In
              </SignInButton>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <SignUpButton mode="modal" afterSignUpUrl="/document">
                Sign up for free
              </SignUpButton>
            </Button>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant="outline" size="default" asChild>
              <Link href="/">Enter Sqrible</Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
