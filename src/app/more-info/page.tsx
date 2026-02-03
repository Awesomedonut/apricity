import Link from "next/link";

export default function MoreInfo() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <div className="max-w-3xl mx-auto px-8 py-16">
        <Link
          href="/"
          className="text-sm text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 mb-8 inline-block"
        >
          &larr; Back
        </Link>

        <h1 className="text-3xl lg:text-4xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50 mb-8">
          More Info
        </h1>

        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            More information coming soon.
          </p>
        </div>
      </div>
    </div>
  );
}
