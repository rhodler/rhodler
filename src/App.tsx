import "./App.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import advancedFormat from "dayjs/plugin/advancedFormat";
import "dayjs/locale/fr";
dayjs().locale("fr").format();
dayjs.extend(relativeTime);
dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.extend(advancedFormat);
dayjs.locale("fr");
dayjs.tz.setDefault("Europe/Paris");

import services from "./data/services";

function App() {
  return (
    <>
      <section id="about">
        <h1>
          Salut{" "}
          <span role="img" aria-label="developer">
          👨🏾‍💻
          </span>
        </h1>
        <h2 className="intro">
          Je m'appelle Jean-Marie, développeur Fullstack TypeScript, passionné par les technologies émergentes, je souhaite contribuer au développement de produits intelligents et performants, tout en collaborant avec des équipes engagées dans l’innovation.
        </h2>
        <h3>
          <a href="mailto:pro.jean-marie@outlook.com" target="_blank">
            Me contacter
          </a>
        </h3>
      </section>

      <section id="services">
        <div className="title">Mes compétences</div>
        <ul>
          {services.map((service) => (
            <li key={service.name}>
              <h4>{service.name}</h4>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <footer>
        <a href="mailto:pro.jean-marie@outlook.com" target="_blank">
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/jm-r/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/rhodler"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </footer>
    </>
  );
}

export default App;
