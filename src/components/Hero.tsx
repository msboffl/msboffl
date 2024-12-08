import Image from "next/image";
import msboffl from "/public/mareedu.jpeg";
import { TbDownload } from "react-icons/tb";
import { JobRoles } from "./Roles";
// import { SocialIcons } from "./SocialIcons";
import { FloatingDockDemo } from "./FloatingDock";
// import { MovingBorderButton } from "./ui/moving-border";

export function Hero() {
  return (
    <>
      <section className="xl:mt-[80px] relative flex flex-col items-center justify-between px-8 py-3 border-b lg:border-2 border-zinc-500/65 w-screen lg:max-w-6xl xl:max-w-screen-2xl mx-auto left-0 right-0 lg:rounded-2xl bg-zinc-50/50 dark:bg-black backdrop-blur-sm shadow-transparent">
        {/* Container with window controls */}
        <div className="relative h-full rounded-lg">
          {/* Window Controls */}
          <div className="flex flex-row px-4 py-5 lg:px-8">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-400"></div>
            </div>
          </div>

          {/* Decorative Line */}
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>

          {/* Two sections side by side */}
          <div className="grid grid-cols-1 items-center gap-y-8 px-4 py-4 md:grid-cols-2 lg:gap-12 lg:px-12 lg:py-16">
            {/* Left Section */}
            <div className="font-mono text-xs md:text-sm lg:text-base">
              <div className="flex h-full flex-col items-center justify-center rounded-lg p-3 text-center lg:px-12 lg:py-4">
                <div className="w-62 h-62 background-animate rounded-full bg-gradient-to-r from-red-650 via-orange-500 to-indigo-600 p-2">
                  <Image
                    src={msboffl}
                    alt={"Mareedu Saibabu"}
                    width={180}
                    height={180}
                    className="rounded-full"
                  />
                </div>
                <p className="mt-4 dark:text-white">
                  🧑🏻‍💻 Crazy programmer! Professional & Ambitious. I love the wide
                  range of stacks of Software Engineering that includes Frontend
                  and Backend.
                </p>
                <FloatingDockDemo />
                {/* <SocialIcons /> */}
              </div>
            </div>

            {/* Right Section */}
            <div className="text-left font-serif text-xs md:text-sm lg:text-base">
              <div className="flex h-full flex-col items-start justify-center rounded-lg p-3 lg:px-12 lg:py-4 dark:text-white">
                <h5 className="uppercase tracking-[4px] antialiased font-serif text-xl">
                  Welcome to my world!
                </h5>
                <h3 className="flex flex-col text-6xl font-serif font-extrabold mb-2">
                  HELLO, I'M, MAREEDU SAIBABU
                </h3>
                <JobRoles />
                <h5 className="text-5xl font-extrabold my-3">
                  Based in India.
                </h5>
                {/* <MovingBorderButton
                  borderRadius="1.75rem"
                  className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                  Get Resume
                </MovingBorderButton> */}
                <button className="mt-2 flex items-center gap-3 rounded-lg border-2 border-red-650 bg-transparent px-4 py-2 uppercase text-red-650 hover:text-white  dark:text-white transition-all duration-300 hover:scale-105 hover:bg-red-650 hover:shadow-lg">
                  Get Resume
                  <TbDownload size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
