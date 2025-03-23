import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

const footerLinks = [
  {
    title:'Youtube',
    href: '#',
  },
  {
    title:'Twitter',
    href: '#',
  },
  {
    title:'Instagram',
    href: '#',
  },
  {
    title:'LinkedIn',
    href: '#',
  },
]

export const Footer = () => {
  return 
  <footer>
    <div className="Container" >
      <div className="border-t border-white/15">
        <div>&copy: 2024. All rights reserved</div>
        <div>
          <nav>
            {footerLinks.map(link => (
              <a href='#' key={link.title}>
                <span>{link.title}</span>
                <ArrowUpRightIcon />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  </footer>;
};
