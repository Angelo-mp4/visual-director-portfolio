import React, { useRef } from "react";
import "../styles/home.css";

function Home() {
  const introRef = useRef(null);

  const scrollToIntro = () => {
    introRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home-wrapper">

      {/* ── SECTION 1: Hero video ── */}
      <section className="home-hero">
        <video
          className="hero-video"
          src="/videos/grading_test.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="hero-overlay" />

        <div className="hero-content">
          <div className="hero-top-card">
            <p className="hero-label">VISUAL DIRECTOR</p>
            <h1 className="hero-name">Angelo Ben<br />Charles</h1>
          </div>
          <div className="hero-bottom-row">
            <span className="hero-portfolio-tag">PORTFOLIO</span>
            <button className="hero-scroll-btn" onClick={scrollToIntro} aria-label="Scroll down">↓</button>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: "The World framed my way" (PDF slide 2) ── */}
      <section className="home-intro" ref={introRef}>
        <div className="intro-left">
          <h2 className="intro-heading">
            The World<br />
            <span className="gradient-text">framed my way.</span>
          </h2>
          <p className="intro-body">
            As a 20 year old, I got into cinematography and video editing
            because I didn't want to experience the world quietly.
            I'm obsessed with catching moments before they disappear —
            a movement, a look, a split second of chaos that says more
            than words. Editing is where I make sense of that noise,
            perfecting it until it feels honest. Shooting is an instinct,
            rather than plotting. I frame the world the way it pulls at me,
            not the way it's supposed to look. This is less about
            perfection and more about control, release, and telling the
            truth as I see it.
          </p>
        </div>
        <div className="intro-right">
          {/* Concert crowd photo placeholder — swap with your Seedhe Maut image */}
          <div className="intro-img-box">
            <div className="intro-img-label">SEEDHE MAUT CONCERT @MOOD INDIGO / IITB</div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
