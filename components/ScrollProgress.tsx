"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop =
        window.scrollY || document.documentElement.scrollTop || 0;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;
      const value = height > 0 ? (scrollTop / height) * 100 : 0;
      setProgress(value);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5">
      <div
        className="h-full bg-gradient-to-r from-pastel-blue-dark via-pastel-blue to-pastel-lavender transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
