import './styles.css';

export interface PageSectionVideoProps {
  src: string;
}

const PageSectionVideo = ({ src }: PageSectionVideoProps) => {
  return (
    <div className="video-container">
      <iframe
        className="video"
        title="vimeo-player"
        src={src}
        frameBorder="0"
        allowFullScreen
        allow="autoplay; fullscreen"
      ></iframe>
    </div>
  );
};

export default PageSectionVideo;
