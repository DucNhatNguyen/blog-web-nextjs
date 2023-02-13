import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function AuthorCard(props) {
  const { data } = props;
  const [author, setAuthor] = useState({});
  useEffect(() => {
    console.log("authorrrrrrr", data);
    setAuthor(data);
  }, []);

  return (
    <div className="px-8 py-8 mt-3 text-gray-500 rounded-2xl bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
      <div className="flex flex-wrap items-start sm:space-x-6 sm:flex-nowrap">
        <div className="relative flex-shrink-0 w-24 h-24 mt-1 ">
          {true && (
            <Image
              src={require("../../public/thirteen.svg")}
              //loader={imageProps.loader}
              //blurDataURL={imageProps.blurDataURL}
              objectFit="cover"
              alt={author?.name}
              //placeholder="blur"
              layout="fill"
              className="rounded-full"
            />
          )}
        </div>
        <div>
          <div className="mb-3">
            <h4 className="text-lg font-medium text-gray-800 dark:text-gray-300">
              About {author?.name}
            </h4>
          </div>
          <div>{author?.bio}</div>
        </div>
      </div>
    </div>
  );
}
