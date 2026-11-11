const MOTES = [
  { left: "12%", delay: "0s", duration: "9s" },
  { left: "24%", delay: "1.4s", duration: "11s" },
  { left: "38%", delay: "0.6s", duration: "8s" },
  { left: "63%", delay: "2s", duration: "10s" },
  { left: "74%", delay: "0.2s", duration: "12s" },
  { left: "86%", delay: "1.1s", duration: "9.5s" }
];

export default function Opening({ opening, onOpen }) {
  return (
    <div className={`gate${opening ? " is-open" : ""}`}>
      <div className="door door-left" aria-hidden="true"><span className="knocker" /></div>
      <div className="door door-right" aria-hidden="true"><span className="knocker" /></div>
      {MOTES.map((mote) => (
        <span
          key={mote.left}
          className="mote"
          style={{ left: mote.left, animationDelay: mote.delay, animationDuration: mote.duration }}
        />
      ))}
      <div className="veil">
        <span className="seal-frame">
          <img className="seal-photo" src="/family.jpg" alt="" />
        </span>
        <p className="kicker">You are warmly invited</p>
        <h1 className="script-title">Housewarming</h1>
        <p className="ceremony">Ceremony</p>
        <p className="seal-host">Viswanath Suguna Kurumella</p>
        <p className="seal-date">21 November 2026 · 8:53 pm</p>
        <button className="open-btn" type="button" onClick={onOpen}>
          Open Invitation
        </button>
        <p className="seal-note">Music begins as the doors open</p>
      </div>
    </div>
  );
}
