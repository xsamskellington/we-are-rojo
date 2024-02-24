import VimeoPlayer from '@/components/vimeoPlayer';
import '../../pagesStyles.css';
import BackArrow from '@/components/backArrow';

const Page = () => {
  return (
    <div className="page-container">
      <VimeoPlayer
        src={'https://player.vimeo.com/video/891895523?h=090bb41e6a'}
      />
      <div className="info-container">
        <h1 className="title">ADIOS, BUENOS AIRES</h1>
        <div className="synopsis">
          <h3>
            <span>SYNOPSIS</span>
          </h3>
          <br></br>
          <p>
            {`Buenos Aires, November 2001. Julio Färber takes the decision to leave his beloved Buenos Aires forever, the government freezes all bank accounts in the whole country. Mariela, a witty young woman and feisty cab driver, bumps into his car at full speed, damaging Julio's last possession of value before stealing his heart.`}
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
              <span>Production Company:</span> German Kral Filmproduktion -
              Monogatari Films - Salamanca Cine
            </p>
            <p className="text">
              <span>Director:</span> Germán Kral
            </p>
            <p className="text">
              <span>DOP:</span> Christian Cottet - Daniel Ortega
            </p>
          </div>
        </div>
        <div className="credits">
          <p className="column-left">
            <span>Release Date:</span> May 2023{' '}
          </p>
          <p className="text">
            <span>VFX Shots:</span> 63{' '}
          </p>
        </div>
        <BackArrow href={'/features'} />
      </div>
    </div>
  );
};

export default Page;
