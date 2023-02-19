import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/legacy/image";
import Layout from "../components/layout";
import { Inter } from "@next/font/google";
import PostList from "../components/postList";
import axios from "axios";

export default function Home({ data }) {
  const [posts, setPosts] = useState();
  useEffect(() => {
    console.log("dadaadad", data);
    setPosts(data);
  }, []);

  return (
    <Layout>
      <div className="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
        <div className="grid gap-10 lg:gap-10 md:grid-cols-2 ">
          {posts?.features.map((post) => (
            <PostList
              key={post.id}
              post={post}
              aspect="landscape"
              preloadImage={true}
            />
          ))}
        </div>
        <h1 className="mt-20 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
          .NET
        </h1>
        <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
          {posts?.netBlog.map((post) => (
            <PostList key={post.id} post={post} aspect="square" />
          ))}
        </div>
        <h1 className="mt-20 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
          Giai Tri
        </h1>
        <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
          {posts?.relaxBlog.map((post) => (
            <PostList key={post.id} post={post} aspect="square" />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const { data } = await axios.get(
    "https://blog-nodejs.onrender.com/api/web/home-page"
  );

  return {
    props: {
      data: data,
    },
    revalidate: 86400,
  };
};
