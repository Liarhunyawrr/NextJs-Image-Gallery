import HeroAlert from "@/components/HeroALert";
import { UnsplashUser } from "@/utils/tsModels";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: { username: string };
}

async function getUser(username: string): Promise<UnsplashUser> {
  const response = await fetch(
    `https://api.unsplash.com/users/${username}?client_id=QjbNhxfURhezV2VRwAl73TAs-J6ZVi9f_pf2E0jIjdc`
  );

  const userData: UnsplashUser = await response.json();
  if (userData.errors) {
    console.error(userData.errors);
    notFound();
  }
  return userData;
}

export async function generateMetadata({
  params: { username },
}: PageProps): Promise<Metadata> {
  const userData = await getUser(username);
  const capitalizedTag =
    userData.username.charAt(0).toUpperCase() +
    userData.username.slice(1).toLowerCase();

  return {
    title: `${capitalizedTag} - NextJs Image Gallery`,
  };
}

export default async function page({ params: { username } }: PageProps) {
  const userData = await getUser(username);
  return (
    <>
      <div className="">
        <HeroAlert
          data={
            "This profile page uses (generateMetadata) to set the( page title) dynamically from the API response."
          }
        />
      </div>

      <h1 className="text-xl m-2 capitalize font-semibold">
        {userData.username}
      </h1>
      <div className=" flex flex-col gap-3">
        <h1 className="">
          First Name :
          <span className="font-semibold"> {userData.first_name}</span>
        </h1>
        {userData.last_name && userData.last_name.length > 0 && (
  <h1 className="">
    Last Name:
    <span className="font-semibold"> {userData.last_name}</span>
  </h1>
)}
        <Link
          className="text-blue-600 hover:underline hover:text-blue-800 text-sm "
          target="_blank"
          href={`https://unsplash.com/${userData.username}`}
        >
          User Unsplash Profile
        </Link>
      </div>
    </>
  );
}
