"use client";
import { Navbar, Typography, Button, Input } from "@material-tailwind/react";
import Link from "next/link";

export function NavbarDark() {
  return (
    <Navbar
      variant="gradient"
      color="white"
      className="mx-auto max-w-screen-xl from-blue-gray-900 to-blue-gray-800 px-4 py-3"
    >
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5"
        >
          My Portfolio
        </Typography>
        <div className="ml-auto flex gap-1 md:mr-4">
          <div>
            <Link href="/">
              <Button variant="text" color="black">
                Home
              </Button>
            </Link>
          </div>
          <div>
            <Link href="/projects">
              <Button variant="text" color="black">
                Projects
              </Button>
            </Link>
          </div>
          <div>
            <Link href="/contact">
              <Button variant="text" color="black">
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Navbar>
  );
}
