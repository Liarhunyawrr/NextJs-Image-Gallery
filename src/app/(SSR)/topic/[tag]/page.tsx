"use client";

import Loading from "@/app/loading";
import { PageProps, UnsplashImg, UnsplashUser } from "@/utils/tsModels";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Topic = ({ params: { tag } }: PageProps) => {
  const [imgsData, setimgsData] = useState<UnsplashImg[]>([]);
  const [loader, setloader] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setloader(true);
      const response = await fetch(
        `https://api.unsplash.com/photos/random?query=${tag}&count=10&client_id=QjbNhxfURhezV2VRwAl73TAs-J6ZVi9f_pf2E0jIjdc`
      );
      const data = await response.json();
      setimgsData(data);
      setloader(false);
    };
    fetchData();
  }, [tag]);

  return (
    <>
      {loader ? (
        <Loading />
      ) : (
        <div>
          <h1 className="my-6 font-bold text-xl text-gray-600">
            Showing Result of : <span className="capitalize">{tag}</span>
          </h1>
          <div className=" columns-4 mb-12 md:columns-3 sm:columns-2  gap-4 ">
            {imgsData.map((e, i) => (
              <div
                key={i}
                className="border-b-2 rounded-2xl  break-inside-avoid flex flex-col  items-center   relative my-6 sm:my-3 "
              >
                <Image
                  src={e.urls.raw}
                  className="rounded-md boxShadow  bg-gray-200 "
                  height={250}
                  width={250}
                  priority
                  alt=""
                />
                <h6 className="text-center my-2 text-sm">
                  by{" "}
                  <Link
                    href={`/user/${e.user.username}`}
                    className="text-blue-600 hover:underline hover:text-blue-800 text-sm"
                  >
                    {e.user.username}
                  </Link>{" "}
                </h6>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Topic;
