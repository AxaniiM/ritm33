'use client'
import { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import Logo from "@/public/icons/Logo";
import { Button } from "@nextui-org/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      linkName: 'aboutUs',
      name: 'О нас'
    },
    {
      linkName: 'services',
      name: 'Услуги'
    },
    {
      linkName: 'techStack',
      name: 'Технологии'
    },
  ];

  const handleMobileMenuChoice = () => {
    setIsMenuOpen(false)
  }

  return (
    <Navbar
      position="static"
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      isMenuOpen={isMenuOpen}
      className="lg:w-[1128px] w-auto lg:mx-auto mx-[2.5%]" >
      <NavbarContent className="lg:hidden" justify="start">
        <NavbarMenuToggle className="text-black" />
      </NavbarContent>
      <NavbarContent className="lg:hidden" justify="start">
        <NavbarBrand className="gap-2">
          <Logo />
          <p className="font-bold text-black">Ритм33</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden lg:flex gap-14" justify="center">
        <NavbarBrand className="flex flex-row gap-4">
          <Logo />
          <p className="font-bold text-black">Ритм33</p>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="#aboutUs">
            О нас
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#services">
            Услуги
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#techStack">
            Технологии
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#contact" className="bg-black hover:bg-white text-white border-2 border-transparent hover:border-black  hover:text-black  rounded-full p-2">Контакт</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="flex flex-col gap-4 items-center justify-center" >
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              onClick={handleMobileMenuChoice}
              className="text-black"
              href={`#${item.linkName}`}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarItem className="">
          <Link 
          onClick={handleMobileMenuChoice}
          href="#contact" className="bg-black hover:bg-white text-white border-2 border-transparent hover:border-black  hover:text-black  rounded-full p-2">Контакт</Link>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}

export default Navigation;