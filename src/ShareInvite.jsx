import { useEffect, useState } from "react";
import { inviteMessage } from "./config.js";

export default function ShareInvite() {
  const url = window.location.href.split("?")[0];
  const [copied, setCopied] = useState(false);
  const [note, setNote] = useState("");

  useEffect(() => {
    if (!copied) return undefined;
    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  async function copyLink() {
    setNote("");
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
    } catch {
      setNote("Select the link below and copy it.");
    }
  }

  return (
    <section className="share" aria-labelledby="share-title">
      <h2 className="section-title" id="share-title">Share the invitation</h2>
      <p className="lead">One link is enough for the whole family.</p>
      <div className="share-actions">
        <a className="solid-btn whatsapp" href={`https://wa.me/?text=${encodeURIComponent(inviteMessage(url))}`} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
        <button className="ghost-btn" type="button" onClick={copyLink}>
          {copied ? "Copied" : "Copy link"}
        </button>
      </div>
      <p className="share-url">{url}</p>
      <p className="form-status" role="status">{note}</p>
    </section>
  );
}
