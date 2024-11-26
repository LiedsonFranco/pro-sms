import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./Toggle";
import NavLinks from "./NavLinks";
import { signIn, auth } from "@/auth"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import UserProfile from "./UserProfile";
import { Button } from "./ui/button";
import Form from "next/form";
export const Navbar = async () => {
  const session = await auth()
  return (
    <nav className="md:flex hidden gap-6 justify-between items-center py-3 sticky top-0 backdrop-blur-xl  px-[5%] mx-auto text-base mb-10 z-50">
      <ul className="gap-6 items-center w-full flex">
        <li className="mr-10">
          <Link href={"#"}>
            Logo
          </Link>
        </li>
        <li>
          <NavLinks href="/" name="Home" />
        </li>
        <li>
          <NavLinks href="/pins" name="Pins" />
        </li>
        <li>
          <NavLinks href="/tips" name="Tips" />
        </li>
      </ul>
      <div className="flex items-center gap-6 font-medium ">
        <ModeToggle />
        {session ? (
          <UserProfile />
        ) : (
          <form
            action={async () => {
              "use server"
              await signIn()
            }}
          >
            <Button type="submit" className="bg-black dark:text-black dark:border-white border text-white py-[10px] px-5 rounded-[20px] font-bold md:block flex-row hidden items-center justify-center">Sign in</Button>
            <Link href="/signup" className="bg-black dark:text-black dark:border-white border text-white py-[10px] px-5 rounded-[20px] font-bold md:block flex-row hidden items-center justify-center">Sign up</Link>
          </form>

        )}
      </div>
    </nav>
  );
};

export const MobileNavbar = async () => {
  const session = await auth()

  return (
    <nav className="flex md:hidden gap-6 justify-between items-center py-3 sticky top-0 backdrop-blur-lg px-[2%] mx-auto text-base mb-14 z-50">
      <Link href={'/'}>
        <Image src={'/logo.png'} alt="Project hunter logo" width={258} height={44} className="object-contain" />

      </Link>
      <div className="flex items-center gap-6 font-medium ">
        <ModeToggle />
        {session ?
          <UserProfile />
          :
          <></>
        }
        {session ?
          <></>
          :
          <Form
            action={async () => {
              "use server"
              await signIn()
            }}
          >
            <Button type="submit" className="bg-login dark:text-black text-white py-[5px] px-5 rounded-sm font-bold md:hidden flex-row flex">Sign in</Button>
          </Form>
        }
        <Sheet>
          <SheetTrigger><HamburgerMenuIcon /></SheetTrigger>
          <SheetContent className="max-w-[300px]">
            <ul className="flex flex-col gap-6 mt-6">
              <li>
                <NavLinks href="/" name="Home" />
              </li>
              <li>
                <NavLinks href="/challenge" name="Challenge" />
              </li>
              <li>
                <NavLinks href="/pins" name="Pins" />
              </li>
              <li>
                <NavLinks href="/tips" name="News" />
              </li>


            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

