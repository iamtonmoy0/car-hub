import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width  " id="discover">
        <div className="grid ml-8 ">
          <h1 className=" text-4xl font-extrabold"> Car Catalogue</h1>
          <p>Explore the newest cars</p>
        </div>
        <div className="">
          <SearchBar/>
        </div>
      </div>
    </main>
  );
}
