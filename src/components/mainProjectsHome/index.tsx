import './styles.css';
import Image from 'next/image';
import { thumbnailProjects } from './data';
import Link from 'next/link';

const MainProjectsHome = () => {
  return (
    <div className="thumbnail-container">
      {thumbnailProjects.map((project) => (
        <Link
          href={project.href}
          className="thumbnail"
          style={{ backgroundImage: `url(${project.img})` }}
          key={project.title}
        >
          <div className="project-title">
            <p>{project.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MainProjectsHome;
