"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface GradientButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

export const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  href,
  onClick,
  className,
  variant = "primary",
  disabled = false,
}) => {
  const baseClasses = cn(
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-3.5 text-sm font-semibold transition-all",
    disabled && "pointer-events-none opacity-50",
    className
  );

  const gradientClasses =
    variant === "primary"
      ? "bg-gradient-to-r from-evergreen via-emerald to-evergreen bg-[length:200%_100%] text-white"
      : "border-2 border-gray-600 bg-transparent text-gray-300 hover:border-gray-400 hover:text-white";

  const content = (
    <>
      {/* Animated gradient background for primary */}
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-emerald via-[#5BB88A] to-emerald opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ backgroundSize: "200% 100%" }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}

      {/* Glow effect on hover */}
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 rounded-full opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(23,163,107,0.6) 0%, transparent 70%)",
          }}
        />
      )}

      {/* Button content */}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  const motionProps = {
    whileHover: { scale: disabled ? 1 : 1.02 },
    whileTap: { scale: disabled ? 1 : 0.98 },
    transition: { type: "spring", stiffness: 400, damping: 17 },
  };

  if (href && !disabled) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={href} className={cn(baseClasses, gradientClasses)}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      {...motionProps}
      onClick={onClick}
      disabled={disabled}
      className={cn(baseClasses, gradientClasses)}
    >
      {content}
    </motion.button>
  );
};
