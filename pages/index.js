import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/layout";
import { Pagination } from "antd";
import PostList from "../components/postList";
import axios from "axios";
import RightSideBar from "@/components/rightSideBar";

export default function Home({ data }) {
  const router = useRouter();
  const [posts, setPosts] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const onChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    setPosts(paginate(data.latestPosts.posts, currentPage, 10));
  }, [currentPage, data]);

  return (
    <Layout>
      <div className="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
        <div className="grid gap-10 lg:gap-10 md:grid-cols-2 ">
          {data?.features.map((post) => (
            <PostList
              key={post.id}
              post={post}
              aspect="landscape"
              preloadImage={true}
            />
          ))}
        </div>

        <div className="grid grid-cols-4 gap mt-7">
          <div className="col-span-3">
            <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-2 ">
              {posts?.map((post) => (
                <PostList key={post.id} post={post} aspect="square" />
              ))}
            </div>
            <div className="mt-6">
              <Pagination
                current={currentPage}
                onChange={onChange}
                total={data?.latestPosts.total}
              />
            </div>
          </div>
          <div className="mt-6">
            <RightSideBar />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const { data } = await axios.get(`http://localhost:8080/api/web/home-page`);

  return {
    props: {
      data: data,
    },
  };
};

export const paginate = (items, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return Array.from(items).slice(startIndex, startIndex + pageSize); // 0, 9
};
