import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="grid h-full w-full flex-col place-content-center place-items-center gap-1 pt-16 text-center">
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
        Your Ideas, Documents & Plans. <br /> Unified. Welcome to{" "}
        <span className="underline underline-offset-2">Sqrible.</span>
      </h1>
      <h3 className="leading-tight text-gray-700">
        Sqrible is the connected workspace where <br /> better, faster work
        happens.
      </h3>
      <Button className="mt-3 w-fit">
        Enter Sqrible <ArrowRightIcon className="ml-2" />
      </Button>
      <HeroImage />
    </div>
  );
};

export default Hero;

function HeroImage() {
  return (
    <div className="flex max-w-5xl flex-col items-center justify-center">
      <div className="flex items-center">
        <div className="relative h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px]">
          <Image
            src="/hero_images/documents.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        <div className="relative hidden h-[400px] w-[400px] md:block">
          <Image
            src="/hero_images/reading.png"
            fill
            className="object-contain"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
