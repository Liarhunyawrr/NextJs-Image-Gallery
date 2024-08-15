import { PageProps, UnsplashImg } from "@/utils/tsModels";
import { Metadata } from "next";
import Image from "next/image";

export function generateStaticParams() {
  return ["coding", "dark", "fitness"];
}

// export const revalidate = 0;
export function generateMetadata({ params: { tag } }: PageProps) {
  const capitalizedTag =
    tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase();

  return {
    title: `${capitalizedTag} - NextJs Image Gallery`,
  };
}
export default async function page({ params: { tag } }: PageProps) {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?query=${tag}&count=10&client_id=QjbNhxfURhezV2VRwAl73TAs-J6ZVi9f_pf2E0jIjdc`
  );

  const images: UnsplashImg[] = await response.json();
  return (
    <>
      <h1 className="my-6 font-bold text-xl text-gray-600">
        Showing Result of : <span className="capitalize">{tag}</span>
      </h1>
      <div className=" columns-4 mb-12 md:columns-3 sm:columns-2  gap-4 ">
        {images.map((e, i) => (
          <div
            key={i}
            className="border-b-2 rounded-2xl  break-inside-avoid flex flex-col  items-center   relative my-6 sm:my-3 "
          >
            <Image
              src={e.urls.raw}
              className="rounded-md boxShadow  bg-gray-600 "
              height={250}
              width={250}
              priority
              alt=""
            />
            <h6 className="text-center my-2 text-sm">by {e.user.username}</h6>
          </div>
        ))}
      </div>
    </>
  );
}
