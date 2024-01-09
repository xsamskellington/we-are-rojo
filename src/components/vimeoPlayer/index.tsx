import './styles.css';
export interface VimeoPlayerProps {
  src: string;
}

const vimeoPlayer = ({ src }: VimeoPlayerProps) => {
  return (
    <div className="video-container">
      <iframe
        className="video"
        title="vimeo-player"
        src={src}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default vimeoPlayer;
