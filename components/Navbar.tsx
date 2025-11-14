import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="py-7 border-b border-dark-200">
      <nav className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <Link href={"/"} className="flex items-center gap-1">
          <Image src={"/icons/logo.png"} alt="logo" width={24} height={24} />
          <p className="text-xl font-bold text-white">
            <span className="italic">Dev</span>Event
          </p>
        </Link>

        <ul className="text-white flex gap-6">
          <Link href={"/"} className="hover:underline">
            Home
          </Link>
          <Link href={"/"} className="hover:underline">
            Events
          </Link>
          <Link href={"/"} className="hover:underline">
            Create Event
          </Link>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
