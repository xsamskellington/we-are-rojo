'use client';
import VimeoPlayer from '@/components/vimeoPlayer';
import BackArrow from '@/components/backArrow';
import '../../pagesStyles.css';
import { useLangHook } from '@/app/hooks/setLangHook';

const Page = () => {
  const { useLanguageSwitcher } = useLangHook();
  const i18n = useLanguageSwitcher();
  const { title, synopsis, date } = i18n.tangalanga;
  const { synopsisWord, productionCompany, releaseDate, DOP } =
    i18n.commonWording;
  return (
    <div className="page-container">
      <VimeoPlayer
        src={'https://player.vimeo.com/video/896349740?h=9857f375da'}
      />
      <div className="info-container">
        <h1 className="title">{title}</h1>
        <div className="synopsis">
          <h3>
            <span>{synopsisWord}</span>
          </h3>
          <br></br>
          <p>{synopsis}</p>
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
              <span>{productionCompany}:</span> Varsovia Films
            </p>
            <p className="text">
              <span>Director:</span> Mateo Bendesky
            </p>
            <p className="text">
              <span>{DOP}:</span> Daniel Ortega
            </p>
          </div>
        </div>
        <div className="credits">
          <p className="column-left">
            <span>{releaseDate}:</span> {date}{' '}
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
