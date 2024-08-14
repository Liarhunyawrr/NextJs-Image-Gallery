import { PageProps, UnsplashImg } from "@/utils/tsModels";
import Image from "next/image";

export default async function page({ params: { tag } }: PageProps) {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?query${tag}&count=10&client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  );
  const images: UnsplashImg[] = await response.json();
  return (
    <>
      <div>
        {images.map((e, i) => (
          <div key={i}>
            {" "}
            <div className=" mx-auto flex-col gap-3 items-center  flex justify-center relative  my-6 ">
              <Image
                src={e.urls.raw}
                className="rounded-md bg-gray-600 "
                height={250}
                width={250}
                priority
                alt=""
              />
              <h6 className="text-center">by {e.user.username}</h6>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
