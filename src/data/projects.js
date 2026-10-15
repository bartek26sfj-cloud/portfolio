import sommerprosjektImg from "../assets/projects/sommerprosjekt.jpg";
import gutendexImg from "../assets/projects/gutendex.jpg";
import menycImg from "../assets/projects/menyc.jpg";
import treningsloggImg from "../assets/projects/treningslogg.jpg";
import todoappImg from "../assets/projects/todoapp.jpg";
import craftsvillaImg from "../assets/projects/craftsvilla.jpg";

const GITHUB = "https://github.com/bartek26sfj-cloud";

export const projects = [
  {
    title: "Sommerprosjekt — oppskriftsapp",
    description:
      "React-app bygget mot TheMealDB sitt API. Brukeren søker etter retter og åpner den enkelte oppskriften for å se ingredienser og fremgangsmåte, med håndtering av lastetilstand og gjenbrukbare komponenter.",
    tags: ["React", "REST API", "TheMealDB"],
    image: sommerprosjektImg,
    github: `${GITHUB}/sommerprosjekt`,
    demo: "https://bartek26sfj-cloud.github.io/sommerprosjekt/",
  },
  {
    title: "Gutendex Books — søk i bokdatabase",
    description:
      "Søker i Gutendex sitt bokarkiv gjennom REST API. Søkeordet sendes som URL-parameter, kallene kjøres asynkront med async/await, og treffene vises som kort med tittel, forfatter og omslag.",
    tags: ["React", "REST API", "Async/await"],
    image: gutendexImg,
    github: `${GITHUB}/gutendex-books`,
    demo: "https://bartek26sfj-cloud.github.io/gutendex-books/",
  },
  {
    title: "Restaurantmeny",
    description:
      "Digital menyvisning for restaurant med kort for hver rett, bygget med gjenbrukbare React-komponenter.",
    tags: ["React", "CSS Modules"],
    image: menycImg,
    github: `${GITHUB}/menyC`,
    demo: "https://bartek26sfj-cloud.github.io/menyC/",
  },
  {
    title: "Treningslogg",
    description:
      "Eget verktøy for å logge treningsøkter. Brukeren registrerer øvelser og økter og får dem samlet i en oversikt, med vekt på DOM-håndtering slik at skjema og liste henger sammen.",
    tags: ["JavaScript", "LocalStorage"],
    image: treningsloggImg,
    github: `${GITHUB}/treningslogg`,
    demo: "https://bartek26sfj-cloud.github.io/treningslogg/",
  },
  {
    title: "TodoApp — oppgaveliste med temavalg",
    description:
      "Oppgaveliste med lys og mørk modus. Tilstanden er delt i to separate Context-er, en for oppgavene og en for tema, slik at data er tilgjengelig der de trengs uten prop-drilling.",
    tags: ["React", "Context API"],
    image: todoappImg,
    github: `${GITHUB}/context-app`,
    demo: "https://bartek26sfj-cloud.github.io/context-app/",
  },
  {
    title: "Craftsvilla — nettbutikk-klone",
    description:
      "Flersidig nettside bygget med ren HTML og CSS: forside, galleri, booking og tilbakemelding. Fokus på layout, responsivt design og strukturert markup uten rammeverk.",
    tags: ["HTML", "CSS"],
    image: craftsvillaImg,
    github: `${GITHUB}/oppgave-craftvilla`,
    demo: "https://bartek26sfj-cloud.github.io/oppgave-craftvilla/",
  },
];
