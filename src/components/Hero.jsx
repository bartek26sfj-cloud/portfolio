import photo from "../assets/bartlomiej.jpg";
import "./Hero.css";

function Hero() {
  return (
    <section id="topp" className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <span className="hero__status">
            <span className="hero__status-dot" />
            Under utdanning hos Kodehode
          </span>

          <h1 className="hero__title">Bartlomiej Dawid Tadel</h1>
          <p className="hero__role">Frontendutvikler fra Sandefjord under opplæring</p>

          <p className="hero__subtitle">
            Bygger responsive og brukervennlige nettsider og webapplikasjoner
            med React, JavaScript, HTML og CSS — med erfaring fra produksjon
            og logistikk i bagasjen.
          </p>

          <div className="hero__actions">
            <a href="#prosjekter" className="btn btn-primary">
              Se prosjekter
            </a>
            <a href="#kontakt" className="btn btn-outline">
              Kontakt meg
            </a>
          </div>
        </div>

        <div className="hero__photo">
          <div className="hero__photo-glow" aria-hidden="true" />
          <img src={photo} alt="Portrett av Bartlomiej Dawid Tadel" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
