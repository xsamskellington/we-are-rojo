import './styles.css';

export interface PageSectionVideoProps {
  src: string;
}

const PageSectionVideo = ({ src }: PageSectionVideoProps) => {
  return (
    <div className="video-page-container">
      <div className="video-section-container">
        <video
          className="video-section"
          controlsList="nodownload"
          autoPlay
          loop
          muted
        >
          <source src={src} type="video/mp4" />
          Tu navegador no soporta el tag de video.
        </video>
      </div>
    </div>
  );
};

export default PageSectionVideo;
