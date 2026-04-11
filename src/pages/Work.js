import React, { useState } from "react";
import projects from "../data/projects";
import PhotoGallery from "../components/PhotoGallery";
import "../styles/work.css";

const CATEGORIES = ["All", "Commercial", "Collaborated", "Independent", "Concert", "Poster"];

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
                <iframe
                  src={project.video}
                  title={project.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
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
