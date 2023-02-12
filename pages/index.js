import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import { Inter } from "@next/font/google";
import PostList from "../components/postList";
import postsJson from "../testing/posts.json";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  //const [posts, setPost] = useState([]);
  const posts = postsJson.pageProps.pagedata;
  useEffect(() => {
    // fetch(
    //   "https://stablo-template.vercel.app/_next/data/8_OIpUkTzfalgHfmRRp2v/index.json"
    // ).then(async (res) => {
    //   const dt = await res.json();
    //   console.log("data", dt);
    //   setPost(dt);
    // });
  }, []);

  return (
    <Layout>
      <div className="grid gap-10 lg:gap-10 md:grid-cols-2 ">
        {postsJson.pageProps.pagedata.map((post) => (
          <PostList
            key={post._id}
            post={post}
            aspect="landscape"
            preloadImage={true}
          />
        ))}
      </div>
      <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
        {postsJson.pageProps.pagedata.map((post) => (
          <PostList key={post._id} post={post} aspect="square" />
        ))}
      </div>
    </Layout>
  );
}
