import './styles.css';
const Page = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <p>
          Somos un estudio especializado en efectos visuales, servicios de
          postproducción y Color Grading para publicidad, series de TV y
          películas.
        </p>
        <p>
          Nuestras producciones están realizadas por un excelente equipo de
          efectos visuales, el departamento editorial y artistas y asistentes de
          gradación de color.
        </p>
      </div>

      <div className="social-text">
        <div>
          <p>Contacto</p>
          <a href="mailto:contact@wearerojo.com" target="_blank">
            contact@wearerojo.com
          </a>
        </div>
        <div>
          <p>
            <a
              href="https://www.linkedin.com/company/wearerojo/"
              target="_blank"
            >
              Linkedin
            </a>
          </p>
          <p>
            <a
              href="https://www.instagram.com/wearerojostudio/"
              target="_blank"
            >
              Instagram
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
