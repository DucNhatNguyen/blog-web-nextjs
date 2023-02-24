import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Layout(props) {
  const { children } = props;
  return (
    <>
      <Head></Head>

      {/* <div className="antialiased text-gray-800 dark:bg-black dark:text-gray-400 flex flex-col min-h-screen"> */}
      <div className="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-2xl">
        <div className="grow">
          <Navbar {...props} />
          <div className="container px-9 py-5 lg:py-9 xl:px-6 max-w-screen-2xl">
            {children}
          </div>
        </div>

        <Footer {...props} />
      </div>
    </>
  );
}
