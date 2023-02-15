import Image from "next/legacy/image";
import Link from "next/link";
import { parseISO, format } from "date-fns";
import { PhotographIcon } from "@heroicons/react/outline";
import CategoryLabel from "../components/blog/category";

export default function PostList({ post, aspect }) {
  return (
    <>
      <div className="cursor-pointer group">
        <div
          className={`relative overflow-hidden transition-all bg-gray-100 rounded-md dark:bg-gray-800   hover:scale-105 aspect-video ${
            aspect === "landscape" ? "aspect-video" : "aspect-square"
          }`}
        >
          <Link href={`/post/${post.slug}`}>
            {post.thumbnail ? (
              <img
                src={post.thumbnail}
                className="transition-all"
                object-fit="cover"
              />
            ) : (
              <span className="absolute w-16 h-16 text-gray-200 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <PhotographIcon />
              </span>
            )}
          </Link>
        </div>
        <CategoryLabel categories={post.cate} />
        <h2 className="mt-2 text-lg font-semibold tracking-normal text-brand-primary dark:text-white">
          <Link href={`/post/${post.slug}`}>
            <span
              className="     bg-gradient-to-r from-green-200 to-green-100 dark:from-purple-800 dark:to-purple-900
          bg-[length:0px_10px]
          bg-left-bottom
          bg-no-repeat
          transition-[background-size]
          duration-500
          hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]"
            >
              {post.title}
            </span>
          </Link>
        </h2>

        {/* <div className="hidden">
          {post.excerpt && (
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
              <Link href={`/post/${post.slug.current}`}>{post.excerpt}</Link>
            </p>
          )}
        </div> */}

        <div className="flex items-center mt-3 space-x-3 text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-3">
            {/* <div className="relative flex-shrink-0 w-5 h-5">
              {post.author.image && (
                <Image
                  src={require("../public/thirteen.svg")}
                  //blurDataURL={AuthorimageProps.blurDataURL}
                  //loader={AuthorimageProps.loader}
                  sizes="30px"
                  width={800}
                  height={764}
                  className="rounded-full"
                  alt="thumbnail"
                />
              )}
            </div> */}
            <span className="text-sm">{post.author_author.name}</span>
          </div>
          <span className="text-xs text-gray-300 dark:text-gray-600">
            &bull;
          </span>
          <time
            className="text-sm"
            dateTime={post?.publicdate || post.createdAt}
          >
            {format(
              parseISO(post?.publicdate || post.createdAt),
              "MMMM dd, yyyy"
            )}
          </time>
        </div>
      </div>
    </>
  );
}
