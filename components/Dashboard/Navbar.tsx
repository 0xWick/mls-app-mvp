"use client";

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-[100] text-center">
    <Menubar>
        <Link href={"/publicListings"}>
      <MenubarMenu>
        <MenubarTrigger>Public Listings</MenubarTrigger>
      </MenubarMenu>
      </Link>
      <Link href={"/myListings"}>
      <MenubarMenu>
        <MenubarTrigger>My Listings</MenubarTrigger>
      </MenubarMenu>
        </Link>
    </Menubar>
    </div>
  );
}

