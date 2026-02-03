import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="flex items-center justify-between w-full max-w-2xl rounded-full border border-white/10 bg-surface/80 px-4 py-2 backdrop-blur-md shadow-2xl shadow-black/20">
        <Link href="/" className="shrink-0">
          <Image
            src="/profile.webp"
            alt="logo"
            width={40}
            height={40}
            className="rounded-full ring-2 ring-white/10 transition-transform hover:scale-110"
          />
        </Link>
        
        <div className="flex items-center gap-1 sm:gap-4">
          <Link
            href="#projects"
            className="text-sm font-medium text-muted hover:text-primary transition-colors px-3 py-2 rounded-full hover:bg-white/5">
            Projects
          </Link>
          <Link
            href="#experience"
            className="text-sm font-medium text-muted hover:text-primary transition-colors px-3 py-2 rounded-full hover:bg-white/5">
            Experience
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
