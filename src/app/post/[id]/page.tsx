import Link from "next/link";
import data from "@/data/blogData.json";
import styles from "./styles.module.css";

const getPost = (id: number) => {
  const post = data.posts.find((x) => x.id === id);

  if (post) {
    return post;
  } else {
    return null;
  }
};
export default function Post({ params }: any) {
  const id = params.id;
  const post = getPost(Number(id));
  return (
    <>
      {post ? (
        <div className="card w-2/4 bg-base-100 shadow-xl mx-auto mt-28">
          <div className="card-body">
            <h2 className="card-title text-center">{post?.title}</h2>
            <p>{post?.body}</p>
            <p className="text-end">Published on : {post?.date}</p>
            <div className="card-actions justify-end">
              <Link
                className="btn btn-primary"
                href={`/author/${post?.userId}`}
              >
                Read about the author
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <p>No Data Found</p>
      )}
    </>
  );
}
