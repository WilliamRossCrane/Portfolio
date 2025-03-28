import React from 'react';
import StarIcon from '@/assets/icons/star.svg';

// Array containing keywords that describe skills and interests
const words = [
  "JavaScript Enthusiast",
  "Software Developer",
  "React.js Developer",
  "Postgraduate Student",
  "Test Automation",
  "Professional Experience",
  "TypeScript Developer",
  "One Piece Fan",
];

export const TapeSection = () => {
  return (
    // Container for the section with padding and overflow management
    <div className="py-16 lg:py-24 overflow-x-clip">
      {/* Gradient background for the section */}
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          {/* Flex container for scrolling text */}
          <div className="flex gap-4 pr-4 py-3 w-full animate-move-left">
            {/* Creating multiple instances of the scrolling text */}
            {[...new Array(4)].fill(0).map((_, idx) => (
              <div key={idx} className="flex shrink-0 gap-4 items-center">
                {/* Mapping through words to display each item with an icon */}
                {words.map(word => (
                  <div key={word} className="inline-flex gap-4 items-center">
                    {/* Displaying each word with styling */}
                    <span className="text-gray-900 uppercase font-extrabold text-sm whitespace-nowrap">{word}</span>
                    {/* Star icon next to each word */}
                    <StarIcon className="text-gray-900 size-6 -rotate-12"/>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
