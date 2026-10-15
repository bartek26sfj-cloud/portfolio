import "./Contact.css";

function Contact() {
  return (
    <section id="kontakt" className="section contact">
      <div className="container contact__inner">
        <span className="eyebrow">Kontakt</span>
        <h2 className="contact__title">
          La oss bygge noe <span className="accent-text">sammen</span>
        </h2>
        <p className="contact__subtitle">
          Ledig for praksisplass, sommerjobb eller prosjekter. Ta gjerne
          kontakt.
        </p>

        <div className="contact__actions">
          <a href="mailto:bartus836@hotmail.no" className="btn btn-primary">
            bartus836@hotmail.no
          </a>
          <a href="tel:+4740298612" className="btn btn-outline">
            402 98 612
          </a>
        </div>

        <a
          href="https://github.com/bartek26sfj-cloud"
          target="_blank"
          rel="noreferrer"
          className="contact__github"
        >
          github.com/bartek26sfj-cloud
        </a>
        <span className="contact__location">Sandefjord, Norge</span>
      </div>

      <footer className="footer">
        <div className="container footer__inner">
          <span>© {new Date().getFullYear()} Bartlomiej Dawid Tadel</span>
          <span>Bygget med React &amp; Vite</span>
        </div>
      </footer>
    </section>
  );
}

export default Contact;
