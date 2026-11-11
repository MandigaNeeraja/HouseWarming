import { useEffect, useRef, useState } from "react";
import Opening from "./Opening.jsx";
import Invitation from "./Invitation.jsx";

export default function App() {
  const audioRef = useRef(null);
  const openedAtStart = new URLSearchParams(window.location.search).has("open");
  const [opening, setOpening] = useState(false);
  const [gateGone, setGateGone] = useState(openedAtStart);
  const [playing, setPlaying] = useState(false);
  const musicStart = 2 * 60 + 51;

  useEffect(() => {
    document.body.classList.toggle("locked", !gateGone);
    return () => document.body.classList.remove("locked");
  }, [gateGone]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;
    const replay = () => {
      audio.currentTime = musicStart;
      audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    };
    audio.addEventListener("ended", replay);
    return () => audio.removeEventListener("ended", replay);
  }, [musicStart]);

  function cueMusic(audio) {
    const duration = audio.duration;
    const canSeek = Number.isFinite(duration) && duration > musicStart + 1;
    const start = canSeek ? musicStart : 0;
    const atEnd = audio.ended || (Number.isFinite(duration) && duration > 0 && audio.currentTime >= duration - 0.3);
    if (atEnd || audio.currentTime < start) audio.currentTime = start;
  }

  function startMusic() {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.72;
    const play = () => {
      cueMusic(audio);
      audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    };
    if (audio.readyState >= 1) play();
    else audio.addEventListener("loadedmetadata", play, { once: true });
  }

  function openInvite() {
    if (opening || gateGone) return;
    setOpening(true);
    startMusic();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.setTimeout(() => setGateGone(true), reduce ? 240 : 1980);
  }

  function toggleMusic() {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      startMusic();
      return;
    }
    audio.pause();
    setPlaying(false);
  }

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" preload="auto" />
      {!gateGone && <Opening opening={opening} onOpen={openInvite} />}
      <Invitation />
      {gateGone && (
        <button className="music-btn" type="button" onClick={toggleMusic} aria-pressed={playing}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d={
                playing
                  ? "M8 5h3v14H8zM13 5h3v14h-3z"
                  : "M9 7v10l8-5z"
              }
            />
          </svg>
          <span>{playing ? "Music on" : "Music off"}</span>
        </button>
      )}
    </>
  );
}
