import Link from "next/link";

const Navbar = () => {
  return (
    <header className="border-b p-3">
      <Link href="/" className="text-xl font-bold tracking-tight">
        Sqrible.
      </Link>
    </header>
  );
};

export default Navbar;
