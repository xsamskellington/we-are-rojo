import VimeoPlayer from '@/components/vimeoPlayer';
import '../../pagesStyles.css';
import BackArrow from '@/components/backArrow';

const Page = () => {
  return (
    <div className="page-container">
      <VimeoPlayer
        src={'https://player.vimeo.com/video/907567026?h=1d0426e025'}
      />
      <div className="info-container">
        <h1 className="title">JAQUE MATE</h1>
        <div className="synopsis">
          <h3>
            <span>SYNOPSIS</span>
          </h3>
          <br></br>
          <p>
            {`A retired secret agent is forced to return to duty when his niece is taken hostage and he must steal a secret formula for her rescue.`}
          </p>
        </div>
        <div className="credits">
          <div className="column-left">
            <p className="text">
              <span>VFX Sup:</span> Jonathan Monroig{' '}
            </p>
            <p className="text">
              <span>VFX Prod:</span> Ariadna Ortiz{' '}
            </p>
          </div>

          <div>
            <p className="text">
              <span>Production Company:</span> Patagonik
            </p>
            <p className="text">
              <span>Director:</span> Jorge Nisco
            </p>
            <p className="text">
              <span>DOP:</span> Bill Nieto
            </p>
          </div>
        </div>
        <div className="credits">
          <p className="column-left">
            <span>Release Date:</span> Jan 2024{' '}
          </p>
          <p className="text">
            <span>VFX Shots:</span> 196{' '}
          </p>
        </div>
        <BackArrow href={'/features'} />
      </div>
    </div>
  );
};

export default Page;
