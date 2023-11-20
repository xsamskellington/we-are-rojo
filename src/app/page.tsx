import './styles.css';

const Home = () => {
  return (
    <>
      <div className="video-container">
        <video
          className="video"
          controlsList="nodownload"
          autoPlay
          loop
          // poster={image}
        >
          <source src={'/rojoReel.mp4'} type="video/mp4" />
          Tu navegador no soporta el tag de video.
        </video>
      </div>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        temporibus vero sit. Porro perferendis nesciunt labore, alias, voluptate
        placeat ipsam reprehenderit soluta dolore minima natus voluptas,
        pariatur aspernatur temporibus? Alias.Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Nesciunt temporibus vero sit. Porro
        perferendis nesciunt labore, alias, voluptate placeat ipsam
        reprehenderit soluta dolore minima natus voluptas, pariatur aspernatur
        temporibus? Alias.Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Nesciunt temporibus vero sit. Porro perferendis nesciunt labore,
        alias, voluptate placeat ipsam reprehenderit soluta dolore minima natus
        voluptas, pariatur aspernatur temporibus? Alias.Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Nesciunt temporibus vero sit. Porro
        perferendis nesciunt labore, alias, voluptate placeat ipsam
        reprehenderit soluta dolore minima natus voluptas, pariatur aspernatur
        temporibus? Alias.Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Nesciunt temporibus vero sit. Porro perferendis nesciunt labore,
        alias, voluptate placeat ipsam reprehenderit soluta dolore minima natus
        voluptas, pariatur aspernatur temporibus? Alias.Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Nesciunt temporibus vero sit. Porro
        perferendis nesciunt labore, alias, voluptate placeat ipsam
        reprehenderit soluta dolore minima natus voluptas, pariatur aspernatur
        temporibus? Alias.Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Nesciunt temporibus vero sit. Porro perferendis nesciunt labore,
        alias, voluptate placeat ipsam reprehenderit soluta dolore minima natus
        voluptas, pariatur aspernatur temporibus? Alias.Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Nesciunt temporibus vero sit. Porro
        perferendis nesciunt labore, alias, voluptate placeat ipsam
        reprehenderit soluta dolore minima natus voluptas, pariatur aspernatur
        temporibus? Alias.
      </h1>
    </>
  );
};

export default Home;
