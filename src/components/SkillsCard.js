import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/skillscard.css";

/**
 * SkillsCard — Class Component (demonstrates Component API + Constructor)
 *
 * Concepts covered:
 *  - Class component syntax
 *  - Constructor with super(props)
 *  - this.state  (Component State)
 *  - this.setState
 *  - componentDidMount lifecycle method
 *  - render() method returning JSX
 *  - Props received from parent + PropTypes validation
 */
class SkillsCard extends Component {
  constructor(props) {
    super(props);
    // Local state — tracks which category tab is active
    this.state = {
      activeTab: 0,
      visible: false,
    };
  }

  // Lifecycle: runs after the component mounts in the DOM
  componentDidMount() {
    // Fade-in animation trigger after mount
    setTimeout(() => this.setState({ visible: true }), 100);
  }

  render() {
    const { categories } = this.props;
    const { activeTab, visible } = this.state;
    const current = categories[activeTab];

    return (
      <div className={`skills-card ${visible ? "skills-card--visible" : ""}`}>
        <h3 className="skills-card__heading">Tools &amp; Skills</h3>

        {/* Tab switcher — updates state on click */}
        <div className="skills-tabs">
          {categories.map((cat, i) => (
            <button
              key={cat.label}
              className={`skills-tab ${i === activeTab ? "skills-tab--active" : ""}`}
              onClick={() => this.setState({ activeTab: i })}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills list — rendered from props */}
        <ul className="skills-list">
          {current.skills.map((skill) => (
            <li key={skill} className="skills-item">
              <span className="skills-dot" />
              {skill}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// PropTypes validation — documents + enforces what this component expects
SkillsCard.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      label:  PropTypes.string.isRequired,
      skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

// Default props — fallback if parent doesn't pass anything
SkillsCard.defaultProps = {
  categories: [
    {
      label: "Software",
      skills: ["DaVinci Resolve", "Adobe Premiere Pro", "After Effects", "Lightroom", "Photoshop", "Figma"],
    },
  ],
};

export default SkillsCard;
