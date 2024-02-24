import VimeoPlayer from '@/components/vimeoPlayer';
import '../../pagesStyles.css';
import BackArrow from '@/components/backArrow';

const Page = () => {
  return (
    <div className="page-container">
      <VimeoPlayer
        src={'https://player.vimeo.com/video/891896024?h=9b88673625'}
      />
      <div className="info-container">
        <h1 className="title">ECHOES OF A CRIME</h1>
        <div className="synopsis">
          <h3>
            <span>SYNOPSIS</span>
          </h3>
          <br></br>
          <p>
            {`Julián Lemar, a bestselling thriller writer, goes on vacation with
            his family to a cabin in the woods. The first night, during a severe
            storm, the power goes out and a woman shows up desperately asking
            for help: her husband killed her son and now he's after her. From
            that moment on, danger and deception are a constant threat and for
            Julián a hellish night begins until he discovers the truth.`}
          </p>
        </div>
        <div className="credits">
          <div className="column-left">
            <p className="text">
              <span>VFX Sup:</span> Jonathan Monroig{' '}
            </p>
            <p className="text">
              <span>VFX Prod:</span> Eva Amuchastegui{' '}
            </p>
            <p className="text">
              <span>VFX Coord:</span> Ariadna Ortiz{' '}
            </p>
          </div>

          <div>
            <p className="text">
              <span>Production Company:</span> Particular Crowd-Tieless Media
            </p>
            <p className="text">
              <span>Director:</span> Cristian Bernard
            </p>
            <p className="text">
              <span>DOP:</span> Andrés Mazzon
            </p>
          </div>
        </div>
        <div className="credits">
          <p className="column-left">
            <span>Release Date:</span> Jan 2022{' '}
          </p>
          <p className="text">
            <span>VFX Shots:</span>13{' '}
          </p>
        </div>
        <BackArrow href={'/features'} />
      </div>
    </div>
  );
};

export default Page;
