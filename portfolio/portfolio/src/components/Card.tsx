/**
 * Card Component
 * This component creates a reusable card with:
 * - A dark background and rounded corners
 * - A subtle grain texture overlay for added depth
 * - Support for custom class names and additional props
 * - Proper layering to ensure content remains visible
 * It uses `tailwind-merge` (`twMerge`) for dynamic class merging and extends 
 * the default `<div>` properties using `ComponentPropsWithoutRef<"div">`.
 */

import grainImage from "@/assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";
import { PropsWithChildren, ComponentPropsWithoutRef } from "react";

export const Card = ({ 
  className,    // Additional classes for customization
  children,     // Content inside the card
  ...other      // Any additional props passed to the div
}: ComponentPropsWithoutRef<"div">) => {
  return (
    <div 
      className={twMerge(
        "bg-gray-800 text-white rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none",
        className
      )}
      {...other}
    >
      {/* Background Image Overlay - adds a subtle grain texture */}
      <div 
        className="absolute inset-0 -z-10 opacity-5"
        style={{ 
          backgroundImage: `url(${grainImage.src})`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px", // Adjust this value to make the grain smaller
        }}
      ></div>

      {/* Wrapper to ensure content remains visible above overlays */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
