import '../pagesStyles.css';
import VimeoPlayer from '@/components/vimeoPlayer';
import './styles.css';

const Page = () => {
  return (
    <div className="page-container">
      <div className="video-page-container">
        <div className="video-section-container">
          <iframe
            className="video-section"
            src={'https://player.vimeo.com/video/910187264?h=2cd41c1f82'}
            width="1920"
            height="920"
            allow="fullscreen"
            loading="lazy"
            frameBorder={0}
          ></iframe>
        </div>
      </div>
      <h1 className="title">Reel 2023</h1>
    </div>
  );
};

export default Page;
