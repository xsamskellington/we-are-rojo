import VimeoPlayer from '@/components/vimeoPlayer';
import '../../pagesStyles.css';
import BackArrow from '@/components/backArrow';

const Page = () => {
  return (
    <div className="page-container">
      <VimeoPlayer
        src={'https://player.vimeo.com/video/891894880?h=40279263ee'}
      />
      <div className="info-container">
        <h1 className="title">30 NIGHTS WITH MY EX</h1>
        <div className="synopsis">
          <h3>
            <span>SYNOPSIS</span>
          </h3>
          <br></br>
          <p>
            {`At the request of their daughter, a separated couple has to live together for thirty days after the ex-wife comes from a long psychiatric hospitalization.`}
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

          <div>
            <p className="text">
              <span>Production Company:</span> Patagonik
            </p>
            <p className="text">
              <span>Director:</span> Adrián Suar
            </p>
            <p className="text">
              <span>DOP:</span> Félix Monti
            </p>
          </div>
        </div>
        <div className="credits">
          <p className="column-left">
            <span>Release Date:</span> Ago 2022{' '}
          </p>
          <p className="text">
            <span>VFX Shots:</span> 42{' '}
          </p>
        </div>

        <BackArrow href={'/features'} />
      </div>
    </div>
  );
};

export default Page;
