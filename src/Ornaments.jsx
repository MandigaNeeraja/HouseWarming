export function Vinayaka() {
  return (
    <svg className="vinayaka" viewBox="0 0 72 86" aria-hidden="true">
      <path d="M36 7c1.4 2.6 1.2 4.8-.2 6.2" />
      <path d="M26 16c2.2-5 6.4-8 10-8s7.8 3 10 8" />
      <path d="M21 31c.6-11 7.2-18 15-18s14.4 7 15 18c.4 6.5-2.4 12-6.6 15" />
      <path d="M21 29c-7.2 1.6-11.4 8-9.2 14.2 2 4.2 7.4 5 10.4 1.6" />
      <path d="M51 29c7.2 1.6 11.4 8 9.2 14.2-2 4.2-7.4 5-10.4 1.6" />
      <path d="M31 28.5c2 .9 3.8.6 4.8-.8" />
      <path d="M36 19.5v5" />
      <path d="M37 39c1.2 7.5-.6 13.5-5.4 17.5-3.2 2.6-1.2 6.2 2.2 6.2 1.8 0 3-1.2 3-3.2" />
      <path d="M27 53c-7 5.2-11 14.5-8 23h36c3-8.5-1-17.8-8-23-4.2 5.4-11.2 7.2-20 0z" />
      <path d="M31 59c3.2 4.6 9.2 5.4 12.6 1" />
      <path d="M24 75c8 6.5 20 6.5 28 0" />
      <path d="M25 56c-6.4 2-9.6 7.6-6.8 12.4" />
      <path d="M48 55.5c6 1.8 9.2 6.6 7 11.6" />
      <circle cx="57.5" cy="68.5" r="2" />
    </svg>
  );
}

export function Thoran({ side = "left" }) {
  return (
    <div className={`thoran thoran-${side}`} aria-hidden="true">
      <svg viewBox="0 0 44 150">
        <path d="M22 0v14" />
        <path d="M13 16h18c.2 9-3.2 15-9 17.2C16.2 31 13.2 25 13 16z" />
        <path d="M22 33.2v6" />
        <circle cx="22" cy="42" r="1.7" />
        <path className="strand" d="M14 18c-1 24-1 48 0 78" />
        <path className="strand" d="M22 44c1 22 0 44-1 70" />
        <path className="strand" d="M30 18c1 20 1 40 0 64" />
      </svg>
    </div>
  );
}

export function Blossoms() {
  return (
    <div className="blossoms" aria-hidden="true">
      <i />
      <i />
      <i />
      <i />
      <i />
    </div>
  );
}

export function Pediment() {
  return (
    <svg className="pediment" viewBox="0 0 240 78" aria-hidden="true">
      <path d="M120 10 226 70H14Z" />
      <path d="M46 70c0-20 18-34 40-34 12-16 20-20 34-20s22 4 34 20c22 0 40 14 40 34" />
      <path d="M8 70h224" />
      <circle cx="120" cy="8" r="2.6" />
    </svg>
  );
}

export function HouseLine({ className = "" }) {
  return (
    <svg className={`house-line ${className}`} viewBox="0 0 200 196" aria-hidden="true">
      <path d="M100 14 178 70h-14v112H36V70H22Z" />
      <path d="M18 72h164" />
      <path d="M52 78c0-16 14-26 28-26 8-12 14-16 20-16s12 4 20 16c14 0 28 10 28 26" />
      <path d="M64 182V126c0-22 16-38 36-38s36 16 36 38v56" />
      <path d="M36 70c-10 8-10 18 0 22" />
      <path d="M164 70c10 8 10 18 0 22" />
      <circle cx="100" cy="12" r="2.3" />
    </svg>
  );
}
