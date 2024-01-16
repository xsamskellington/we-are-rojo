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
        <div className="credits">
          <div className="vfx-credits">
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
        <BackArrow href={'/episodic'} />
      </div>
    </div>
  );
};

export default Page;
