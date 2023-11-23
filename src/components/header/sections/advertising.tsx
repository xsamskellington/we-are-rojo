'use client';
import '../styles.css';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { advertising } from '../data';

const Advertising = () => {
  const [openAdvertising, setOpenAdvertising] = useState(false);
  const advertisingMenu = useRef<HTMLDivElement>(null);
  const closeAdvertising = (e: any) => {
    if (
      advertisingMenu.current &&
      openAdvertising &&
      !advertisingMenu.current.contains(e.target)
    ) {
      setOpenAdvertising(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeAdvertising);
  });

  return (
    <div className="dropdown">
      <button
        onClick={() => setOpenAdvertising(!openAdvertising)}
        className="icon"
      >
        {advertising.title}
      </button>
      {openAdvertising && (
        <div ref={advertisingMenu} className="dropdown-menu">
          {advertising.projects.map((brand) => (
            <>
              <p className="brand">{brand.brand}</p>
              {brand.project.map((project) => (
                <Link href={project.href} key={project.title}>
                  <p
                    onClick={() => setOpenAdvertising(false)}
                    className="brand-options"
                  >
                    {project.title}
                  </p>
                </Link>
              ))}
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default Advertising;
