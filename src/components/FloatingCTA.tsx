"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setIsVisible(scrollPercent > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl p-4 border border-gray-100">
        <p className="text-sm text-neutral-gray mb-2 font-medium">Ready to scale?</p>
        <Link
          href="/contact"
          className="btn-accent inline-block text-sm py-3 px-6"
        >
          Book Your Call
        </Link>
      </div>
    </div>
  );
}
