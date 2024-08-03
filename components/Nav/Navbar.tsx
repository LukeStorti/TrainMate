import Link from "next/link";
import MaxWidthWrapper from "../Global/MaxWidthWrapper";
import logo from "../../public/images/logo.png";
import Image from "next/image";
import { Button } from "../ui/button";
import UserMenu from "./UserMenu";

const Navbar = () => {
  const user = false;
  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold items-center">
            <Image alt="logo" src={logo} width={25} height={25} className="object-contain" />
            Train<span className="text-primary">Mate</span>
          </Link>
          {user ? <UserMenu /> : <Button>Login</Button>}
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
