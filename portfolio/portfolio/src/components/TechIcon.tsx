/**
 * TechIcon Component (Used in About Section, Toolbox)
 * This component renders a technology icon with a custom linear gradient fill.
 * It accepts a React component (`component`) as a prop and applies the gradient effect.
 */

export const TechIcon = ({ component }: { component: React.ElementType }) => {
    // Assign the passed component to a variable
    const Component = component;

    return (
        <div className="relative">
            {/* Render the passed icon component with a gradient fill */}
            <Component className="size-10 fill-[url(#tech-icon-gradient)]" />
            
            {/* SVG element defining the linear gradient */}
            <svg className="size-0 absolute">
                <linearGradient id="tech-icon-gradient">
                    <stop offset="0%" stopColor="rgb(110 231 183)" />
                    <stop offset="100%" stopColor="rgb(56 189 248)" />
                </linearGradient>
            </svg>
        </div>
    );
};
