import VimeoPlayer from '@/components/vimeoPlayer';
import '../../pagesStyles.css';

const Page = () => {
  return (
    <>
      <div className="page-container">
        <VimeoPlayer
          src={'https://player.vimeo.com/video/881823400?h=4a14d88430'}
        />
        <div className="info-container">
          <h1 className="title">Los Impresentables</h1>
          <div className="credits">
            <div className="vfx-credits">
              <p className="text">
                <span>VFX Sup:</span> Jonathan Monroig{' '}
              </p>
              <p className="text">
                <span>VFX Prod:</span> Juliana Mazía
              </p>
              <p className="text">
                <span>VFX Coord:</span> Ariadna Ortiz{' '}
              </p>
            </div>

            <div>
              <p className="text">
                <span>Production Company:</span> Wapa
              </p>
              <p className="text">
                <span>Director:</span> Laszlo Papas
              </p>
              <p className="text">
                <span>DOP:</span> Marcelo Camorino
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
