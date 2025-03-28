import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'; 
import grainImage from '@/assets/images/grain.jpg'; 

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      {/* Main container for the section */}
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          {/* Background image with opacity */}
          <div 
            className="absolute inset-0 opacity-5 -z-10" 
            style={{
              backgroundImage: `url(${grainImage.src})`
            }}
          ></div>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            {/* Left section with heading and paragraph */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">I hope you’ve learned a bit about me</h2>
              <p className="text-sm md:text-base mt-2">If you think I’d be a good fit for your team, let’s connect and chat about how I can contribute to your success.</p>
            </div>

            {/* Right section with the 'Contact Me' button */}
            <div>
              <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900">
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4"/> {/* Icon in the button */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
