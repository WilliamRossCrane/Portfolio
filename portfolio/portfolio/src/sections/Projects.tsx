import Image from "next/image";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from '@/assets/images/grain.jpg';
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

// Portfolio projects data
const portfolioProjects = [
  {
    company: "Project #1",
    year: "2025",
    title: "Uber Application",
    results: [
      { title: "Full Stack React Native App" },
      { title: "So Many Features!" },
      { title: "Work in progress 🚀" },
    ],
    link: "https://www.youtube.com/watch?v=60Fd9G72sGg", 
    image: darkSaasLandingPage,
  },
  {
    company: "Project #2",
    year: "2025",
    title: "TBD",
    results: [
      { title: "Innovative ideas in development." },
      { title: "Or at least I'll figure out something." },
      { title: "Keep an eye out 👀" },
    ],
    link: "https://www.youtube.com/watch?v=60Fd9G72sGg", 
    image: lightSaasLandingPage,
  },
  {
    company: "Project #3",
    year: "2025",
    title: "TBD",
    results: [
      { title: "Future project in the making." },
      { title: "I will have been hustling by this point." },
      { title: " King of the Pirates kinda vibe??" },
    ],
    link: "https://www.youtube.com/watch?v=60Fd9G72sGg", 
    image: aiStartupLandingPage,
  },
];

// Projects section component
export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py24">
      <div className="container">
        {/* Section header with eyebrow, title, and description */}
        <SectionHeader 
          eyebrow="Real-world Results" 
          title="Featured Projects" 
          description="See all my little digital babies in action... *cough* *cough*... I mean, my professional projects!"
        />
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {/* Mapping through portfolio projects to display each */}
          {portfolioProjects.map((project, projectIndex) => (
            <Card 
              key={project.title} 
              className=" px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`, // Adjusts sticky position for each project
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                {/* Left section with project info */}
                <div className="lg:pb-16">
                  {/* Gradient text for company and year */}
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  
                  {/* Project title */}
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
                  
                  {/* List of project results */}
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li className="flex gap-2 text-sm md:text-base text-white/50" key={result.title}>
                        <CheckCircleIcon className="size-5 md:size-6"/>
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Link to live site */}
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4"/>
                    </button>
                  </a>
                </div>

                {/* Right section with project image */}
                <div className="relative">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    className="mt-8 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>  
          ))}
        </div>
      </div>
    </section>
  );
};
