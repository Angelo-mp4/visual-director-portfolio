/**
 * HOW TO ADD YOUR YOUTUBE VIDEOS
 * ────────────────────────────────
 * Your link from YouTube looks like one of these:
 *   https://youtu.be/ABC123xyz          ← short link
 *   https://www.youtube.com/watch?v=ABC123xyz  ← normal link
 *
 * To use it in the iframe, change it to the EMBED format:
 *   https://www.youtube.com/embed/ABC123xyz
 *
 * Just grab the video ID (the part after "v=" or after "youtu.be/")
 * and paste it after "https://www.youtube.com/embed/"
 *
 * EXAMPLE:
 *   https://youtu.be/dQw4w9WgXcQ  →  https://www.youtube.com/embed/dQw4w9WgXcQ
 *
 * For UNLISTED videos this works fine — as long as embedding is not
 * disabled in your YouTube video settings. Go to:
 *   YouTube Studio → Your video → Edit → More options → Allow embedding ✓
 */

const projects = [
  // ── COMMERCIAL ──────────────────────────────────────
  {
    id: 1,
    title: "Indian SuperCross League - Finals",
    category: "Commercial",
    // Replace VIDEO_ID with your actual YouTube video ID
    video: "https://www.youtube.com/embed/LrjLgcsbpnU",
  },
  {
    id: 2,
    title: "Jonita Gandhi - JAIN University",
    category: "Commercial",
    video: "https://www.youtube.com/embed/6jmm1XuGaa4",
  },
  {
    id: 3,
    title: "RPCL - Aftermovie",
    category: "Commercial",
    video: "https://www.youtube.com/embed/aBkBE5XedaU",
  },
  {
    id: 4,
    title: "Palace Mandhi - Cinematic Showreel",
    category: "Commercial",
    video: "https://www.youtube.com/embed/uw52HfUycTo",
  },
  {
    id: 5,
    title: "SAMCO - Cinematic Showreel",
    category: "Commercial",
    video: "https://www.youtube.com/embed/X7E8NHHvk18",
  },
  {
    id: 6,
    title: "Lotto Shoes - Cinematic Showreel",
    category: "Commercial",
    video: "https://www.youtube.com/embed/nPvWg_i53EQ",
  },
  {
    id: 7,
    title: "Real Estate - Motion Graphics",
    category: "Commercial",
    video: "https://www.youtube.com/embed/xn9llMiOBl0",
  },
  {
    id: 8,
    title: "DJ Paroma - Hype Reel",
    category: "Commercial",
    video: "https://www.youtube.com/embed/TgYkTjqNgd8",
  },

  // ── COLLABORATED ────────────────────────────────────
  {
    id: 9,
    title: "Life Is Good - Concept Video",
    category: "Collaborated",
    video: "https://www.youtube.com/embed/lZIn5rxpWaQ",
  },
  {
    id: 10,
    title: "ICON - Concept Video",
    category: "Collaborated",
    video: "https://www.youtube.com/embed/Z3JDS-9gQ-4",
  },
  {
    id: 11,
    title: "Vimaanas - Hype Reel",
    category: "Collaborated",
    video: "https://www.youtube.com/embed/lJkEWwRRvnM",
  },
  {
    id: 12,
    title: "Onam Hypereel - 1",
    category: "Collaborated",
    video: "https://www.youtube.com/embed/IdaKzEBmy2o",
  },
  {
    id: 13,
    title: "Onam Hypereel - 2",
    category: "Collaborated",
    video: "https://www.youtube.com/embed/Fj2XBd16Cik",
  },
  {
    id: 14,
    title: "Cryptic Hunt - App Reveal",
    category: "Collaborated",
    video: "https://www.youtube.com/embed/OVt1Ua6fKNY",
  },
  {
    id: 15,
    title: "Inspiher - Hype Reel",
    category: "Collaborated",
    video: "https://www.youtube.com/embed/Wt-K6vpnW80",
  },

  // ── INDEPENDENT ─────────────────────────────────────
  {
    id: 16,
    title: "Alright - Motion Graphics",
    category: "Independent",
    video: "https://www.youtube.com/embed/LM-sQdJPjKE",
  },
  {
    id: 17,
    title: "Run It Up - Motion Graphics",
    category: "Independent",
    video: "https://www.youtube.com/embed/RlT6bWfN2ik",
  },
  {
    id: 18,
    title: "Mirage - Dance Video",
    category: "Independent",
    video: "https://www.youtube.com/embed/752-ulMnxKE",
  },
  {
    id: 19,
    title: "Pavizhamalli - Concept Video",
    category: "Independent",
    video: "https://www.youtube.com/embed/6RVDjhH1fx0",
  },

  // ── CONCERT PHOTOGRAPHY ─────────────────────────────
  // For photo sets: add a `photos` array with { src, caption }
  // Put your images in /public/images/ and reference them as "/images/filename.jpg"
  {
    id: 20,
    title: "Seedhe Maut — IIT Bombay MoodIndigo",
    category: "Concert",
    isPhotoSet: true,
    cover: { src: "/images/SMX/smx-cover.jpg" },  // put your best shot here as cover
    photos: [
      { src: "/images/SMX/smx-1.jpg"},
      { src: "/images/SMX/smx-2.jpg"},
      { src: "/images/SMX/smx-3.jpg"},
      { src: "/images/SMX/smx-4.jpg"},
      { src: "/images/SMX/smx-5.jpg"}
      // add more: { src: "/images/SMX/smx-4.jpg" }, ...
    ],
  },
  {
    id: 21,
    title: "Armaan Malik — NITTE Glamfest",
    category: "Concert",
    isPhotoSet: true,
    cover: { src: "/images/AM/AM-cover.jpg" },
    photos: [
      { src: "/images/AM/armaan-1.jpg" },
      { src: "/images/AM/armaan-2.jpg" },
      { src: "/images/AM/armaan-3.jpg" },
      { src: "/images/AM/armaan-4.jpg" },
      { src: "/images/AM/armaan-5.jpg" }
    ],
  },
  {
    id: 22,
    title: "Thaman S — VIT Vellore Riviera 2026",
    category: "Concert",
    isPhotoSet: true,
    cover: { src: "/images/Thaman/thaman-cover.jpg" },
    photos: [
      { src: "/images/Thaman/thaman-1.jpg" },
      { src: "/images/Thaman/thaman-2.jpg" },
      { src: "/images/Thaman/thaman-3.jpg" },
      { src: "/images/Thaman/thaman-4.jpg" }
    ],
  },

  // ── POSTER DESIGNS ──────────────────────────────────
  {
    id: 23,
    title: "Poster Designs",
    category: "Poster",
    isPhotoSet: true,
    cover: { src: "/images/Posters/poster-cover.png" },
    photos: [
      { src: "/images/Posters/sharath.png"},
      { src: "/images/Posters/future-1.png"},
      { src: "/images/Posters/future-2.png"},
      { src: "/images/Posters/future-3.png"}
    ],
  },
];

export default projects;
