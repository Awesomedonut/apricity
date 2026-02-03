import Image from "next/image";
import Link from "next/link";

import daienImg from "@/imgs/daien.png";
import ludiImg from "@/imgs/ludi.png";

export default function MoreInfo() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <div className="max-w-5xl mx-auto px-8 py-16">
        <Link
          href="/"
          className="text-sm text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 mb-8 inline-block"
        >
          &larr; Back
        </Link>



        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Daien */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-6">
              <div className="relative w-1/2 aspect-square flex-shrink-0 overflow-hidden border-2 border-zinc-200 dark:border-zinc-700">
                <Image
                  src={daienImg}
                  alt="Daien"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-3xl font-semibold text-black dark:text-zinc-50">
                  Daien Zheng
                </h2>
                <span className="text-3xl font-semibold text-black dark:text-zinc-50">
                  郑戴恩
                </span>
              </div>
            </div>
            <div className="text-zinc-600 dark:text-zinc-400 space-y-4">
              <p className="text-lg">
                An overworked, overpaid wage slave from the modern day who wakes up in the body of a minor villain, "the Cold Duke of the South". The main character/female lead of this story.
              </p>
              <p>Age: 27</p>
              <p>Height: 5'10</p>
              <p>Likes: Ludi</p>
              <p>Dislikes: Politics, work, social interactions, driving</p>
           
            </div>
          </div>

          {/* Ludi */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-6">
              <div className="relative w-1/2 aspect-square flex-shrink-0 overflow-hidden border-2 border-zinc-200 dark:border-zinc-700">
                <Image
                  src={ludiImg}
                  alt="Ludi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-3xl font-semibold text-black dark:text-zinc-50">
                  Ludi Sand
                </h2>
                <span className="text-3xl font-semibold text-black dark:text-zinc-50">
                  沙良
                </span>
              </div>
            </div>
            <div className="text-zinc-600 dark:text-zinc-400 space-y-4">
              <p className="text-lg">
                An overworked, underpaid civil servant employed by the Duke of the South. In the original timeline, he dies a brutal, early death. The deuteragonist/love interest/male lead of this story.
              </p>
              <p>Age: 24</p>
              <p>Height: 5'10</p>
              <p>Likes: Architecture, playing the zither/guqin, reading</p>
              <p>Dislikes: The Duke of the South</p>
            </div>
          </div>

          
        </div>

        <footer className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
            Website currently under construction, more info coming soon!
          </p>
        </footer>
      </div>
    </div>
  );
}
