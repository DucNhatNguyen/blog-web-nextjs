import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/layout";
import { Pagination, Input } from "antd";
import PostList from "../components/postList";
import axios from "axios";
const { Search } = Input;
export default function Home({ data }) {
  const router = useRouter();
  const [posts, setPosts] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const onChange = (page) => {
    setCurrentPage(page);
  };

  const onSearch = (value) => {
    console.log(value);
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

        <div className="grid grid-cols-3 gap-4 mt-7">
          <div className="col-span-2">
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
            <div className="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
              <section>
                <div className=" space-x-5 border-b-2 border-opacity-10 dark:border-violet-400">
                  <p className=" text-xl font-bold uppercase border-b-1dark:border-violet-400">
                    Xem nhiều
                  </p>
                </div>
                <div className="flex flex-col divide-y divide-gray-700">
                  {Array.apply(0, Array(3)).map(function (x, i) {
                    return (
                      <div className="flex px-1 py-4 " key={i}>
                        <img
                          alt=""
                          className="flex-shrink-0 object-cover w-20 rounded-lg h-20 mr-4 dark:bg-gray-500"
                          src="https://source.unsplash.com/random/244x324"
                        />
                        <div className="flex flex-col flex-grow">
                          <a
                            rel="noopener noreferrer"
                            href="#"
                            className="font-serif hover:underline"
                          >
                            Aenean ac tristique lorem, ut mollis dui.
                          </a>
                          <p className="mt-auto text-xs dark:text-gray-400">
                            5 minutes ago
                            <a
                              rel="noopener noreferrer"
                              href="#"
                              className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline"
                            >
                              Politics
                            </a>
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              <section className="mt-6">
                <div className="flex flex-col divide-y divide-gray-700">
                  <div className="mt-6">
                    <iframe
                      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=300&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=716327869396513"
                      width={300}
                      height={400}
                      style={{ border: "none", overflow: "hidden" }} //"border:none;overflow:hidden"
                      scrolling="no"
                      frameBorder={0}
                      allowFullScreen={true}
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    ></iframe>
                  </div>
                </div>
              </section>

              <section className="mt-6">
                <div className=" space-x-5 border-b-2 border-opacity-10 dark:border-violet-400">
                  <p className=" text-xl font-bold uppercase border-b-1dark:border-violet-400">
                    Thẻ phổ biến
                  </p>
                </div>
                <div className="flex flex-col divide-y divide-gray-700">
                  <div className="mt-6">
                    <a
                      href="#"
                      className="ml-4 mb-3 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border"
                    >
                      Thuat toan
                    </a>
                    <a
                      href="#"
                      className="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border"
                    >
                      C#
                    </a>
                    <a
                      href="#"
                      className="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border"
                    >
                      .NET
                    </a>
                  </div>
                </div>
              </section>

              <section className="mt-6">
                <div className=" space-x-5 border-b-2 border-opacity-10 dark:border-violet-400">
                  <p className=" text-xl font-bold uppercase border-b-1dark:border-violet-400">
                    Tìm kiếm
                  </p>
                </div>
                <div className="flex flex-col divide-y divide-gray-700">
                  <div className="mt-6">
                    <Search
                      placeholder="input search text"
                      allowClear
                      onSearch={onSearch}
                      //style={{ width: 200 }}
                    />
                  </div>
                </div>
              </section>
            </div>
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
