import './styles.css';
import Link from 'next/link';

const MainProjectsHome = ({ projects }: any) => {
  return (
    <div className="thumbnail-container">
      {projects.map((project: any) => (
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
