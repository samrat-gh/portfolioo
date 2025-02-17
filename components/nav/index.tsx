import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="container mx-auto max-w-3xl py-4 px-7 md:px-12 flex justify-between items-center font-semibold mt-4 rounded-md">
      <div>
        <Image
          src="/profile.webp"
          alt="logo"
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>
      <Link
        href="/"
        target="_blank"
        className="hover:text-cyan-400 py-2 px-2 hover:rounded-md">
        Projects
      </Link>
      <Link
        href="/"
        target="_blank"
        className="hover:text-cyan-400 py-2 px-2 hover:rounded-md">
        Experience
      </Link>
      {/* <Link
        href="/"
        target="_blank"
        className="hover:text-cyan-400 py-2 px-2 hover:rounded-md hover:bg-blue-900">
        <Github className="inline" />
      </Link>
      <Link
        href="/"
        target="_blank"
        className="hover:text-cyan-400 py-2 px-2 hover:rounded-md hover:bg-blue-900">
        <Linkedin className="inline" />
      </Link>
      <Link
        href="/"
        target="_blank"
        className="hover:text-cyan-400 py-2 px-2 hover:rounded-md hover:bg-blue-900">
        <Twitter className="inline" />
      </Link> */}
    </div>
  );
};

export default Navbar;
