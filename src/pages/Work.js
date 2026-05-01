import React, { useState } from "react";
import projects from "../data/projects";
import PhotoGallery from "../components/PhotoGallery";
import "../styles/work.css";

const CATEGORIES = ["All", "Commercial", "Collaborated", "Independent", "Concert", "Poster"];

function getYouTubeId(url) {
  const match = url.match(/\/embed\/([^?&]+)/);
  return match?.[1] || "";
}

function YouTubeFacade({ project }) {
  const [loaded, setLoaded] = useState(false);
  const videoId = getYouTubeId(project.video);
  const thumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  const embedSrc = `${project.video}${project.video.includes("?") ? "&" : "?"}autoplay=1&rel=0`;

  if (loaded) {
    return (
      <iframe
        src={embedSrc}
        title={project.title}
        frameBorder="0"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      className="youtube-facade"
      type="button"
      onClick={() => setLoaded(true)}
      aria-label={`Play ${project.title}`}
    >
      <img src={thumbnail} alt="" loading="lazy" />
      <span className="youtube-facade__play" aria-hidden="true" />
    </button>
  );
}

function Work() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <div className="work">
      <div className="work-header">
        <h1 className="gradient-text-dark">Body of work</h1>
      </div>

      {/* FILTER BAR */}
      <div className="filters">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={filter === cat ? "active" : ""}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid">
        {filteredProjects.map((project) => {

          // Photo set (Concert / Poster) → use PhotoGallery component
          if (project.isPhotoSet) {
            return (
              <PhotoGallery
                key={project.id}
                title={project.title}
                cover={project.cover}
                photos={project.photos}
              />
            );
          }

          // Video project → iframe embed
          return (
            <div key={project.id} className="card">
              <div className="card-video-wrap">
                <YouTubeFacade project={project} />
              </div>
              <p className="card-title">{project.title}</p>
              <p className="card-category">{project.category}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Work;
