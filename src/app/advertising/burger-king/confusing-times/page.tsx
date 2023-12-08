import VimeoPlayer from '@/components/vimeoPlayer';
import '../../../pagesStyles.css';

const Page = () => {
  return (
    <div className="page-container">
      <VimeoPlayer
        src={'https://player.vimeo.com/video/882112436?h=76bba80866'}
      />

      <div className="info-container">
        <h1 className="title">Burger King | Confusing times</h1>
        <div className="credits">
          <div className="vfx-credits">
            <p className="text">
              <span>VFX Sup:</span> Jonathan Monroig{' '}
            </p>
            <p className="text">
              <span>VFX Coord:</span> Natalia Páez{' '}
            </p>
          </div>

          <div>
            <p className="text">
              <span>Production Company:</span> MJZ Worldwide - Labhouse
            </p>
            <p className="text">
              <span>Director:</span> Juan Cabral
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
