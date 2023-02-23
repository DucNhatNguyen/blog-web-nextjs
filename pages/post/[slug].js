import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
import Link from "next/link";
import ErrorPage from "next/error";
import Layout from "../../components/layout";
import CategoryLabel from "../../components/blog/category";
import { parseISO, format } from "date-fns";
import axios from "axios";
import RightSideBar from "@/components/rightSideBar";

export default function Post({ data }) {
  const [post, setPost] = useState();
  const [author, setAuthor] = useState({});

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (!router.isFallback && !slug) {
      return <ErrorPage statusCode={404} />;
    }
    // const test = props.find((x) => x.slug.current === slug);
    // console.log("param", test.author);
    console.log("data", data);
    setPost(data);
    // setAuthor(test.author);
  }, [data, router.isFallback, slug]);

  return (
    <>
      <Layout>
        <div className="grid grid-cols-4 gap mt-7">
          <div className="col-span-3">
            {/*
          <div className="relative bg-white/20">
            <div className="absolute w-full h-full -z-10">
              {post?.mainImage && (
                <Image
                  {...GetImage(post.mainImage)}
                  alt={post.mainImage?.alt || "Thumbnail"}
                  layout="fill"
                  objectFit="cover"
                />
              )}
            </div>
            <Container className="py-48">
              <h1 className="relative max-w-3xl mx-auto mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl after:absolute after:w-full after:h-full after:bg-white after:inset-0 after:-z-10 after:blur-2xl after:scale-150">
                {post.title}
              </h1>
            </Container>
          </div> */}

            <div className="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg !pt-0">
              <div className="max-w-screen-md mx-auto ">
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
                          //blurDataURL={AuthorimageProps.blurDataURL}
                          //loader={AuthorimageProps.loader}
                          objectFit="cover"
                          alt={"thumbnail"}
                          //placeholder="blur"
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

            <div className="relative z-0 max-w-screen-lg mx-auto overflow-hidden lg:rounded-lg aspect-video">
              {true && (
                <Image
                  src={data.thumbnail}
                  //loader={imageProps.loader}
                  //blurDataURL={imageProps.blurDataURL}
                  alt={"Thumbnail"}
                  //placeholder="blur"
                  layout="fill"
                  loading="eager"
                  //objectFit="cover"
                />
              )}
            </div>

            {/* {post?.mainImage && <MainImage image={post.mainImage} />} */}
            <div className="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
              <article className="max-w-screen-md mx-auto ">
                <div className="mx-auto my-3 prose prose-base dark:prose-invert prose-a:text-blue-500">
                  <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
                </div>
                <div className="flex justify-center mt-7 mb-7  px-5 py-2 text-sm text-blue-600 rounded-full dark:text-blue-500 bg-brand-secondary/20 ">
                  <Link href="/">← View all posts</Link>
                </div>
                {/* {<AuthorCard data={author} />} */}
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
    `http://localhost:8080/api/web/post/${params.slug}`
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
    "http://localhost:8080/api/web/static-post-path"
  );

  return {
    paths: data || [],
    fallback: false,
  };
}
