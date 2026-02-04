"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface BackgroundGradientProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}

export const BackgroundGradient: React.FC<BackgroundGradientProps> = ({
  children,
  className,
  containerClassName,
  animate = true,
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };

  return (
    <div className={cn("group relative p-[4px]", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 z-[1] rounded-3xl opacity-40 blur-xl transition duration-500 will-change-transform group-hover:opacity-70",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#2E9B6E,transparent),radial-gradient(circle_farthest-side_at_100%_0,#5BB88A,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#A8D5BA,transparent),radial-gradient(circle_farthest-side_at_0_0,#5BB88A,#2E9B6E)]"
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 z-[1] rounded-3xl will-change-transform",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#2E9B6E,transparent),radial-gradient(circle_farthest-side_at_100%_0,#5BB88A,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#A8D5BA,transparent),radial-gradient(circle_farthest-side_at_0_0,#5BB88A,#2E9B6E)]"
        )}
      />

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
