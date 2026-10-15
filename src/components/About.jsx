import "./About.css";

const stats = [
  { value: "6+", label: "Prosjekter bygget" },
  { value: "10+", label: "År med arbeidserfaring" },
  { value: "2", label: "Språk (norsk / polsk)" },
  { value: "∞", label: "Lærevilje" },
];

function About() {
  return (
    <section id="om-meg" className="section about">
      <div className="container">
        <div className="about__grid">
          <div>
            <span className="eyebrow">Om meg</span>
            <h2 className="section-title">Litt om meg</h2>

            <p className="about__text">
              Jeg går utviklerutdanning hos Kodehode og bruker mye av
              fritiden på egne prosjekter i React. Det jeg liker best er å ta
              en idé fra tom mappe til noe som faktisk kjører, og å grave meg
              ned i det når noe ikke virker som det skal.
            </p>
            <p className="about__text">
              Bakgrunnen min er fra produksjon og logistikk, der jeg jobbet
              tett på systemer, skannere og maskiner som måtte stilles riktig
              inn. Den vanen med å jobbe strukturert tar jeg med meg inn
i koden.
            </p>
          </div>

          <div className="about__stats">
            {stats.map((stat) => (
              <div className="about__stat" key={stat.label}>
                <span className="about__stat-value">{stat.value}</span>
                <span className="about__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
