"use client";
import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircledIcon } from "@radix-ui/react-icons";

const Hero = () => {
  const { user } = useUser();

  if (!user) return;

  return (
    <div className="flex h-full flex-col items-center justify-center space-y-4">
      <HeroImage />
      <h2 className="text-lg font-medium">
        Welcome to {user.firstName}&apos;s space
      </h2>
      <Button>
        <PlusCircledIcon className="mr-2" />
        <p>Create a note</p>
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
