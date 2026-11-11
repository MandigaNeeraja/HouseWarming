export const RSVP_EMAIL = "neerajak2311@gmail.com";

export const MUHURTHAM = "2026-11-21T20:53:00+05:30";

export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(
    "Flat No. 201, Neon Aadhvaya, Chakrapuri Colony, Ameenpur, Hyderabad"
  );

export function inviteMessage(url) {
  const lines = [
    "You are invited to the housewarming of Viswanath Suguna Kurumella.",
    "Saturday, 21 November 2026 · Muhurtham 8:53 pm.",
    "Lunch on Sunday, 22 November, from 12 noon."
  ];
  if (url) lines.push(url);
  return lines.join("\n");
}
