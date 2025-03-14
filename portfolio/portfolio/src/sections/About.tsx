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
  { title: "Painting", emoji: "🎨" },
  { title: "Photography", emoji: "📷" },
  { title: "Gaming", emoji: "🎮" },
  { title: "Hiking", emoji: "🥾" },
  { title: "Music", emoji: "🎵" },
  { title: "Fitness", emoji: "💪" },
  { title: "Reading", emoji: "📚" },
];

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, why I do, and what inspires me"
        />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="h-[320px]">
            <CardHeader
              title="My Reads"
              description="Explore the books shaping my perspectives."
            />
            <div className="w-40 mx-auto mt-8">
              <Image src={bookImage} alt="Book cover" />
            </div>
          </Card>

          <Card className="h-[320px] p-0">
            <CardHeader
              title="My Toolbox"
              description="Explore the technologies and tool I use to create exceptional digital experiences."
              className="px-6 pt-6"
            />
            <ToolboxItems items={toolboxItems} />
          </Card>

          <Card>
            <CardHeader
              title="Beyond the Code"
              description="Explore my interests and hobbies beyond the digital realm."
            />
            <div className="grid grid-cols-2 gap-4 mt-4">
              {hobbies.map((hobby) => (
                <div key={hobby.title} className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5">
                  <span className="text-xl">{hobby.emoji}</span>
                  <span>{hobby.title}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <div className="relative h-full">
              <Image src={mapImage} alt="map" className="w-full h-auto" />
              <div className="absolute bottom-4 right-4 w-24 h-24">
                <Image src={smileMemoji} alt="Smiling memoji" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};