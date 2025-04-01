/**
 * ToolboxItems Component (Used in About section, Toolbox)
 * This component displays a horizontal list of technology icons with labels.
 * It takes an array of items, each containing a title and an icon component.
 */

import { twMerge } from "tailwind-merge";
import { TechIcon } from "./TechIcon";
import { Fragment } from "react";

// Define the ToolboxItems component
export const ToolboxItems = ({ 
  items,                  // Array of technology items
  className,              // Additional custom classes for styling
  itemsWrapperClassName,  // Additional custom classes for the wrapper
}: { 
  items: Array<{ 
    title: string; 
    iconType: React.ElementType;
  }>;
  className?: string;
  itemsWrapperClassName?: string;
}) => {
  return (
    // Outer container with horizontal scrolling effect and gradient mask
    <div 
      className={twMerge(
        "flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", 
        className
      )}
    >
      {/* Inner wrapper for the list of items, applying additional styling */}
      <div 
        className={twMerge(
          "flex flex-none py-0.5 gap-6 pr-6 transition-transform", 
          itemsWrapperClassName
        )}
      >
        {/* Mapping through the items array to render each technology item */}
        {[...new Array(2)].fill(0).map((_, index) => (
          <Fragment key={index}>
            {items.map((item) => (
              <div 
                key={item.title} 
                className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
              >
                {/* Tech icon component */}
                <TechIcon component={item.iconType} />
                {/* Display the technology name */}
                <span className="font-semibold">{item.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
