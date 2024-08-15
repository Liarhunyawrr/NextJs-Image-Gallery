import HeroALert from "@/components/HeroALert";
import { UnsplashImg } from "@/utils/tsModels";
import { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Dynamic Fetching - NextJs Image Gallery",
};
export const revalidate = 0;
export default async function page() {
  const response = await fetch(
    `https://api.unsplash.com/photos/random/?client_id=QjbNhxfURhezV2VRwAl73TAs-J6ZVi9f_pf2E0jIjdc`
  );
  const image: UnsplashImg = await response.json();
  return (
    <>
      <div>
        <HeroALert
          data={
            "This page (fetches data dynamically). Every time you refresh the page, you get a new image from the Unsplash API."
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
