import React, { useEffect, useRef, useState } from "react";
import "../styles/home.css";

function Home() {
  const introRef = useRef(null);
  const [isMobile, setIsMobile] = useState(() => window.matchMedia("(max-width: 640px)").matches);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (window.scrollY < 80) {
        introRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    }, 5500);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 640px)");
    const updateVideo = () => setIsMobile(media.matches);

    updateVideo();
    media.addEventListener("change", updateVideo);
    return () => media.removeEventListener("change", updateVideo);
  }, []);

  return (
    <div className="home-wrapper">
      <section className="home-hero">
        <video
          key={isMobile ? "mobile" : "desktop"}
          className="hero-video"
          src={isMobile ? "/videos/home_video_mobile.mp4" : "/videos/home_video_pc.mp4"}
          autoPlay
          loop
          muted
          preload="auto"
          playsInline
        />

        <div className="hero-copy">
          <div className="hero-frame">
            <p className="hero-label">VISUAL DIRECTOR</p>
            <h1 className="hero-name">Angelo Ben<br />Charles</h1>
          </div>
          <div className="hero-bottom-row">
            <span className="hero-portfolio-tag">PORTFOLIO</span>
            <button
              className="hero-scroll-btn"
              onClick={() => introRef.current?.scrollIntoView({ behavior: "smooth" })}
              aria-label="Scroll down"
            >
              ↓
            </button>
          </div>
        </div>
      </section>

      <section className="home-intro" ref={introRef}>
        <div className="intro-left">
          <h2 className="intro-heading">
            The World<br />
            <span className="gradient-text">framed my way.</span>
          </h2>
          <p className="intro-body">
            As a 20 year old, I got into cinematography and video editing
            because I didn't want to experience the world quietly.
            I'm obsessed with catching moments before they disappear -
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
          <div className="intro-img-box">
            <div className="intro-img-label">SEEDHE MAUT CONCERT @MOOD INDIGO / IITB</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
