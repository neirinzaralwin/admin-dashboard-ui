import Image from "next/image";
import Link from "next/link";
import logo from "../img/logo.png";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeToggler from "@/components/ThemeToggler";

const Navbar = () => {
  return (
    <div className="bg-primary dark:bg-slate-700 py-2 px-5 text-white flex justify-between">
      <Link href="/">
        <Image src={logo} alt="logo" height={40} />
      </Link>

      <div className="flex item-center">
        <ThemeToggler />
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <Avatar>
              <AvatarImage
                src="https://cdn.vectorstock.com/i/1000v/11/41/male-profile-picture-vector-2051141.jpg"
                alt="@shadcn"
              />
              <AvatarFallback className="text-black">NR</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
