import Image from "next/image";
import { InterestButton } from "@/components/InterestButton";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Something is coming.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Interested? Click the button below and follow along for updates.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium">
          <InterestButton />
          <div className="flex flex-col gap-3 pt-4">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Stay updated:</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://apricity26.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 items-center justify-center rounded-full border border-black/[.08] px-4 text-sm transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
              >
                Substack
              </a>
              <a
                href="https://x.com/greenstick1234"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 items-center justify-center rounded-full border border-black/[.08] px-4 text-sm transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
              >
                X / Twitter
              </a>
              <a
                href="https://bsky.app/profile/jin-glebell.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 items-center justify-center rounded-full border border-black/[.08] px-4 text-sm transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
              >
                Bluesky
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
