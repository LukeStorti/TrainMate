"use client";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { MENULINKS } from "@/constants";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DropdownMenu modal={false} open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger>
        <Menu />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-[200] w-[180px] flex flex-col items-center" side="bottom">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {MENULINKS.map((item) => (
          <DropdownMenuItem key={item.label} className="w-full text-center">
            <Link href={item.href} className="w-full" onClick={() => setIsOpen(false)}>
              {item.label}
            </Link>
          </DropdownMenuItem>
        ))}
        <Button size="sm" className="w-full mt-2" variant="secondary">
          Sign out
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
