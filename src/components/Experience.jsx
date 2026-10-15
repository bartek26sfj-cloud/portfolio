import "./Experience.css";

const education = [
  {
    period: "Mars 2026 – d.d",
    title: "Frontend- og fullstack-utvikler under opplæring",
    place: "Kodehode",
    description:
      "Teoridelen er fullført. Bygger prosjekter i React, jobber med REST API-er og øver på fullstack-utvikling.",
  },
  {
    period: "2011 – 2012",
    title: "Service og samferdsel, VG1",
    place: "Sandefjord videregående skole",
    description: "Grunnleggende videregående utdanning innen service og samferdsel.",
  },
];

const work = [
  {
    period: "Okt 2021 – nov 2023",
    title: "Lagermedarbeider",
    place: "NG Digital",
    description:
      "Plukk og pakking mot lagersystemet med håndterminal og strekkodeskanner. Registrering av forsendelser, truckkjøring og kundekontakt.",
  },
  {
    period: "Nov 2018 – sep 2021",
    title: "Produksjons og lagermedarbeider",
    place: "Bergene Holm, avd. Larvik",
    description:
      "Kjørte maskiner på produksjonslinjen og stilte dem inn på riktige parametere. Kontrollerte kvalitet og feilsøkte når linjen stoppet. Periodevis skiftleder med ansvar for teamet.",
  },
  {
    period: "Mai – okt 2018",
    title: "Lagersjef",
    place: "Eventmarked Alexx Alexander",
    description:
      "Ansvar for lager og medarbeidere. Planla transport og pakking av utstyr til arrangementer over hele landet.",
  },
  {
    period: "2013 – 2018",
    title: "Kundeservice og produksjon",
    place: "Russervice / Findus AS",
    description:
      "Sesongarbeid hos begge bedriftene gjennom flere år. Jeg gikk mellom dem etter hvor det var behov, og de to sesongene utfylte hverandre gjennom året. Hos Russervice hadde jeg daglig kundekontakt på telefon og e-post og behandlet reklamasjoner, og hos Findus jobbet jeg på produksjonslinjen.",
  },
];

function ExperienceList({ items }) {
  return (
    <ol className="experience__list">
      {items.map((item) => (
        <li className="experience__item" key={item.title}>
          <span className="experience__period">{item.period}</span>
          <div>
            <h3 className="experience__title">{item.title}</h3>
            <p className="experience__place">{item.place}</p>
            <p className="experience__desc">{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function Experience() {
  return (
    <section id="erfaring" className="section experience">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Erfaring</span>
          <h2 className="section-title">Hvor jeg har vært</h2>
        </div>

        <h3 className="experience__group-title">Utdanning</h3>
        <ExperienceList items={education} />

        <h3 className="experience__group-title experience__group-title--spaced">
          Arbeidserfaring
        </h3>
        <ExperienceList items={work} />
      </div>
    </section>
  );
}

export default Experience;
