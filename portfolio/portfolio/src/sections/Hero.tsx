import memojiImage from '@/assets/images/memoji-computer.png';
import Image from "next/image";
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import { HeroOrbit } from '@/components/HeroOrbit';
import SparkleIcon from '@/assets/icons/sparkle.svg';

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      
      {/* Background Gradient Mask */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        
        {/* Subtle Grain Texture */}
        <div 
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        
        {/* Rotating Rings and Orbiting Elements */}
        <div className="absolute inset-0 -z-20">
          <div className="size-[620px] hero-ring"></div>
          <div className="size-[820px] hero-ring"></div>
          <div className="size-[1020px] hero-ring"></div>
          <div className="size-[1220px] hero-ring"></div>
          
          {/* Orbiting Stars and Sparkles */}
          <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration='48s' shouldSpin spinDuration='6s'>
            <StarIcon className="size-28 text-emerald-300" />
          </HeroOrbit>
          <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration='38s' shouldSpin spinDuration='6s'>
            <StarIcon className="size-12 text-emerald-300" />
          </HeroOrbit>
          <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration='40s' shouldSpin spinDuration='6s'>
            <StarIcon className="size-8 text-emerald-300" />
          </HeroOrbit>
          <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration='3s'>
            <SparkleIcon className="size-8 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration='32s' shouldSpin spinDuration='3s'>
            <SparkleIcon className="size-5 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration='36s' shouldSpin spinDuration='3s'>
            <SparkleIcon className="size-10 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration='44s' shouldSpin spinDuration='3s'>
            <SparkleIcon className="size-14 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration='46s'>
            <div className="size-3 rounded-full bg-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration='34s'>
            <div className="size-2 rounded-full bg-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration='42s'>
            <div className="size-2 rounded-full bg-emerald-300/20" />
          </HeroOrbit>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container relative z-10">
        
        {/* Profile Image & Greeting Badge */}
        <div className="flex flex-col items-center">
          <Image 
            src={memojiImage} 
            className="size-[100px]" 
            alt="Person peeking from behind laptop" 
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            {/* Animated Online Indicator */}
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">Hi, I'm William 🏳️‍🌈</div>
          </div>
        </div>

        {/* Heading & Introductory Text */}
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-6 tracking-wide">
            Welcome! <br /> This Is My Portfolio.
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I'm passionate about technology with a degree in Software Development.  
            Currently, I'm expanding my skills and building a variety of projects.
          </p>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <a href="#projects" className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </a>
          <a 
            href="https://www.linkedin.com/in/williamrosscrane" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl"
          >
            <span>👋</span>
            <span className="font-semibold">Let's Connect</span>
          </a>
        </div>
      </div> 
    </div> 
  );
};
