import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import "../styles/photogallery.css";

/**
 * PhotoGallery — Function Component
 *
 * Concepts demonstrated:
 *  - Function component receiving PROPS
 *  - PropTypes validation (type-checking props at runtime)
 *  - useState hook (open/close lightbox, current photo index)
 *  - useEffect hook (keyboard listener, body scroll lock + cleanup)
 *  - useCallback hook (stable prev/next references for the effect dep array)
 *  - Conditional rendering  ({ open && <Lightbox /> })
 *  - Event handling
 */
function PhotoGallery({ photos, cover, title }) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx]   = useState(0);

  const prev = useCallback(
    () => setIdx(i => (i - 1 + photos.length) % photos.length),
    [photos.length]
  );
  const next = useCallback(
    () => setIdx(i => (i + 1) % photos.length),
    [photos.length]
  );

  // Keyboard navigation — cleaned up when component unmounts or lightbox closes
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape")     setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler); // cleanup
  }, [open, prev, next]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; }; // cleanup
  }, [open]);

  return (
    <>
      {/* ── COVER CARD ── */}
      <div
        className="gallery-card"
        onClick={() => { setIdx(0); setOpen(true); }}
        role="button"
        tabIndex={0}
        onKeyDown={e => e.key === "Enter" && setOpen(true)}
        aria-label={`Open gallery: ${title}`}
      >
        <div
          className="gallery-cover"
          style={cover?.src ? { backgroundImage: `url(${cover.src})` } : {}}
        >
          {!cover?.src && (
            <span className="gallery-cover-initial">{title?.[0] ?? "?"}</span>
          )}
          <div className="gallery-cover-overlay">
            <span className="gallery-open-hint">VIEW GALLERY</span>
          </div>
        </div>
        <p className="gallery-title">{title}</p>
        <p className="gallery-count">{photos.length} photo{photos.length !== 1 ? "s" : ""}</p>
      </div>

      {/* ── LIGHTBOX ── */}
      {open && (
        <div
          className="lightbox-backdrop"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          <div className="lightbox-box" onClick={e => e.stopPropagation()}>
            <button className="lb-close" onClick={() => setOpen(false)} aria-label="Close">✕</button>
            <span className="lb-counter">{idx + 1} / {photos.length}</span>

            <div className="lb-img-wrap">
              <img
                src={photos[idx].src}
                alt={photos[idx].caption || `${title} — photo ${idx + 1}`}
                className="lb-img"
              />
            </div>

            {photos[idx].caption && (
              <p className="lb-caption">{photos[idx].caption}</p>
            )}

            <button className="lb-nav lb-prev" onClick={prev} aria-label="Previous photo">‹</button>
            <button className="lb-nav lb-next" onClick={next} aria-label="Next photo">›</button>

            <div className="lb-dots">
              {photos.map((_, i) => (
                <button
                  key={i}
                  className={`lb-dot ${i === idx ? "active" : ""}`}
                  onClick={() => setIdx(i)}
                  aria-label={`Go to photo ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ── PROP TYPES VALIDATION ────────────────────────────────────────────────────
// React will warn in the console if props don't match these types.
// This is runtime documentation + safety — catches bugs early.
PhotoGallery.propTypes = {
  /** Array of photo objects with required src, optional caption */
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      src:     PropTypes.string.isRequired,
      caption: PropTypes.string,
    })
  ).isRequired,

  /** Cover image object shown on the card before opening */
  cover: PropTypes.shape({
    src: PropTypes.string,
  }),

  /** Gallery title shown on the card and used for aria labels */
  title: PropTypes.string.isRequired,
};

PhotoGallery.defaultProps = {
  cover: {},
};

export default PhotoGallery;
