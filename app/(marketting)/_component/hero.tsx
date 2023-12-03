import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const Hero = () => {
  return (
    <div className="grid h-full w-full flex-col place-content-center place-items-center gap-2 text-center">
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
    </div>
  );
};

export default Hero;
