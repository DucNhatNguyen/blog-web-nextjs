import Layout from "../components/layout";
import Image from "next/legacy/image";
import Link from "next/link";
import path from "path";
import fsPromises from "fs/promises";
import { useEffect, useState } from "react";

export default function About({ data }) {
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    setAuthors(data.authors);
  }, []);

  return (
    <Layout>
      <div className="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-l">
        <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
          About
        </h1>
        <div className="text-center">
          <p className="text-lg">We are a small passionate team.</p>
        </div>

        <div className="grid grid-cols-3 gap-5 mt-6 mb-16 md:mt-16 md:mb-32 md:gap-16">
          {authors.slice(0, 3).map((author) => {
            return (
              <div
                key={author._id}
                className="relative overflow-hidden rounded-md aspect-square odd:translate-y-10 odd:md:translate-y-16"
              >
                <Image
                  src={require("../public/vercel.svg")}
                  alt={author.name || " "}
                  layout="fill"
                  objectFit="cover"
                  sizes="(max-width: 320px) 100vw, 320px"
                />
              </div>
            );
          })}
        </div>

        <div className="mx-auto prose text-center dark:prose-invert mt-14">
          <p>
            We provide real-time connectivity to enable software providers and
            financial institutions to build integrated products for their small
            business customers.
          </p>
          <p>
            Our API infrastructure is leveraged by clients ranging from lenders
            to corporate card providers and business forecasting tools, with use
            cases including automatic reconciliation, business dashboarding, and
            loan decisioning.
          </p>
          <p>
            <Link href="/contact">Get in touch</Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "/testing/authors.json");
  const jsonData = await fsPromises.readFile(filePath);
  const authors = JSON.parse(jsonData);
  return {
    props: {
      data: authors,
    },
    revalidate: 86400,
  };
}
