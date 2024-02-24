import VimeoPlayer from '@/components/vimeoPlayer';
import '../../pagesStyles.css';
import BackArrow from '@/components/backArrow';

const Page = () => {
  return (
    <div className="page-container">
      <VimeoPlayer
        src={'https://player.vimeo.com/video/897212916?h=b9eb47e63b'}
      />

      <div className="info-container">
        <h1 className="title">Ctrl + Alt + Desire</h1>
        <div className="synopsis">
          <h3>
            <span>SYNOPSIS</span>
          </h3>
          <br></br>
          <p>
            {`Hell-bent on exacting revenge and proving he was framed for his sister's murder, Álex sets out to unearth much more than the crime's real culprit.`}
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
            <p className="text">
              <span>Art Director:</span> Matias Sciaini - Laura Toscano{' '}
            </p>
          </div>

          <div className="production-credits">
            <p className="text">
              <span>Production Company:</span> Ark Media
            </p>
            <p className="text">
              <span>Director:</span> Colin Archdeacon{' '}
            </p>
          </div>
        </div>
        <div className="credits">
          <p className="column-left">
            <span>Release Date:</span> May 2022{' '}
          </p>
          <p className="text">
            <span>VFX Shots:</span> 5{' '}
          </p>
        </div>
        <BackArrow href={'/episodic'} />
      </div>
    </div>
  );
};

export default Page;
