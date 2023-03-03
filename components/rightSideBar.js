import React, { useEffect, useState } from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import axios from "axios";
import { Input } from "antd";

export default function RightSideBar() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://blog-nodejs.onrender.com/api/web/post/get-with-view`
      );

      if (data != null) {
        setData(data.data);
      }
    };

    fetchData();
  }, []);

  const onSearch = (value) => {
    console.log(value);
  };
  return (
    <div className="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
      <section>
        <div className=" space-x-5 border-b-2 border-opacity-10 dark:border-violet-400">
          <p className=" text-xl font-bold uppercase border-b-1dark:border-violet-400">
            Xem nhiều
          </p>
        </div>
        <div className="flex flex-col divide-y divide-gray-700">
          {data?.map(function (x, i) {
            return (
              <div className="flex px-1 py-4 " key={i}>
                <img
                  alt=""
                  className="flex-shrink-0 object-cover w-20 rounded-lg h-20 mr-4 dark:bg-gray-500"
                  src={x.thumbnail}
                />
                <div className="flex flex-col flex-grow">
                  <a
                    rel="noopener noreferrer"
                    href={`/post/${x.slug}`}
                    className="font-serif hover:underline"
                  >
                    {x.title}
                  </a>
                  <p className="mt-auto text-xs dark:text-gray-400">
                    5 minutes ago
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline"
                    >
                      {x.author_author.name}
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
            <Input.Search
              placeholder="input search text"
              allowClear
              onSearch={onSearch}
              //style={{ width: 200 }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
