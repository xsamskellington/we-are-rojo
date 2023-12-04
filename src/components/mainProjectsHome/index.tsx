import './styles.css';
import Image from 'next/image';
import { thumbnailProjects } from '../../../public/data';
import Link from 'next/link';

const MainProjectsHome = () => {
  return (
    <div className="thumbnail-container">
      {thumbnailProjects.map((project) => (
        <div key={project.title} className="thumbnail">
          <Link href={project.href}>
            {/* <p>{project.title}</p> */}
            <div
              style={{ width: '45vw', height: '45vh', position: 'relative' }}
            >
              <Image
                src={project.img}
                alt="thumnbail"
                layout="fill"
                objectFit="contain"
                // width={817}
                // height={459}
              />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MainProjectsHome;
