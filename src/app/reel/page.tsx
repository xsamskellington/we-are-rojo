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
            height="950"
            frameBorder="0"
            allow="fullscreen"
          ></iframe>
        </div>
      </div>
      <div className="info-container">
        <h1 className="title">Reel 2023</h1>
      </div>
    </div>
  );
};

export default Page;
