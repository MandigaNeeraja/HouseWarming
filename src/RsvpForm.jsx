import { useEffect, useRef, useState } from "react";
import { RSVP_EMAIL } from "./config.js";

export default function RsvpForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [attending, setAttending] = useState("");
  const [guests, setGuests] = useState(1);
  const [message, setMessage] = useState("");
  const [honey, setHoney] = useState("");
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [invalid, setInvalid] = useState("");
  const thanksRef = useRef(null);
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const guestsRef = useRef(null);

  useEffect(() => {
    if (done) thanksRef.current?.focus();
  }, [done]);

  function validate() {
    setInvalid("");
    if (!name.trim()) {
      setInvalid("name");
      nameRef.current?.focus();
      return "Please add your name.";
    }
    if (phone.replace(/\D/g, "").length < 8) {
      setInvalid("phone");
      phoneRef.current?.focus();
      return "Please add a phone number.";
    }
    if (!attending) return "Please tell us if you can come.";
    if (attending === "Joyfully accepts" && (guests < 1 || guests > 20)) {
      setInvalid("guests");
      guestsRef.current?.focus();
      return "Please add how many guests will come.";
    }
    return "";
  }

  async function onSubmit(event) {
    event.preventDefault();
    const problem = validate();
    if (problem) {
      setStatus(problem);
      return;
    }
    if (honey) {
      setDone(true);
      return;
    }

    setSending(true);
    setStatus("Sending your reply…");
    try {
      const response = await fetch("https://formsubmit.co/ajax/" + encodeURIComponent(RSVP_EMAIL), {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          Name: name.trim(),
          Phone: phone.trim(),
          Attending: attending,
          Guests: attending === "Joyfully accepts" ? String(guests) : "0",
          Message: message.trim(),
          _subject: "Housewarming RSVP — " + name.trim(),
          _template: "table",
          _captcha: "false",
          Page: window.location.href
        }),
        signal: AbortSignal.timeout(20000)
      });
      const data = await response.json();
      if (!response.ok || String(data.success) !== "true") throw new Error("send failed");
      setDone(true);
    } catch {
      setStatus("We could not send that just now. Please try again.");
      setSending(false);
    }
  }

  return (
    <section className="rsvp" id="rsvp" aria-labelledby="rsvp-title">
      <h2 className="section-title" id="rsvp-title">Kindly Reply</h2>
      {done ? (
        <div className="thanks" tabIndex={-1} ref={thanksRef}>
          <p className="script-title thanks-script">Thank you</p>
          <p>Your reply has been received. We look forward to seeing you.</p>
        </div>
      ) : (
        <>
          <p className="lead">Tell us your name, and whether you can join us.</p>
          <form onSubmit={onSubmit} noValidate>
            <input className="honey" tabIndex={-1} autoComplete="off" aria-hidden="true" value={honey} onChange={(event) => setHoney(event.target.value)} />
            <div className="form-row">
              <label>
                <span>Name</span>
                <input ref={nameRef} value={name} onChange={(event) => setName(event.target.value)} autoComplete="name" maxLength={80} aria-invalid={invalid === "name"} aria-required="true" />
              </label>
              <label>
                <span>Phone</span>
                <input ref={phoneRef} value={phone} onChange={(event) => setPhone(event.target.value)} type="tel" inputMode="tel" autoComplete="tel" maxLength={20} aria-invalid={invalid === "phone"} aria-required="true" />
              </label>
            </div>
            <fieldset>
              <legend>Will you attend?</legend>
              <div className="choice">
                <label className={attending === "Joyfully accepts" ? "picked" : ""}>
                  <input type="radio" name="attending" checked={attending === "Joyfully accepts"} onChange={() => setAttending("Joyfully accepts")} />
                  <span>Joyfully accept</span>
                </label>
                <label className={attending === "Unable to attend" ? "picked" : ""}>
                  <input type="radio" name="attending" checked={attending === "Unable to attend"} onChange={() => setAttending("Unable to attend")} />
                  <span>Unable to attend</span>
                </label>
              </div>
            </fieldset>
            {attending === "Joyfully accepts" && (
              <div className="guests">
                <span id="guests-label">Number of guests</span>
                <div className="stepper">
                  <button type="button" aria-label="Fewer guests" onClick={() => setGuests((count) => Math.max(1, count - 1))}>−</button>
                  <input ref={guestsRef} aria-labelledby="guests-label" type="number" min={1} max={20} inputMode="numeric" value={guests} aria-invalid={invalid === "guests"} onChange={(event) => setGuests(Number(event.target.value))} />
                  <button type="button" aria-label="More guests" onClick={() => setGuests((count) => Math.min(20, count + 1))}>+</button>
                </div>
              </div>
            )}
            <label>
              <span>A wish, if you like</span>
              <textarea rows={3} maxLength={500} value={message} onChange={(event) => setMessage(event.target.value)} />
            </label>
            <p className="form-status" role="status">{status}</p>
            <button className="solid-btn" type="submit" disabled={sending}>Send reply</button>
            <p className="fine">Your reply goes only to the hosts.</p>
          </form>
        </>
      )}
    </section>
  );
}
