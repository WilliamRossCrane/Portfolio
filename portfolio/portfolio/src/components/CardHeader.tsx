/**
 * CardHeader Component
 * This component renders a header section for a card, including:
 * - A title with a decorative star icon
 * - A description with subtle styling
 * - An optional `className` prop for additional customization
 * It uses `tailwind-merge` (`twMerge`) to merge Tailwind classes dynamically.
 */

import StarIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";

export const CardHeader = ({ 
  title,         // Title text displayed in the header
  description,   // Description text below the title
  className,     // Optional additional styling classes
}: { 
  title: string; 
  description: string;
  className?: string;
}) => {
  return (
    // Wrapper div with padding and optional additional styling
    <div className={twMerge("flex flex-col p-6 md:py-8 md:px-10", className)}>
      
      {/* Title section with a decorative star icon */}
      <div className="inline-flex items-center gap-2">
        <StarIcon className="size-9 text-emerald-300" />
        <h3 className="font-serif text-3xl">{title}</h3>
      </div>

      {/* Description text with subtle styling */}
      <p className="text-sm lg:text-base max-w-xs text-white/60 mt-2">
        {description}
      </p>
    </div>
  );
};
