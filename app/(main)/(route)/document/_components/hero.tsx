"use client";
import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

const Hero = () => {
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  function handleCreateNote() {
    const promise = create({ title: "Untitiled" });

    toast.promise(
      promise,
      // Define states
      {
        loading: "Createing new note...",
        success: "New note created.",
        error: "Failed to create a new note!",
      },
    );
  }

  if (!user) return;

  return (
    <div className="flex h-full flex-col items-center justify-center space-y-4">
      <HeroImage />
      <h2 className="text-lg font-medium">
        Welcome to {user.firstName}&apos;s space
      </h2>
      <Button onClick={handleCreateNote}>
        <PlusCircledIcon className="mr-2" />
        Create a note
      </Button>
    </div>
  );
};

export default Hero;

function HeroImage() {
  const imageSize = 300;

  return (
    <>
      <Image
        src="/hero_images/empty.png"
        height={imageSize}
        width={imageSize}
        alt=""
        className="dark:hidden"
      />
      <Image
        src="/hero_images/empty-dark.png"
        height={imageSize}
        width={imageSize}
        alt=""
        className="hidden dark:block"
      />
    </>
  );
}
