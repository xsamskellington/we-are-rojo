import '../pagesStyles.css';
import VideoPlayer from '@/components/videoPlayer';

const Page = () => {
  return (
    <>
      <div className="page-container">
        <VideoPlayer src={'/rojoReel.mp4'} image={''} />
        <div className="info-container">
          <h1 className="title">Reel 2023</h1>
        </div>
      </div>
    </>
  );
};

export default Page;
