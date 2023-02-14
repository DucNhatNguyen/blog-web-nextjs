import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import { Inter } from "@next/font/google";
import PostList from "../../components/postList";
import path from "path";
import fsPromises from "fs/promises";

const inter = Inter({ subsets: ["latin"] });

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Category(props) {
  const [posts, setPosts] = useState(props.postdata);

  useEffect(() => {
    setPosts(props.postdata);
  }, [props]);

  return (
    <Layout>
      <div className="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-semibold tracking-tight lg:leading-tight text-brand-primary lg:text-5xl dark:text-white">
            Personal Growth
          </h1>
          <p className="mt-1 text-gray-600">5 Articles</p>
        </div>
        <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
          {posts?.map((post) => (
            <PostList key={post._id} post={post} aspect="square" />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "/testing/posts.json");
  const jsonData = await fsPromises.readFile(filePath);
  const list = JSON.parse(jsonData);

  return {
    props: list,
  };
}

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "/testing/posts.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    paths:
      objectData.postdata?.map((page) => ({
        params: {
          slug: page.slug.current,
        },
      })) || [],
    fallback: true,
  };
}
