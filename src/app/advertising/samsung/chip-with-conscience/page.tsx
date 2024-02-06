import VimeoPlayer from '@/components/vimeoPlayer';
import '../../../pagesStyles.css';
import BackArrow from '@/components/backArrow';

const Page = () => {
  return (
    <div className="page-container">
      <VimeoPlayer
        src={'https://player.vimeo.com/video/880994303?h=6ff0018958'}
      />
      <div className="info-container">
        <h1 className="title">
          SAMSUNG | TECH GOES GREEN | A CHIP WITH CONSCIENCE
        </h1>
        <div className="credits">
          <div className="vfx-credits">
            <p className="text">
              <span>VFX Sup:</span> Jonathan Monroig{' '}
            </p>
          </div>

          <div>
            <p className="text">
              <span>Production Company:</span> Can Can Club - 1stAveMachine
            </p>
            <p className="text">
              <span>Director:</span> Becho & Mab
            </p>
            <p className="text">
              <span>Producer:</span> Mechi Serrano
            </p>
            <p className="text">
              <span>DOP:</span> Lautaro Isern
            </p>
          </div>
        </div>
        <BackArrow href={'/advertising'} />
      </div>
    </div>
  );
};

export default Page;
