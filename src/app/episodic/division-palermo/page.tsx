import VimeoPlayer from '@/components/vimeoPlayer';
import '../../pagesStyles.css';

const Page = () => {
  return (
    <div className="page-container">
      <VimeoPlayer
        src={'https://player.vimeo.com/video/891895772?h=9cbcea3883'}
      />
      <div className="info-container">
        <h1 className="title">División Palermo</h1>
        <div className="credits">
          <div className="vfx-credits">
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
      </div>
    </div>
  );
};

export default Page;
