// Header component for navigation
export const Header = () => {
  return (
    // Container for the header, positioned at the top of the page
    <div className="flex justify-center items-center fixed top-3 w-full px-4 z-10">
      {/* Navigation bar with a semi-transparent background and rounded borders */}
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {/* Navigation links */}
        <a href="#hero" className="nav-item">Home</a>
        <a href="#projects" className="nav-item">Projects</a>
        <a href="#about" className="nav-item">About</a>

        {/* External contact link to LinkedIn, opens in a new tab */}
        <a 
          href="https://www.linkedin.com/in/williamrosscrane" 
          target="_blank" 
          rel="noopener noreferrer"
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
