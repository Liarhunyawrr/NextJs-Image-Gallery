import HeroALert from "@/components/HeroALert";
import { UnsplashImg } from "@/utils/tsModels";
import { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Incremental Static Regeneration - NextJs Image Gallery",
};
export const revalidate = 15;
export default async function page() {
  const response = await fetch(
    `https://api.unsplash.com/photos/random/?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  );
  const image: UnsplashImg = await response.json();

  return (
    <>
      <div>
        <HeroALert
          data={
            "This page uses (incremental static regeneration). A new image is fetched every 15 seconds (after refreshing the page) and then served from the cache for that duration."
          }
        />
      </div>
      <div className=" mx-auto flex-col gap-3 items-center flex justify-center relative  my-6 ">
        <Image
          src={image.urls.raw}
          className="rounded-md bg-gray-200 "
          height={300}
          width={300}
          priority
          alt=""
        />
        <h6 className="text-center">by {image.user.username}</h6>
      </div>
    </>
  );
}
