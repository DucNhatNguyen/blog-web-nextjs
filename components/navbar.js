import React from "react";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import Image from "next/legacy/image";

export default function Navbar(props) {
  const leftmenu = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  const rightmenu = [
    {
      label: "Archive",
      href: "/archive",
    },
    {
      label: "Pro Version",
      href: "https://stablo-pro.web3templates.com/",
      external: true,
      badge: "new",
    },
    {
      label: "Download",
      href: "https://web3templates.com/templates/stablo-minimal-blog-website-template",
      external: true,
    },
  ];

  const mobilemenu = [...leftmenu, ...rightmenu];

  return (
    <div className="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
      <nav>
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap justify-between md:gap-10 md:flex-nowrap">
                <div className="flex-col items-center justify-start order-1 hidden w-full md:flex md:flex-row md:justify-end md:w-auto md:order-none md:flex-1">
                  {leftmenu.map((item, index) => (
                    // <Link href={item.href} key={index}>
                    <Link
                      key={index}
                      href={item.href}
                      className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500"
                    >
                      {item.label}
                    </Link>
                    //{item.label}
                    //</Link>
                  ))}
                </div>
                <div className="flex items-center justify-between w-full md:w-auto">
                  <Link href="/">
                    {true ? (
                      <Image
                        src={require("../public/vercel.svg")}
                        alt="Logo"
                        width={112}
                        heigh={44.11}
                        sizes="(max-width: 640px) 100vw, 200px"
                        priority={true}
                      />
                    ) : (
                      <span className="block text-center">Stabldo</span>
                    )}
                  </Link>

                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="px-2 py-1 ml-auto text-gray-500 rounded-md md:hidden focus:text-blue-500 focus:outline-none dark:text-gray-300 "
                  >
                    <svg
                      className="w-6 h-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      {open && (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      )}
                      {!open && (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>
                </div>

                <div className="flex-col items-center justify-start order-2 hidden w-full md:flex md:flex-row md:w-auto md:flex-1 md:order-none">
                  {rightmenu.map((item, index) => (
                    // <Link href={item.href} key={index}>
                    <Link
                      key={index}
                      href={item.href}
                      className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500"
                    >
                      {item.label}
                    </Link>
                    //{item.label}
                    //</Link>
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
            </>
          )}
        </Disclosure>
      </nav>
    </div>
  );
}
