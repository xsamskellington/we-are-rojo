'use client';
import '../styles.css';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { episodic } from '../data';

const Episodic = () => {
  const [openEpisodic, setOpenEpisodic] = useState(false);
  const episodicMenu = useRef(null);

  const closeEpisodic = (e) => {
    if (
      episodicMenu.current &&
      openEpisodic &&
      !episodicMenu.current.contains(e.target)
    ) {
      setOpenEpisodic(false);
    }
  };

  document.addEventListener('mousedown', closeEpisodic);

  return (
    <div className="dropdown">
      <button onClick={() => setOpenEpisodic(!openEpisodic)} className="icon">
        {episodic.title}
      </button>
      {openEpisodic && (
        <div ref={episodicMenu} className="dropdown-menu">
          {episodic.projects.map((project) => (
            <Link href={project.href} key={project.title}>
              <p onClick={() => setOpenEpisodic(false)} className="options">
                {project.title}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Episodic;
