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

function App() {
  return (
    <div className="App">
      <main>
        <h1>
          Salut{" "}
          <span role="img" aria-label="wave">
            👋
          </span>
        </h1>
        <p>
          Je m'appelle Jean-Marie, passionné par la création de logiciels
          robustes et intuitifs, je suis fort d'une expérience de{" "}
          {dayjs("2020-11-16").fromNow(true)} en développement web et déterminé
          à concevoir des solutions innovantes pour aider les entreprises à
          atteindre leurs objectifs.
        </p>
      </main>
      <footer>
        <a
          href="https://www.linkedin.com/in/jean-marie-r-727957122"
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
    </div>
  );
}

export default App;
