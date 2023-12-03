import Logo from "@/app/Logo";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between p-3 text-gray-300">
      <div className="rounded-full bg-foreground">
        <Logo size={14} />
      </div>
      <p className="text-xs leading-none">© 2023 — Project Nought</p>
    </footer>
  );
};

export default Footer;
