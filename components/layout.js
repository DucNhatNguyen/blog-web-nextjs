import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Layout(props) {
  const { children } = props;
  return (
    <>
      <Head></Head>

      <div className="antialiased text-gray-800 dark:bg-black dark:text-gray-400 flex flex-col min-h-screen">
        <div className="grow">
          <Navbar {...props} />
          <div>{children}</div>
        </div>

        <Footer {...props} />
      </div>
    </>
  );
}
