import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="bg-[#254F1A] min-h-screen py-50 grid grid-cols-2 px-20 text-white">
        <div className=" flex flex-col">
          <h1 className="text-7xl font-extrabold mb-4 text-[#D2E823]">Everything you are. In one, simple link in bio.</h1>
          <p className="text-lg mb-8">
            Join our open source community for link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>
          <div>
            <input type="text" placeholder="Enter your link" className="bg-[#D2E823] text-black px-4 py-2 rounded-lg mr-4" />
            <button className="bg-[#D2E823] text-black px-4 py-2 rounded-lg">Shorten</button>
          </div>
          </div>
          <div>
            <Image src="/demo.png" width={300} height={300} alt="demo" className="mx-auto rounded-lg" />
          </div>
      </section>
    </main>
  );
}
