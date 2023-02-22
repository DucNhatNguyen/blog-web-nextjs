import React from "react";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import Image from "next/legacy/image";

export default function Navbar(props) {
  const menu = [
    {
      label: "Trang chủ",
      href: "/",
    },
    {
      label: "C# ASP.NET",
      href: "/asp-dot-net",
    },
    {
      label: "Thuật toán",
      href: "/althorism",
    },
    {
      label: "Công nghệ",
      href: "/security",
    },
    {
      label: "Về tác giả",
      href: "/about",
    },
    {
      label: "Liên hệ",
      href: "/contact",
    },
  ];

  const mobilemenu = [...menu];

  return (
    <div className="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
      <nav>
        <Disclosure>
          <div className="flex items-center justify-between ">
            <div className="flex-col items-center justify-start ">
              <Link href="/">
                <Image
                  src={require("../public/vercel.svg")}
                  alt="Logo"
                  width={112}
                  heigh={44.11}
                />
              </Link>
            </div>
            <div className="flex items-center justify-between w-full md:w-auto">
              {menu.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <Disclosure.Panel>
            <div className="flex flex-col items-center justify-start order-2 w-full md:hidden">
              {mobilemenu.map((item, index) => (
                <Link href={item.href} key={index}>
                  {item.label}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </Disclosure>
      </nav>
    </div>
  );
}
