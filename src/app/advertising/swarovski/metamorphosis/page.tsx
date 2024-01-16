import VimeoPlayer from '@/components/vimeoPlayer';
import '../../../pagesStyles.css';
import BackArrow from '@/components/backArrow';

const Page = () => {
  return (
    <div className="page-container">
      <VimeoPlayer
        src={'https://player.vimeo.com/video/891929656?h=2badc595f5'}
      />
      <div className="info-container">
        <h1 className="title">SWAROVSKY | METAMORPHOSIS</h1>
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
              <span>Production Company:</span> Motion Principles & Day
              International
            </p>
            <p className="text">
              <span>Creative Director:</span> Manuel Boim
            </p>
            <p className="text">
              <span>Studio Director:</span> Guido Bertoni
            </p>
          </div>
        </div>
        <BackArrow href={'/advertising'} />
      </div>
    </div>
  );
};

export default Page;
