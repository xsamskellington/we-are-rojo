import VimeoPlayer from '@/components/vimeoPlayer';
import '../../pagesStyles.css';

const Page = () => {
  return (
    <div className="page-container">
      <VimeoPlayer
        src={'https://player.vimeo.com/video/896349740?h=9857f375da'}
      />
      <div className="info-container">
        <h1 className="title">El Método Tangalanga</h1>
        <div className="credits">
          <div className="vfx-credits">
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
      </div>
    </div>
  );
};

export default Page;
