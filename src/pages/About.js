import React from "react";
import "../styles/about.css";

const SKILL_CATEGORIES = [
  {
    label: "Software",
    skills: [
      "DaVinci Resolve",
      "Adobe Premiere Pro",
      "Adobe After Effects",
      "Adobe Lightroom",
      "Photoshop",
      "Figma",
    ],
  },
  {
    label: "Production",
    skills: [
      "Cinematography",
      "Video Editing",
      "Color Grading",
      "Sound Design",
      "Motion Graphics",
      "Concert Photography",
    ],
  },
  {
    label: "Strengths",
    skills: [
      "Instinct-driven shooting",
      "Fast turnaround",
      "Full post-production pipeline",
      "Visual storytelling",
      "Human-touch over automation",
      "Immersive editing style",
    ],
  },
];

function About() {
  return (
    <div className="about">

      {/* Portrait — absolutely positioned, bleeds into right */}
      <div className="about-portrait-wrap">
        <img
          src="/images/portrait.png"
          alt="Angelo Ben Charles"
          className="about-portrait"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
        <div className="about-portrait-fallback" />
      </div>

      {/* Left content column */}
      <div className="about-bio-section">

        <div className="bio-block">
          <span className="bio-label">BIO</span>
          <p>
            Drawn to moving images from an early age, my journey into
            video editing began in the 8th standard, where editing
            videos became my way of celebrating birthdays, preserving
            moments, and translating emotion into visual art. During the
            stillness of the Covid era, an instinct-driven project —
            defined by gripping visuals and sound design which I made —
            spread rapidly within my social circle, revealing a creative
            eye that resonated beyond intention. Rooted in patience and
            craft, I value time, effort, and human touch over automation.
            Creating without shortcuts is an act of devotion for me; an
            honest expression of emotion, and a refusal to let technology
            dilute the intimacy between the art and the artist.
          </p>
        </div>

        <div className="bio-block">
          <span className="bio-label">MY APPROACH</span>
          <p>
            Driven by a need to place the viewer at the center of the
            action, where emotion is unfiltered and moments unfold
            without distance. I'm drawn to provocative ideas and visuals
            that challenge comfort, spark curiosity, and demand
            attention rather than passively asking for it. Every project is
            shaped through a deliberate balance of instinct and craft —
            using cinematography, editing, motion graphics, color
            grading, sound design and photography as interconnected
            tools. Fluent in DaVinci Resolve, Adobe Premiere Pro, After
            Effects, Lightroom, Photoshop, and Figma, I focus on work
            that feels immersive, intentional, and difficult to ignore.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
