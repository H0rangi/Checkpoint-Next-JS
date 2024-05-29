"use client"
import {
    Navbar,
    Typography,
    Button,
    Input,
  } from "@material-tailwind/react";
   
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
          <Button variant="text" color="black">
              Home
            </Button>
            <Button variant="text" color="black">
              Contact
            </Button>
            <Button variant="text" color="black">
              Skills
            </Button>
          </div>
          
        </div>
      </Navbar>
    );
  }