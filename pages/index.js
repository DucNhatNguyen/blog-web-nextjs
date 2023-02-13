import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import { Inter } from "@next/font/google";
import PostList from "../components/postList";
import useSWR from "swr";
import path from "path";
import fsPromises from "fs/promises";

const inter = Inter({ subsets: ["latin"] });

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home(props) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setPosts(props.postdata);
    console.log(props.postdata);
  }, []);

  return (
    <Layout>
      <div className="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
        <div className="grid gap-10 lg:gap-10 md:grid-cols-2 ">
          {posts.slice(0, 2).map((post) => (
            <PostList
              key={post._id}
              post={post}
              aspect="landscape"
              preloadImage={true}
            />
          ))}
        </div>
        <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
          {posts.map((post) => (
            <PostList key={post._id} post={post} aspect="square" />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "/testing/posts.json");
  const jsonData = await fsPromises.readFile(filePath);
  const list = JSON.parse(jsonData);

  return {
    props: list,
  };
}
