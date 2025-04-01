/**
 * SectionHeader Component
 * This component renders a section header with a title, eyebrow (subtitle), 
 * and description. It provides a structured and visually appealing 
 * introduction to different sections of a webpage.
 */

export const SectionHeader = ({ 
  title, 
  eyebrow, 
  description 
}: { 
  title: string; 
  eyebrow: string; 
  description: string; 
}) => {
  return (
    <>
      {/* Eyebrow text (small uppercase heading) with gradient styling */}
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
          {eyebrow}
        </p>
      </div>

      {/* Main title with serif font styling */}
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
        {title}
      </h2>

      {/* Description text with white transparency effect for subtle styling */}
      <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
        {description}
      </p>
    </>
  );
};
