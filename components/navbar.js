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
    <nav className="bg-white px-8 mx-auto xl:px-5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <Disclosure>
        <div className="flex items-center justify-between px-9 min-[1920px]:px-96 2xl:px-44">
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
  );
}
