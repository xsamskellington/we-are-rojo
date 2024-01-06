import './styles.css';

export interface PageSectionVideoProps {
  src: string;
}

const PageSectionVideo = ({ src }: PageSectionVideoProps) => {
  return (
    <div className="video-container">
      <video
        className="video"
        controlsList="nodownload"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={src} type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
    </div>
  );
};

export default PageSectionVideo;
