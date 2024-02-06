import './styles.css';

export interface PageSectionVideoProps {
  src: string;
}

const PageSectionVideo = ({ src }: PageSectionVideoProps) => {
  return (
    <div className="video-page-container">
      <div className="video-section-container">
        <iframe
          className="video-section"
          src={src}
          width="1920"
          height="1080"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
        ></iframe>
      </div>
    </div>
  );
};

export default PageSectionVideo;
