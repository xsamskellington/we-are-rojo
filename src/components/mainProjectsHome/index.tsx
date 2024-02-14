import './styles.css';
import Link from 'next/link';

const MainProjectsHome = ({ projects, home, title, subtitle }: any) => {
  return (
    <div className="main-projects-container">
      {home ? (
        <div className="home-title">
          <br></br>
          <br></br>
          <h1 className="home-subtitle"> {subtitle}</h1>
          <br></br>
          <br></br>
        </div>
      ) : (
        <div className="page-info">
          <h1>{title}</h1>
          <h3> {subtitle}</h3>
          <h2 className="work">WORKS</h2>
        </div>
      )}

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
    </div>
  );
};

export default MainProjectsHome;
