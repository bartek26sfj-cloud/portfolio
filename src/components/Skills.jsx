import "./Skills.css";

const groups = [
  {
    title: "Språk & rammeverk",
    items: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Verktøy",
    items: ["Vite", "Git & GitHub", "GitHub Pages", "VS Code"],
  },
  {
    title: "Erfaring med",
    items: [
      "Komponentstruktur",
      "React Hooks",
      "Context API",
      "CSS Modules",
      "Responsivt design",
      "REST API (fetch / async-await)",
    ],
  },
  {
    title: "Språk",
    items: ["Polsk (morsmål)", "Norsk"],
  },
];

function Skills() {
  return (
    <section id="ferdigheter" className="section skills">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Ferdigheter</span>
          <h2 className="section-title">Verktøykassa mi</h2>
        </div>

        <div className="skills__list">
          {groups.map((group) => (
            <div className="skills__row" key={group.title}>
              <h3 className="skills__row-title">{group.title}</h3>
              <ul className="skills__tags">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
