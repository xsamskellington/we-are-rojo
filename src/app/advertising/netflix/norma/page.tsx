import VimeoPlayer from '@/components/vimeoPlayer';
import '../../../pagesStyles.css';
import BackArrow from '@/components/backArrow';

const Page = () => {
  return (
    <div className="page-container">
      <VimeoPlayer
        src={'https://player.vimeo.com/video/901189414?h=8ead0a1fef'}
      />
      <div className="info-container">
        <h1 className="title">NETFLIX | NORMA</h1>
        <div className="credits">
          <div className="vfx-credits">
            <p className="text">
              <span>VFX Sup:</span> Jonathan Monroig{' '}
            </p>
            <p className="text">
              <span>VFX Prod:</span> Ariadna Ortiz{' '}
            </p>
          </div>

          <div>
            <p className="text">
              <span>Production Company:</span> Labhouse
            </p>
            <p className="text">
              <span>Director:</span> Juan Cabral
            </p>
            <p className="text">
              <span>Producer:</span> Nicolás Abelovich
            </p>
            <p className="text">
              <span>DOP:</span> Javier Juliá
            </p>
            <p className="text">
              <span>Post Sup:</span> Julieta Fernández Castagnino
            </p>
          </div>
        </div>
        <BackArrow href={'/advertising'} />
      </div>
    </div>
  );
};

export default Page;
