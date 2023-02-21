import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/layout";
import { Col, Row, Pagination } from "antd";
import PostList from "../components/postList";
import axios from "axios";

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

        <Row style={{ marginTop: 50 }}>
          <Col span={16}>
            <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-2 ">
              {posts?.map((post) => (
                <PostList key={post.id} post={post} aspect="square" />
              ))}
            </div>
            <Pagination
              current={currentPage}
              onChange={onChange}
              total={data?.latestPosts.total}
            />
          </Col>
          <Col span={7} style={{ marginLeft: 40 }}>
            <div class="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
              <div class=" space-x-5 border-b-2 border-opacity-10 dark:border-violet-400">
                <p class=" text-xl font-bold uppercase border-b-1dark:border-violet-400">
                  Xem nhiều
                </p>
              </div>
              <div class="flex flex-col divide-y divide-gray-700">
                <div class="flex px-1 py-4">
                  <img
                    alt=""
                    class="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                    src="https://source.unsplash.com/random/244x324"
                  />
                  <div class="flex flex-col flex-grow">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      class="font-serif hover:underline"
                    >
                      Aenean ac tristique lorem, ut mollis dui.
                    </a>
                    <p class="mt-auto text-xs dark:text-gray-400">
                      5 minutes ago
                      <a
                        rel="noopener noreferrer"
                        href="#"
                        class="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline"
                      >
                        Politics
                      </a>
                    </p>
                  </div>
                </div>
                <div class="flex px-1 py-4">
                  <img
                    alt=""
                    class="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                    src="https://source.unsplash.com/random/245x325"
                  />
                  <div class="flex flex-col flex-grow">
                    <a href="#" class="font-serif hover:underline">
                      Nulla consectetur efficitur.
                    </a>
                    <p class="mt-auto text-xs dark:text-gray-400">
                      14 minutes ago
                      <a
                        href="#"
                        class="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline"
                      >
                        Sports
                      </a>
                    </p>
                  </div>
                </div>
                <div class="flex px-1 py-4">
                  <img
                    alt=""
                    class="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                    src="https://source.unsplash.com/random/246x326"
                  />
                  <div class="flex flex-col flex-grow">
                    <a href="#" class="font-serif hover:underline">
                      Vitae semper augue purus tincidunt libero.
                    </a>
                    <p class="mt-auto text-xs dark:text-gray-400">
                      22 minutes ago
                      <a
                        href="#"
                        class="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline"
                      >
                        World
                      </a>
                    </p>
                  </div>
                </div>
                <div class="flex px-1 py-4">
                  <img
                    alt=""
                    class="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                    src="https://source.unsplash.com/random/247x327"
                  />
                  <div class="flex flex-col flex-grow">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      class="font-serif hover:underline"
                    >
                      Suspendisse potenti.
                    </a>
                    <p class="mt-auto text-xs dark:text-gray-400">
                      37 minutes ago
                      <a
                        rel="noopener noreferrer"
                        href="#"
                        class="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline"
                      >
                        Business
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
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
