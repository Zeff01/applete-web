import Link from "next/link"

export default function NotFound() {
  return (
    <div className="w-screen pt-20 flex items-center justify-center">
      <div className="flex flex-col items-center gap-y-6">
        <div>
          <img src={"/applete-logo.png"} width={300} />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-5xl sm:text-7xl">404</h1>
          <h2 className="font-semibold text-3xl sm:text-5xl">Not Found</h2>
        </div>
        <Link href={"/"} className="text-xl underline text-custom-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
}


