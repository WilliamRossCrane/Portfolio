/**
 * HeroOrbit Component
 * This component creates an orbiting effect for elements inside it. It allows customization of:
 * - Orbiting behavior (shouldOrbit, orbitDuration)
 * - Spinning behavior (shouldSpin, spinDuration)
 * - Rotation angle and size of the orbit
 * It uses Tailwind CSS for styling and animations, with `twMerge` for class merging.
 */

import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const HeroOrbit = ({ 
  children,       // Elements inside the orbit
  size,           // Diameter of the orbit (in px)
  rotation,       // Rotation angle (in degrees)
  shouldOrbit = false,    // Determines if the element should orbit
  orbitDuration,  // Duration of the orbit animation
  shouldSpin = false,     // Determines if the element should spin
  spinDuration,   // Duration of the spin animation
}: PropsWithChildren<{ 
  size: number; 
  rotation: number; 
  shouldOrbit?: boolean; 
  shouldSpin?: boolean; 
  spinDuration?: string; 
  orbitDuration?: string; 
}>) => {
  return (
    // Center the orbit container on the screen
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20">
      
      {/* Outer wrapper that applies the orbiting animation if enabled */}
      <div 
        className={twMerge(
          shouldOrbit ? "animate-[orbit_linear_infinite]" : ""
        )} 
        style={{
          animationDuration: orbitDuration,
        }}
      >
        {/* Inner container responsible for positioning the orbiting element */}
        <div 
          className="flex items-start justify-start"
          style={{
            transform: `rotate(${rotation}deg)`, // Set initial rotation
            height: `${size}px`,
            width: `${size}px`,
          }}
        >
          {/* Wrapper for the spinning effect if enabled */}
          <div 
            className={twMerge(
              shouldSpin ? "animate-[spin_linear_infinite]" : ""
            )}
            style={{
              animationDuration: spinDuration,
            }}
          >
            {/* Rotates the child elements in the opposite direction to maintain their upright position */}
            <div 
              className="inline-flex"
              style={{
                transform: `rotate(${rotation * -1}deg)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
