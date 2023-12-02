import Link from "next/link";

const Navbar = () => {
  return (
    <header className="p-3 border-b">
      <Link href="/" className="flex items-center gap-1">
        <span className="text-xl font-bold tracking-tight">Sqrible.</span>
      </Link>
    </header>
  );
};

export default Navbar;
