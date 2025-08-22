// app/about/page.tsx

import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#502274] flex flex-col items-center justify-center px-6 py-40">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold text-white mb-4">
          About <span className="text-indigo-600">BlinkTree</span>
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          BlinkTree is your personal hub for all your important links. 
          Whether you&apos;re a creator, entrepreneur, or brand, we make it simple 
          to share everything that matters — all in one place.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 mt-10">
          <div className="p-6 bg-white shadow rounded-2xl">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Simple & Fast
            </h2>
            <p className="text-gray-600">
              Create your profile in seconds. Share your links instantly. 
              No complicated setup, just clean and fast.
            </p>
          </div>

          <div className="p-6 bg-white shadow rounded-2xl">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Customizable
            </h2>
            <p className="text-gray-600">
              Personalize your page with themes, colors, and layouts that 
              reflect your unique style.
            </p>
          </div>

          <div className="p-6 bg-white shadow rounded-2xl">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Mobile First
            </h2>
            <p className="text-gray-600">
              Optimized for every device so your audience can reach you 
              anytime, anywhere.
            </p>
          </div>

          <div className="p-6 bg-white shadow rounded-2xl">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Free Forever
            </h2>
            <p className="text-gray-600">
              Start for free, share unlimited links, and upgrade only if 
              you need more advanced features.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-full shadow hover:bg-indigo-700 transition"
          >
            Get Started with BlinkTree
          </Link>
        </div>
      </div>
    </main>
  );
}
