"use client";

import { useState, useEffect } from "react";

export function InterestButton() {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/interest")
      .then((res) => res.json())
      .then((data) => setCount(data.count));
  }, []);

  const handleClick = async () => {
    setLoading(true);
    const res = await fetch("/api/interest", { method: "POST" });
    const data = await res.json();
    setCount(data.count);
    setLoading(false);
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] disabled:opacity-50"
    >
      {loading ? "..." : `I'm interested! (${count ?? "..."})`}
    </button>
  );
}
