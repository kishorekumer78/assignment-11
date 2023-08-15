import Link from "next/link";
import data from "@/data/blogData.json";

export default function Blog() {
  return (
    <>
      <div className="flex flex-col gap-y-4 text-center mt-10 w-[80%] mx-auto">
        <h1 className="font-bold text-[30px]">Super Blog Website</h1>
        <h2>Find posts with true evaluation</h2>
        <h3>Click Titles to read the posts</h3>
        <div className="mt-5 bg-gray-100">
          {data.posts.map((item, i) => (
            <Link href={`/post/${item.id}`} key={i}>
              <h1 className="card-title">
                <span>
                  {i + 1}
                  {"  "}
                </span>
                {item.title}
              </h1>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
