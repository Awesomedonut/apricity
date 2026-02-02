"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "hasClickedInterest";

export function InterestButton() {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasClicked, setHasClicked] = useState<boolean | null>(null);

  useEffect(() => {
    const clicked = localStorage.getItem(STORAGE_KEY) === "true";
    setHasClicked(clicked);

    fetch("/api/interest")
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch((err) => console.error("Failed to fetch count:", err));
  }, []);

  const handleClick = async () => {
    if (hasClicked) return;
    setLoading(true);
    try {
      const res = await fetch("/api/interest", { method: "POST" });
      const data = await res.json();
      setCount(data.count);
      localStorage.setItem(STORAGE_KEY, "true");
      setHasClicked(true);
    } catch (err) {
      console.error("Failed to increment:", err);
    }
    setLoading(false);
  };

  // Don't render until we know the clicked state (avoids hydration mismatch)
  if (hasClicked === null) {
    return (
      <button
        disabled
        className="flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background opacity-50"
      >
        ...
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading || hasClicked}
      className="flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] disabled:opacity-50"
    >
      {loading ? "..." : hasClicked ? `Thanks! (${count ?? "..."})` : `I'm interested! (${count ?? "..."})`}
    </button>
  );
}
