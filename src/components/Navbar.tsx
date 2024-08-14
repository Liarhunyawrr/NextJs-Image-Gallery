"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();
  return (
    <nav className="border text-gray-600 py-5 rounded-b-lg items-center gap-8 flex px-4">
      <Link href={"/"}>
        <h1 className=" logo font-semibold sm:text-base  text-xl">
          NextJs Gallery{" "}
        </h1>
      </Link>
      <ul className="flex gap-6 sm:gap-3">
        <li>
          <Link
            href={"/static"}
            className={`${
              path === "/static" ? "font-semibold" : "opacity-75"
            } sm:text-sm`}
          >
            Static
          </Link>
        </li>
        <li>
          <Link
            href={"/dynamic"}
            className={`${
              path === "/dynamic" ? "font-semibold" : "opacity-75"
            } sm:text-sm`}
          >
            Dynamic
          </Link>
        </li>
        <li>
          <Link
            href={"/isr"}
            className={`${
              path === "/isr" ? "font-semibold" : "opacity-75"
            } sm:text-sm`}
          >
            ISR
          </Link>
        </li>
      </ul>
    </nav>
  );
}
