import VimeoPlayer from '@/components/vimeoPlayer';
import '../../pagesStyles.css';
import BackArrow from '@/components/backArrow';

const Page = () => {
  return (
    <div className="page-container">
      <VimeoPlayer
        src={'https://player.vimeo.com/video/896349740?h=9857f375da'}
      />
      <div className="info-container">
        <h1 className="title">THE TANGALANGA METHOD</h1>
        <div className="synopsis">
          <h3>
            <span>SYNOPSIS</span>
          </h3>
          <br></br>
          <p>
            {`Jorge Rizzi is a shy office worker who cannot speak in public. After the hospitalization of his friend and confidant, he begins to experience a series of changes in his life through hypnosis.`}
          </p>
        </div>
        <div className="credits">
          <div className="column-left">
            <p className="text">
              <span>VFX Sup:</span> Natalia Páez{' '}
            </p>
            <p className="text">
              <span>VFX Prod:</span> Ariadna Ortiz{' '}
            </p>
          </div>

          <div>
            <p className="text">
              <span>Production Company:</span> Varsovia Films
            </p>
            <p className="text">
              <span>Production:</span> Diego Dubcovsky
            </p>
            <p className="text">
              <span>Director:</span> Mateo Bendesky
            </p>
            <p className="text">
              <span>DOP:</span> Daniel Ortega
            </p>
          </div>
        </div>
        <div className="credits">
          <p className="column-left">
            <span>Release Date:</span> Jan 2023{' '}
          </p>
          <p className="text">
            <span>VFX Shots:</span> 12{' '}
          </p>
        </div>
        <BackArrow href={'/features'} />
      </div>
    </div>
  );
};

export default Page;
