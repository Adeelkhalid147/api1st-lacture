import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <ul>
      <h2 className="text-5xl font-bold flex items-center justify-center bg-orange-100 text-black p-6">
        API
      </h2>
      <ol>
        <h3 className="text-lg flex justify-center items-center font-semibold">
          <Link href={"/api/hello"}>api/hello Page</Link>
        </h3>
        <h3 className="text-lg flex justify-center items-center font-semibold">
          <Link href={"/client"}>Client page</Link>
        </h3>
        <h3 className="text-lg flex justify-center items-center font-semibold">
          <Link href={"/parallel"}>Parallel Page</Link>
        </h3>
        <h3 className="text-lg flex justify-center items-center font-semibold">
          <Link href={"/sequential"}>Sequential Page</Link>
        </h3>
        <h3 className="text-lg flex justify-center items-center font-semibold">
          <Link href={"/server"}>Server Page</Link>
        </h3>
        <h3 className="text-lg flex justify-center items-center font-semibold">
          <Link href={"/static"}>Static Page</Link>
        </h3>
      </ol>
    </ul>
  );
}
