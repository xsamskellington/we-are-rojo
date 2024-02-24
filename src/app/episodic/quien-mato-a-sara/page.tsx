import VimeoPlayer from '@/components/vimeoPlayer';
import '../../pagesStyles.css';
import BackArrow from '@/components/backArrow';

const Page = () => {
  return (
    <div className="page-container">
      <VimeoPlayer
        src={'https://player.vimeo.com/video/891897620?h=217c9dea51'}
      />
      <div className="info-container">
        <h1 className="title">WHO KILLED SARA?</h1>
        <div className="synopsis">
          <h3>
            <span>SYNOPSIS</span>
          </h3>
          <br></br>
          <p>{`--`}</p>
        </div>
        <div className="credits">
          <div className="column-left">
            <p className="text">
              <span>VFX Sup:</span> Jonathan Monroig{' '}
            </p>
            <p className="text">
              <span>VFX Coord:</span> Ariadna Ortiz{' '}
            </p>
          </div>

          <div>
            <p className="text">
              <span>Production Company:</span> Perro Azul - Malule Entertainment
            </p>
            <p className="text">
              <span>Directors:</span> David Ruiz - José Ignacio Valenzuela
            </p>
            <p className="text">
              <span>DOP:</span> Rodrigo Mariña
            </p>
          </div>
        </div>
        <div className="credits">
          <p className="column-left">
            <span>Release Date:</span> Feature TV Serie{' '}
          </p>
          <p className="text">
            <span>VFX Shots:</span> 289{' '}
          </p>
        </div>
        <BackArrow href={'/episodic'} />
      </div>
    </div>
  );
};

export default Page;
