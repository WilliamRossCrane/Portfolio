import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

// Footer links with the respective URLs and target="_blank" to open in a new tab
const footerLinks = [
  { title: 'Email', href: 'mailto:wcran7@gmail.com' },
  { title: 'LinkedIn', href: 'https://www.linkedin.com/in/williamrosscrane/' },
  { title: 'GitHub', href: 'https://github.com/WilliamRossCrane' },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      {/* Background decoration */}
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      
      <div className="container relative">
        {/* Footer content */}
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2025. All rights reserved</div>
          
          <div>
            <nav className="flex flex-col md:flex-row items-center gap-8">
              {/* Loop through footerLinks and create each link */}
              {footerLinks.map(link => (
                <a
                  href={link.href} // Link URL
                  key={link.title} // Key for the link
                  target="_blank" // Open in new tab
                  rel="noopener noreferrer" // Security for _blank
                  className="inline-flex items-center gap-1.5 text-white hover:opacity-80"
                >
                  <span className="font-semibold">{link.title}</span>
                  <ArrowUpRightIcon className="size-4" /> {/* Icon */}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
