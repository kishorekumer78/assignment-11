import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Wel come Aboard</h1>
            <p className="py-6">
              This is part of assign from learning react in Ostad Platform
            </p>
            <Link href="/blog" className="btn btn-primary">
              GO TO BLOG PAGE
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
