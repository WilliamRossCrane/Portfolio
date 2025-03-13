import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from '@/assets/icons/star.svg';
import bookImage from '@/assets/images/book-cover.png';
import Image from "next/image";
import JavascriptIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import ChromeIcon from '@/assets/icons/chrome.svg';
import GithubIcon from '@/assets/icons/github.svg';
import { TechIcon } from "@/components/TechIcon";
import mapImage from  "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";

const toolboxItems = [
  {
    title: 'Javascript',
    iconType: JavascriptIcon,
  },
  {
    title: 'HTML5',
    iconType: HTMLIcon,
  },
  {
    title: 'CSS3',
    iconType: CssIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'Chrome',
    iconType: ChromeIcon,
  },
  {
    title: 'Github',
    iconType: GithubIcon,
  }
]

const hobbies = [
  {
    title: 'Painting',
    emoji: '',
  },
  {
    title: 'Photography',
    emoji: '',
  },
  {
    title: 'Gaming',
    emoji: '',
  },
  {
    title: 'Hiking',
    emoji: '',
  },
  {
    title: 'Music',
    emoji: '',
  },
  {
    title: 'Fitness',
    emoji: '',
  },
  {
    title: 'Reading',
    emoji: '',
  },
]

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
      <SectionHeader
        eyebrow="About Me" 
        title="A Glimpse Into My World" 
        description="Learn more about who I am, why I do, and what inspires me"
      />

      <div className="mt-20">
      
      <Card className="h-[320px]">
  <CardHeader title="My Reads" description="Explore the books shaping my perspectives." />
  <div className="w-40 mx-auto mt-8">
    <Image 
      src={bookImage} 
      alt="Book cover"
    />
  </div>
</Card>
      
      <Card>
        <div>
          <StarIcon />
          <h3>My Toolbox</h3>
          <p>Explore the technologies and tool I use to create exceptional digital experiences.</p>
      </div>
      <div>
        {toolboxItems.map(item => (
          <div key={item.title}>
            <TechIcon component={item.iconType}/>
            <span>{item.title}</span>
          </div>
        ))}
        </div>
      </Card>

      <Card>
      <div>
          <StarIcon />
          <h3>Beyond the Code</h3>
          <p>Explore my interests and hobbies beyond the digital realm.</p>
      </div>
      <div>
        {hobbies.map(hobby => (
          <div key={hobby.title}>
            <span>{hobby.title}</span>
            <span>{hobby.emoji}</span>
          </div>
        ))}
      </div>
      </Card>

      <Card>
          <Image src={mapImage} alt="map" />
          <Image src={smileMemoji} alt="Smiling memoji" />
      </Card>

    </div>
    </div>
  </div>
  );
};
