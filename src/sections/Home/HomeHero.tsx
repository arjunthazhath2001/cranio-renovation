"use client";
import { JetBrains_Mono } from "next/font/google";
import { Inter } from "next/font/google";

const jet = JetBrains_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const inter = Inter({
  weight: ["500"],
  subsets: ["latin"],
});

function HomeHero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center pb-32 md:pb-20 px-8">
       <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center">
          <div
            className={`${inter.className} rounded-md bg-white border-black border shadow-[4px_4px_0px_0px_rgba(255,204,0)] inline-flex inset-shadow-sm py-0.5 leading-5 px-2 text-sm tracking-tight`}
          >
            New revenue for you
          </div>

          <div
            className={`${jet.className} text-4xl md:text-5xl text-center tracking-tight mt-6 md:max-w-[560px]`}
          >
            <span className="font-bold text-yellow-400">Better care</span> for
            your dementia patients.
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
