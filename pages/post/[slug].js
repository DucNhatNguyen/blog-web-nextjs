import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
import Link from "next/link";
import ErrorPage from "next/error";
import Layout from "../../components/layout";
import CategoryLabel from "../../components/blog/category";
import { parseISO, format } from "date-fns";
import axios from "axios";
import RightSideBar from "@/components/rightSideBar";
import AuthorCard from "@/components/blog/authorCard";

export default function Post({ data }) {
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (!router.isFallback && !slug) {
      return <ErrorPage statusCode={404} />;
    }
    //console.log("data", data);
  }, [data, router.isFallback, slug]);

  return (
    <>
      <Layout>
        <Head>
          <title>{data.title}</title>
        </Head>
        <div className="grid grid-cols-4 gap mt-7">
          <div className="col-span-3 px-16">
            <div className="container py-5 lg:py-8 max-w-screen-lg !pt-0">
              <div className="max-w-screen-md ">
                <div className="flex ">
                  <CategoryLabel category={data.cate} />
                </div>

                <h1 className="text-gray-500 text-3xl font-bold tracking-tight uppercase lg:leading-snug text-brand-primary dark:text-white">
                  {data.title}
                </h1>

                <div className="flex mt-3 space-x-3 text-gray-500 ">
                  <div className="flex items-center gap-3">
                    <div className="relative flex-shrink-0 w-10 h-10 hidden">
                      {" "}
                      {/*Ẩn avatar tác giả */}
                      {true && (
                        <Image
                          src={require("../../public/vercel.svg")}
                          objectFit="cover"
                          alt={"thumbnail"}
                          layout="fill"
                          className="rounded-full"
                        />
                      )}
                    </div>
                    <div>
                      <p className="text-gray-800 dark:text-gray-400">
                        {/* {author.name} */}
                      </p>
                      <div className="flex items-center space-x-2 text-sm">
                        <time
                          className="text-gray-500 dark:text-gray-400"
                          dateTime={"2022-05-11T13:17:13Z"}
                        >
                          {format(
                            parseISO("2022-05-11T13:17:13Z"),
                            "MMMM dd, yyyy"
                          )}
                        </time>
                        <span>· {data.estReadingTime || "5"} min read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-0 max-w-screen-lg  overflow-hidden lg:rounded-lg aspect-video">
              <Image
                src={data.thumbnail}
                alt={"Thumbnail"}
                layout="fill"
                loading="eager"
                objectFit="cover"
              />
            </div>

            <div className="container px-8 py-5 lg:py-8 xl:px-5 max-w-screen-lg">
              <article className="max-w-screen-lg">
                <div className="mx-auto my-3 dark:prose-invert prose-a:text-blue-500">
                  <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
                </div>
                <div className="flex justify-center mt-7 mb-7  px-5 py-2 text-sm text-blue-600 rounded-full dark:text-blue-500 bg-brand-secondary/20 ">
                  <Link href="/">← View all posts</Link>
                </div>
                {<AuthorCard data={data.author_author} />}
              </article>
            </div>
          </div>
          <div className="mt-6">
            <RightSideBar />
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }) {
  const { data } = await axios.get(
    `https://blog-nodejs.onrender.com/api/web/post/${params.slug}`
  );

  return {
    props: {
      data: data,
    },
    revalidate: 86400,
  };
}

export async function getStaticPaths() {
  const { data } = await axios.get(
    "https://blog-nodejs.onrender.com/api/web/static-post-path"
  );

  return {
    paths: data || [],
    fallback: false,
  };
}
