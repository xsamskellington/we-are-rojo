import './styles.css';

export interface VideoPlayerProps {
  src: string;
  image?: string;
}

const VideoPlayer = ({ src, image }: VideoPlayerProps) => {
  return (
    <div className="video-container">
      <video
        controls
        className="video"
        controlsList="nodownload"
        poster={image}
      >
        <source src={src} type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
    </div>
  );
};

export default VideoPlayer;
