// Import necessary components and assets
"use client";
import { useRef } from "react"; 
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import Image from "next/image";
import { motion } from "framer-motion";

// Import icons and images
import bookImage from "@/assets/images/book-cover.png";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";

// Define technologies used in the toolbox section
const toolboxItems = [
  { title: "Javascript", iconType: JavascriptIcon },
  { title: "HTML5", iconType: HTMLIcon },
  { title: "CSS3", iconType: CssIcon },
  { title: "React", iconType: ReactIcon },
  { title: "Chrome", iconType: ChromeIcon },
  { title: "Github", iconType: GithubIcon },
];

// Define hobbies with their respective emoji and positioning styles
const hobbies = [
  { title: "Singing", emoji: "🎤", positions: "left-[5%] top-[5%]" },
  { title: "Kickboxing", emoji: "🥊", positions: "left-[55%] top-[15%]" },
  { title: "One Piece", emoji: "😊", positions: "left-[30%] top-[30%]" },
  { title: "Gaming", emoji: "🎮", positions: "left-[10%] top-[45%]" },
  { title: "Music", emoji: "🎵", positions: "left-[65%] top-[50%]" },
  { title: "Fitness", emoji: "💪", positions: "left-[20%] top-[65%]" },
  { title: "Grappling", emoji: "🤼", positions: "left-[50%] top-[80%]" },
];

// About section component
export const AboutSection = () => {
  const constrainRef = useRef(null);
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        {/* Section header with title and description */}
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, why I do, and what inspires me"
        />

        <div className="mt-20 flex flex-col gap-8">
          {/* Grid layout for different content cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-8 lg:grid-cols-3">
            {/* My Reads Card */}
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />
              <div className="w-40 mx-auto mt-2">
                <Image src={bookImage} alt="Book cover" />
              </div>
            </Card>

            {/* My Toolbox Card */}
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the current technologies and tools I use to develop my portfolio."
              />
              <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:20s]"/>
              {/* Second row of toolbox items with slight position shift */}
              <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:15s]" />
            </Card>
          </div>

          {/* Additional grid layout for hobbies and map */}
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            {/* Hobbies Card */}
            <Card className="h-[320px] p-0 md:col-span-3 lg:col-span-2">
              {/* Custom layout for this specific card */}
              <div className="flex flex-col h-full">
                <CardHeader
                  title="Beyond the Code"
                  description="Explore my interests and hobbies beyond the digital realm."
                  className="px-6 py-6"
                />
                
                {/* Container for the draggable items that fills the remaining space */}
                <div className="relative flex-grow" ref={constrainRef}>
                  {/* Display hobbies dynamically */}
                  {hobbies.map((hobby) => (
                    <motion.div
                      key={hobby.title} 
                      className={`inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute ${hobby.positions}`}
                      drag
                      dragConstraints={constrainRef}
                      dragMomentum={false}
                      dragElastic={0.2}
                      whileDrag={{ scale: 1.05, zIndex: 10 }}
                    >
                      <span className="text-xl">{hobby.emoji}</span>
                      <span className="font-medium text-gray-950">{hobby.title}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Location Map Card */}
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <div className="relative h-full">
                {/* Main background map image */}
                <Image 
                  src={mapImage} 
                  alt="map" 
                  className="w-full h-full object-cover object-top scale-150 md:scale-[1.75] relative z-10"
                />  
                
                {/* Static background circle and memoji and ping animation*/}
                <div className="absolute top-[55%] md:top-[65%] lg:top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 z-30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 animate-ping [animation-duration:2s]"></div>
                  <Image src={smileMemoji} alt="Smiling memoji" className="size-20 relative z-40"/>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
