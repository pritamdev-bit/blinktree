"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [handle, setHandle] = useState("");
  const router = useRouter();
  return (
    <main>
      <section className="bg-[#254F1A] min-h-screen py-50 grid lg:grid-cols-2 grid-cols-1 sm:px-20 px-5 text-center sm:text-left text-white">
        <div className=" flex flex-col">
          <h1 className="sm:text-7xl text-5xl font-extrabold mb-4 text-[#D2E823]">Everything you are. In one, simple link in bio.</h1>
          <p className="sm:text-lg mb-10">
            Join our open source community for link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>
          <div className="flex flex-col items-center sm:block">
            <input type="text" placeholder="blinktree.vercel.app/yourusername" value={handle} onChange={(e) => setHandle(e.target.value)} className=" text-black bg-white px-6 py-4 rounded-lg mr-4 w-sm" />
            <button  onClick={() => router.push(`/generate?handle=${handle}`)} className="bg-[#E9C0E9] lg:mt-0 mt-2 text-black px-6 py-4 font-semibold rounded-full">Claim your BlinkTree</button>
          </div>
          <p className="text-sm mt-4 italic">Enter your preferred username and click on claim your blinktree to get started.</p>
          </div>
          <div className="lg:block hidden">
            <Image src="/demo.png" width={300} height={300} alt="demo" className="mx-auto rounded-lg" />
          </div>
      </section>
    </main>
  );
}
