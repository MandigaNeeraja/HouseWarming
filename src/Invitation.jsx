import Countdown from "./Countdown.jsx";
import Reveal from "./Reveal.jsx";
import RsvpForm from "./RsvpForm.jsx";
import ShareInvite from "./ShareInvite.jsx";
import { MAPS_URL } from "./config.js";

function Rule() {
  return (
    <div className="rule" aria-hidden="true">
      <span />
      <i />
      <span />
    </div>
  );
}

function SectionTitle({ children }) {
  return <h2 className="section-title">{children}</h2>;
}

function Petals() {
  return (
    <div className="petals" aria-hidden="true">
      {Array.from({ length: 8 }, (_, index) => (
        <span
          key={`petal-${index}`}
          className="petal"
          style={{
            left: `${6 + index * 12}%`,
            animationDelay: `${index * 0.8}s`,
            animationDuration: `${11 + (index % 4)}s`
          }}
        />
      ))}
      {Array.from({ length: 7 }, (_, index) => (
        <span
          key={`grain-${index}`}
          className="grain"
          style={{
            left: `${10 + index * 12}%`,
            animationDelay: `${0.4 + index * 1.1}s`,
            animationDuration: `${15 + (index % 3)}s`
          }}
        />
      ))}
    </div>
  );
}

function Kolam() {
  return (
    <svg className="kolam" viewBox="0 0 148 56" aria-hidden="true">
      <path d="M74 8c12 9 12 31 0 40-12-9-12-31 0-40z" />
      <path d="M74 16c7 6 7 18 0 24-7-6-7-18 0-24z" />
      <path d="M74 28C58 12 36 14 30 28c8-14 28-16 44 0z" />
      <path d="M74 28c16-16 38-14 44 0-8-14-28-16-44 0z" />
      <circle cx="16" cy="28" r="2.1" />
      <circle cx="132" cy="28" r="2.1" />
      <circle cx="74" cy="28" r="1.7" />
    </svg>
  );
}

function Motifs() {
  return (
    <div className="motifs">
      <svg className="lotus-mini" viewBox="0 0 64 40" aria-hidden="true">
        <path d="M32 34c6-7 7-14 0-22-7 8-6 15 0 22z" />
        <path d="M32 33c10-4 15-11 12-17-6 2-10 6-12 12-2-6-6-10-12-12-3 6 2 13 12 17z" />
        <path d="M32 32c14-1 20-7 18-13-7 1-12 4-15 10 0-7-3-12-9-15 2 6 3 10 6 18z" />
        <path d="M32 32C18 31 12 25 14 19c7 1 12 4 15 10 0-7 3-12 9-15-2 6-3 10-6 18z" />
      </svg>
      <svg className="home-mini" viewBox="0 0 72 52" aria-hidden="true">
        <path d="M8 26 36 8l28 18v22H8Z" />
        <path d="M30 48V32h12v16" />
      </svg>
      <svg className="kalash" viewBox="0 0 48 64" aria-hidden="true">
        <path className="leaf" d="M24 22C14 19 6 11 8 2c8 5 12 11 16 20z" />
        <path className="leaf" d="M24 22c10-3 18-11 16-20-8 5-12 11-16 20z" />
        <path className="nut" d="M24 16c3 0 4.2 2.4 3.6 5-.8 3-6.4 3-7.2 0-.6-2.6.6-5 3.6-5z" />
        <path className="pot" d="M16.5 26h15l2.4 6H14z" />
        <path className="pot" d="M14 32c-6 6-6 16-2.5 24h25C40 48 40 38 34 32z" />
        <path d="M18 43h12" />
      </svg>
    </div>
  );
}

function Diya() {
  return (
    <span className="diya" aria-hidden="true">
      <i />
    </span>
  );
}

export default function Invitation() {
  return (
    <main>
      <Petals />
      <article className="sheet">
        <header className="hero">
          <figure className="portrait">
            <img src="/family.jpg" alt="Viswanath Suguna Kurumella with their family" />
          </figure>
          <p className="kicker">You are warmly invited</p>
          <h1>
            <span className="script-title">Housewarming</span>
            <span className="ceremony">Ceremony</span>
          </h1>
          <p className="host-name">Viswanath Suguna Kurumella</p>
          <Kolam />
          <Rule />
          <p className="blessing">
            We are delighted to invite you and your family to our Housewarming Ceremony and seek your blessings as we step into our new home.
          </p>
          <div className="threshold">
            <Motifs />
            <p>Cross the threshold of our new home</p>
          </div>
        </header>

        <Reveal>
          <section className="hour" aria-labelledby="hour-title">
            <SectionTitle>
              <span id="hour-title">The Auspicious Hour</span>
            </SectionTitle>
            <div className="diya-pair" aria-hidden="true">
              <Diya />
              <Diya />
            </div>
            <p className="when-main">Saturday, 21 November 2026</p>
            <p className="when-sub">Muhurtham at 8:53 in the evening</p>
            <Countdown />
          </section>
        </Reveal>

        <Reveal>
          <section className="program" aria-labelledby="program-title">
            <SectionTitle>
              <span id="program-title">Celebrations</span>
            </SectionTitle>
            <ol>
              <li className="event">
                <div className="rail" aria-hidden="true"><span className="dot" /></div>
                <div>
                  <p className="event-name">Housewarming muhurtham</p>
                  <p className="event-when">Saturday, 21 November 2026</p>
                  <p className="event-time">8:53 in the evening</p>
                </div>
              </li>
              <li className="event">
                <div className="rail" aria-hidden="true"><span className="dot" /></div>
                <div>
                  <p className="event-name">Lunch</p>
                  <p className="event-when">Sunday, 22 November 2026</p>
                  <p className="event-time">From 12 noon</p>
                </div>
              </li>
            </ol>
          </section>
        </Reveal>

        <Reveal>
          <section className="venue" aria-labelledby="venue-title">
            <SectionTitle>
              <span id="venue-title">Residence</span>
            </SectionTitle>
            <address>
              Flat No. 201, Neon Aadhvaya,
              <br />
              Chakrapuri Colony, Ameenpur,
              <br />
              Hyderabad.
            </address>
            <a className="ghost-btn" href={MAPS_URL} target="_blank" rel="noopener noreferrer">
              Get directions
            </a>
          </section>
        </Reveal>

        <Reveal>
          <RsvpForm />
        </Reveal>

        <Reveal>
          <ShareInvite />
        </Reveal>

        <footer className="closing">
          <Rule />
          <p>We will be glad to welcome you home.</p>
        </footer>
      </article>
    </main>
  );
}
