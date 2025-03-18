import grainImage from "@/assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";
import { PropsWithChildren } from "react";

export const Card = ({ className, children }: 
    PropsWithChildren<{ className?: string }>) => {
    return (
        <div className={twMerge("bg-gray-800 text-white rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none", className)}>
            
            {/* Background Image Overlay */}
            <div 
                className="absolute inset-0 -z-10 opacity-5"
                style={{ 
                    backgroundImage: `url(${grainImage.src})`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "200px",  // Adjust this value to make the grain smaller
                }}
            ></div>

            {/* Ensure content is fully visible */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};
