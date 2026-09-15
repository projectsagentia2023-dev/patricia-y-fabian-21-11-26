"use client";

import { useEffect, useRef, useState } from "react";

type AnimationVariant = "fade-up" | "fade-left" | "fade-right" | "fade-down" | "zoom-in" | "flip-up" | "fade-in";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: AnimationVariant;
  duration?: number;
}

const hiddenStyles: Record<AnimationVariant, React.CSSProperties> = {
  "fade-up":    { opacity: 0, transform: "translateY(50px)" },
  "fade-down":  { opacity: 0, transform: "translateY(-50px)" },
  "fade-left":  { opacity: 0, transform: "translateX(-60px)" },
  "fade-right": { opacity: 0, transform: "translateX(60px)" },
  "zoom-in":    { opacity: 0, transform: "scale(0.85)" },
  "flip-up":    { opacity: 0, transform: "perspective(600px) rotateX(20deg) translateY(30px)" },
  "fade-in":    { opacity: 0, transform: "none" },
};

const visibleStyles: React.CSSProperties = {
  opacity: 1,
  transform: "none",
};

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  variant = "fade-up",
  duration = 900,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...(isVisible ? visibleStyles : hiddenStyles[variant]),
        transition: `opacity ${duration}ms cubic-bezier(0.22,1,0.36,1), transform ${duration}ms cubic-bezier(0.22,1,0.36,1)`,
        transitionDelay: `${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
