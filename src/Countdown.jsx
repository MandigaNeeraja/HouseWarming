import { useEffect, useState } from "react";
import { MUHURTHAM } from "./config.js";

const TARGET = new Date(MUHURTHAM).getTime();

function parts(diff) {
  return [
    [Math.floor(diff / 86400000), "Days"],
    [Math.floor(diff / 3600000) % 24, "Hours"],
    [Math.floor(diff / 60000) % 60, "Minutes"],
    [Math.floor(diff / 1000) % 60, "Seconds"]
  ];
}

export default function Countdown() {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const diff = Math.max(0, TARGET - now);
  if (diff === 0) {
    return <p className="begun">The hour has come. We welcome you home.</p>;
  }

  return (
    <div className="count" aria-label="Time remaining until the muhurtham">
      {parts(diff).map(([value, label]) => (
        <div key={label}>
          <strong>{String(value).padStart(2, "0")}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
