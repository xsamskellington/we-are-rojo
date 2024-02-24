import VimeoPlayer from '@/components/vimeoPlayer';
import '../../pagesStyles.css';
import BackArrow from '@/components/backArrow';

const Page = () => {
  return (
    <div className="page-container">
      <VimeoPlayer
        src={'https://player.vimeo.com/video/891895772?h=9cbcea3883'}
      />
      <div className="info-container">
        <h1 className="title">COMMUNITY SQUAD</h1>
        <div className="synopsis">
          <h3>
            <span>SYNOPSIS</span>
          </h3>
          <br></br>
          <p>
            {` A ragtag civilian patrol squad created to improve the image of the police inadvertently put their lives at risk when confronting some strange criminals.`}
          </p>
        </div>
        <div className="credits">
          <div className="column-left">
            <p className="text">
              <span>VFX Sup:</span> Jonathan Monroig{' '}
            </p>
            <p className="text">
              <span>VFX Prod:</span> Natalia Páez{' '}
            </p>
            <p className="text">
              <span>VFX Coord:</span> Ariadna Ortiz{' '}
            </p>
          </div>

          <div className="production-credits">
            <p className="text">
              <span>Production Company:</span> K&S Films
            </p>
            <p className="text">
              <span>Directors:</span> Santiago Korovsky - Diego Nuñez Irigoyen{' '}
            </p>
            <p className="text">
              <span>DOP:</span> Valeria Mariana Gonzalez - Roman Kasseroller
            </p>
          </div>
        </div>
        <div className="credits">
          <p className="column-left">
            <span>Release Date:</span> Feb 2023{' '}
          </p>
          <p className="text">
            <span>VFX Shots:</span> 110{' '}
          </p>
        </div>
        <BackArrow href={'/episodic'} />
      </div>
    </div>
  );
};

export default Page;
