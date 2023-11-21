'use client';
import '../styles.css';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { features } from '../data';

const Features = () => {
  const [openFeatures, setOpenFeatures] = useState(false);
  const featuresMenu = useRef<HTMLDivElement>(null);

  const closeFeaturesMenus = (e: any) => {
    if (
      featuresMenu.current &&
      openFeatures &&
      featuresMenu.current instanceof HTMLDivElement &&
      !featuresMenu.current.contains(e.target)
    ) {
      setOpenFeatures(false);
    }
  };

  document.addEventListener('mousedown', closeFeaturesMenus);

  return (
    <div className="dropdown">
      <button onClick={() => setOpenFeatures(!openFeatures)} className="icon">
        {features.title}
      </button>
      {openFeatures && (
        <div ref={featuresMenu} className="dropdown-menu">
          {features.projects.map((project) => (
            <Link href={project.href} key={project.title}>
              <p onClick={() => setOpenFeatures(false)} className="options">
                {project.title}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Features;
