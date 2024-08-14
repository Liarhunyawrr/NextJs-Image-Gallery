
export default function Home() {
  return (
    <>
      <div className="border bg-blue-100  my-4   py-4 px-5 rounded-md">
        <h1 className="">This is a sample project to showcase:</h1>
        <ul className=" my-3 sm:px-6 px-8 ">
          <li className="list-disc">
            static and dynamic server-side rendering
          </li>
          <li className="list-disc">incremental static regeneration</li>
          <li className="list-disc">client-side rendering</li>
          <li className="list-disc">route handlers (API endpoints)</li>
          <li className="list-disc">meta-data API</li>
          <li className="list-disc">and more</li>
        </ul>
        <h1>
          Every page uses a different approach to{" "}
          <b>fetching and caching data</b>. Click the links in the nav bar to
          try them out.
        </h1>
      </div>
    </>
  );
}
