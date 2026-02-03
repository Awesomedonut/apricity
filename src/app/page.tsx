import Image from "next/image";
import Link from "next/link";
import { InterestButton } from "@/components/InterestButton";
import sketchImg from "@/imgs/sketch2.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <main className="flex min-h-screen flex-col lg:flex-row">
        {/* Image section - full width on mobile, left half on desktop */}
        <div className="relative w-full lg:w-1/2 h-[50vh] lg:h-screen">
          <Image
            src={sketchImg}
            alt="Sketch"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content section - right side */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16 bg-white dark:bg-black">
          <div className="flex flex-col gap-8 max-w-md">
            <div className="flex flex-col gap-6">
              <h1 className="text-3xl lg:text-4xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50">
                Cannon Fodder's Survival Guide
              </h1>
              <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                Click the button to help us measure interest! We're just estimating how many people are into this idea.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <InterestButton />

              <div className="flex flex-col gap-4 pt-4">
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Get email updates:</p>
                  <a
                    href="https://apricity26.substack.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-fit items-center justify-center rounded-full border border-black/[.08] px-4 text-sm transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
                  >
                    Subscribe on Substack
                  </a>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Team lead's socials (she'll post updates too):</p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://x.com/greenstick1234"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 items-center justify-center rounded-full border border-black/[.08] px-4 text-sm transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
                    >
                      X / Twitter
                    </a>
                    <a
                      href="https://bsky.app/profile/whyjs.bsky.social"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 items-center justify-center rounded-full border border-black/[.08] px-4 text-sm transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
                    >
                      Bluesky
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  <Link
                    href="/concept-art"
                    className="text-sm text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 underline underline-offset-4"
                  >
                    Concept Art
                  </Link>
                  <Link
                    href="/more-info"
                    className="text-sm text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 underline underline-offset-4"
                  >
                    More Info
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
