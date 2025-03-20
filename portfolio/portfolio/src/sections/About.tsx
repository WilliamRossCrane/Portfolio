import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

const toolboxItems = [
  { title: "Javascript", iconType: JavascriptIcon },
  { title: "HTML5", iconType: HTMLIcon },
  { title: "CSS3", iconType: CssIcon },
  { title: "React", iconType: ReactIcon },
  { title: "Chrome", iconType: ChromeIcon },
  { title: "Github", iconType: GithubIcon },
];

const hobbies = [
  { title: "Painting", emoji: "🎨", left: "5%", top: "5%", },
  { title: "Photography", emoji: "📷", left: "50%", top: "5%",  },
  { title: "Hiking", emoji: "🥾", left: "35%", top: "40%",  },
  { title: "Gaming", emoji: "🎮", left: "10%", top: "35%",  },
  { title: "Music", emoji: "🎵", left: "70%", top: "45%",  },
  { title: "Fitness", emoji: "💪", left: "5%", top: "65%",  },
  { title: "Reading", emoji: "📚", left: "45%", top: "70%",  },
];

export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, why I do, and what inspires me"
        />

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-8 lg:grid-cols-3">
          <Card className="h-[320px] md:col-span-2 lg:col-span-1">
            <CardHeader
              title="My Reads"
              description="Explore the books shaping my perspectives."
            />
            <div className="w-40 mx-auto mt-2">
              <Image src={bookImage} alt="Book cover" />
            </div>
          </Card>

          <Card className="h-[320px] md:col-span-3 lg:col-span-2">
            <CardHeader
              title="My Toolbox"
              description="Explore the technologies and tool I use to create exceptional digital experiences."
              className=""
            />
            <ToolboxItems items={toolboxItems} className=""/>
            <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="-translate-x-1/2"/>
          </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
          <Card className="h-[320px] p-0 flex-col md:col-span-3 lg:col-span-2">
            <CardHeader
              title="Beyond the Code"
              description="Explore my interests and hobbies beyond the digital realm."
              className="px-6 py-6"
            />
            <div className="relative flex-1">
              {hobbies.map((hobby) => (
                <div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                  style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}
                >
                  <span className="text-xl">{hobby.emoji}</span>
                  <span className="font-medium text-gray-950">{hobby.title}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
            <div className="relative h-full">
            <Image 
              src={mapImage} 
              alt="map" 
              className="w-full h-full object-cover object-top scale-150 md:scale-[1.75]"
            />
              <div className="absolute top-[55%] md:top-[65%] lg:top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400">
                <Image src={smileMemoji} alt="Smiling memoji" className="size-20"/>
              </div>
            </div>
          </Card>
          </div>
      </div>
      </div>
    </div>
  );
};