import VimeoPlayer from '@/components/vimeoPlayer';
import '../../pagesStyles.css';
import BackArrow from '@/components/backArrow';

const Page = () => {
  return (
    <div className="page-container">
      <VimeoPlayer
        src={'https://player.vimeo.com/video/891896887?h=eede2924eb'}
      />
      <div className="info-container">
        <h1 className="title">THE UNPRESENTABLES</h1>
        <div className="synopsis">
          <h3>
            <span>SYNOPSIS</span>
          </h3>
          <br></br>
          <p>
            {`A teenager recently expelled from the Naval Academy in early 70's Argentina befriends four notorious youths in a small city near Buenos Aires, partakes in their pranks and aspirations, and in the process experiences first love.
`}
          </p>
        </div>
        <div className="credits">
          <div className="column-left">
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

        <div className="credits">
          <p className="column-left">
            <span>Release Date:</span> Feature Film{' '}
          </p>
          <p className="text">
            <span>VFX Shots:</span> 125{' '}
          </p>
        </div>
        <BackArrow href={'/features'} />
      </div>
    </div>
  );
};

export default Page;
