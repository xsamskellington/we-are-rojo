import { menuSections } from './data';
import Link from 'next/link';

const DesktopHeader = () => {
  return (
    <div className="section-menu-desktop">
      {menuSections.map((section, index) => (
        <>
          <Link href={section.href} className="section" key={section.title}>
            {section.title}
          </Link>
          {index < menuSections.length - 1 && '|'}
        </>
      ))}
    </div>
  );
};

export default DesktopHeader;
