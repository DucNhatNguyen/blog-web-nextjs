import Image from "next/legacy/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function AuthorCard(props) {
  const { data } = props;

  useEffect(() => {
    //console.log("authorrrrrrr", data);
  }, []);

  return (
    <div className="px-8 py-8 mt-3 text-gray-500 rounded-2xl bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
      <div className="flex flex-wrap items-start sm:space-x-6 sm:flex-nowrap">
        <div className="relative flex-shrink-0 w-24 h-24 mt-1 ">
          <Image
            src={data.avatar}
            objectFit="cover"
            alt={data?.name}
            layout="fill"
            className="rounded-full"
          />
        </div>
        <div>
          <div className="mb-3">
            <h4 className="text-lg font-medium text-gray-800 dark:text-gray-300">
              {data?.name}
            </h4>
          </div>
          <div>{data?.bio}</div>
          <div className="flex flex-row mt-3">
            {data.facebook && (
              <div className="mr-5">
                <Link href={data.facebook}>
                  <img
                    alt="svgImg"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCA0OCA0OCI+CjxsaW5lYXJHcmFkaWVudCBpZD0iTGQ2c3FydGN4TXlja0VsNnhlRGRNYV91TFdWNUE5dlhJUHVfZ3IxIiB4MT0iOS45OTMiIHgyPSI0MC42MTUiIHkxPSI5Ljk5MyIgeTI9IjQwLjYxNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzJhYTRmNCI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwN2FkOSI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZmlsbD0idXJsKCNMZDZzcXJ0Y3hNeWNrRWw2eGVEZE1hX3VMV1Y1QTl2WElQdV9ncjEpIiBkPSJNMjQsNEMxMi45NTQsNCw0LDEyLjk1NCw0LDI0czguOTU0LDIwLDIwLDIwczIwLTguOTU0LDIwLTIwUzM1LjA0Niw0LDI0LDR6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI2LjcwNywyOS4zMDFoNS4xNzZsMC44MTMtNS4yNThoLTUuOTg5di0yLjg3NGMwLTIuMTg0LDAuNzE0LTQuMTIxLDIuNzU3LTQuMTIxaDMuMjgzVjEyLjQ2IGMtMC41NzctMC4wNzgtMS43OTctMC4yNDgtNC4xMDItMC4yNDhjLTQuODE0LDAtNy42MzYsMi41NDItNy42MzYsOC4zMzR2My40OThIMTYuMDZ2NS4yNThoNC45NDh2MTQuNDUyIEMyMS45ODgsNDMuOSwyMi45ODEsNDQsMjQsNDRjMC45MjEsMCwxLjgyLTAuMDg0LDIuNzA3LTAuMjA0VjI5LjMwMXoiPjwvcGF0aD4KPC9zdmc+"
                  />
                </Link>
              </div>
            )}
            {data.youtube && (
              <div>
                <Link href={data.youtube}>
                  <img
                    alt="svgImg"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiNGRjNEMDAiIGQ9Ik00My4yLDMzLjljLTAuNCwyLjEtMi4xLDMuNy00LjIsNGMtMy4zLDAuNS04LjgsMS4xLTE1LDEuMWMtNi4xLDAtMTEuNi0wLjYtMTUtMS4xYy0yLjEtMC4zLTMuOC0xLjktNC4yLTRDNC40LDMxLjYsNCwyOC4yLDQsMjRjMC00LjIsMC40LTcuNiwwLjgtOS45YzAuNC0yLjEsMi4xLTMuNyw0LjItNEMxMi4zLDkuNiwxNy44LDksMjQsOWM2LjIsMCwxMS42LDAuNiwxNSwxLjFjMi4xLDAuMywzLjgsMS45LDQuMiw0YzAuNCwyLjMsMC45LDUuNywwLjksOS45QzQ0LDI4LjIsNDMuNiwzMS42LDQzLjIsMzMuOXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMjAgMzFMMjAgMTcgMzIgMjR6Ij48L3BhdGg+Cjwvc3ZnPg=="
                  />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
