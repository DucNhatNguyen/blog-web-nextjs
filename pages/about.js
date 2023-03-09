import { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import Image from "next/legacy/image";
import Link from "next/link";
import axios from "axios";

export default function About({ data }) {
  return (
    <Layout>
      <Head>
        <title>About me</title>
      </Head>
      <div className="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-l">
        <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
          About me
        </h1>
        <div className="text-center">
          <p className="text-lg px-80">
            Cảm ơn bạn đã để ý tới trang cá nhân của mình, thông tin về mình và
            những kỹ năng, project từ nay sẽ được update tại trang dưới đây.
          </p>
        </div>

        <div className="text-center">
          <div className="">
            <Image
              src={data.avatar}
              alt={data.name || " "}
              //layout="fill"
              objectFit="cover"
              width={320}
              height={320}
            />
          </div>
        </div>

        <div className="mx-auto prose text-center dark:prose-invert">
          <p>{data.bio}</p>
          <p>
            <Link href="/contact">Get in touch</Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const { data } = await axios.get(`https://blog-nodejs.onrender.com/api/web/page/author`);

  return {
    props: {
      data: data,
    },
  };
};
