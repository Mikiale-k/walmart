import { Grid2x2, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center bg-walmart px-10 py-7 space-x-2">
      <Link href={"/"}>
        <Image
          src="https://links.papareact.com/yur"
          alt="logo"
          width={150}
          height={150}
        />
      </Link>
      <form className="flex items-center bg-white rounded-full w-full flex-1">
        <input
          type="text"
          placeholder="Search Everything"
          className="flex-1 px-4 rounded-l-full outline-none placeholder:text-sm"
        />
        <button>
          <Search className="rounded-full h-10 px-2 w-10 bg-yellow-400" />
        </button>
      </form>
      <div>
        <Link
          href={"/"}
          className="hidden md:flex text-white font-bold items-center space-x-2 text-sm"
        >
          <Grid2x2 size={20} />
          <p>Departments</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
