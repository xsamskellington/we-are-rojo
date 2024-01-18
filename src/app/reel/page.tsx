import '../pagesStyles.css';
import VimeoPlayer from '@/components/vimeoPlayer';

const Page = () => {
  return (
    <div className="page-container">
      <VimeoPlayer
        src={'https://player.vimeo.com/video/896918155?h=7ddbaafca7'}
      />
      <div className="info-container">
        <h1 className="title">Reel 2023</h1>
      </div>
    </div>
  );
};

export default Page;
