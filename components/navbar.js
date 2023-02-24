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
    <div className="">
      <nav class="bg-white px-2 mx-9 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a href="https://flowbite.com/" class="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-6 mr-3 sm:h-9"
              alt="Flowbite Logo"
            />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    // <div className="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-2xl sticky">
    //   <nav>
    //     <Disclosure>
    //       <div className="flex items-center justify-between ">
    //         <div className="flex-col items-center justify-start ">
    //           <Link href="/">
    //             <Image
    //               src={require("../public/vercel.svg")}
    //               alt="Logo"
    //               width={112}
    //               heigh={44.11}
    //             />
    //           </Link>
    //         </div>
    //         <div className="flex items-center justify-between w-full md:w-auto">
    //           {menu.map((item, index) => (
    //             <Link
    //               key={index}
    //               href={item.href}
    //               className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500"
    //             >
    //               {item.label}
    //             </Link>
    //           ))}
    //         </div>
    //       </div>
    //       <Disclosure.Panel>
    //         <div className="flex flex-col items-center justify-start order-2 w-full md:hidden">
    //           {mobilemenu.map((item, index) => (
    //             <Link href={item.href} key={index}>
    //               {item.label}
    //             </Link>
    //           ))}
    //         </div>
    //       </Disclosure.Panel>
    //     </Disclosure>
    //   </nav>
    // </div>
  );
}
