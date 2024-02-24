import VimeoPlayer from '@/components/vimeoPlayer';
import '../../pagesStyles.css';
import BackArrow from '@/components/backArrow';

const Page = () => {
  return (
    <div className="page-container">
      <VimeoPlayer
        src={'https://player.vimeo.com/video/891897293?h=53015a9e9f'}
      />
      <div className="info-container">
        <h1 className="title">TO CATCH A KILLER</h1>
        <div className="synopsis">
          <h3>
            <span>SYNOPSIS</span>
          </h3>
          <br></br>
          <p>
            {`Baltimore. New Year's Eve. A talented but troubled police officer (Shailene Woodley) is recruited by the FBI's chief investigator (Ben Mendelsohn) to help profile and track down a disturbed individual terrorizing the city.`}
          </p>
        </div>
        <div className="credits">
          <div className="column-left">
            <p className="text">
              <span>VFX Sup:</span> Jonathan Monroig{' '}
            </p>
            <p className="text">
              <span>VFX Prod:</span> Natalia Páez
            </p>
            <p className="text">
              <span>VFX Coord:</span> Ariadna Ortiz{' '}
            </p>
          </div>

          <div>
            <p className="text">
              <span>Production Company:</span> FilmNation Entertainment
            </p>
            <p className="text">
              <span>Director:</span> Damián Szifron
            </p>
            <p className="text">
              <span>DOP:</span> Javier Juliá
            </p>
          </div>
        </div>
        <div className="credits">
          <p className="column-left">
            <span>Release Date:</span> Apr 2023{' '}
          </p>
          <p className="text">
            <span>VFX Shots:</span> 149{' '}
          </p>
        </div>
        <BackArrow href={'/features'} />
      </div>
    </div>
  );
};

export default Page;
