import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/contact.css";

// ── ContactDetail: small presentational component ────────────────────────────
// Demonstrates: function component receiving props, PropTypes validation
function ContactDetail({ label, value, href, isLink }) {
  return (
    <div className="contact-row">
      <span className="contact-row-label">{label}</span>
      {isLink ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          className="contact-row-value contact-row-value--link"
        >
          {value}
        </a>
      ) : (
        <span className="contact-row-value">{value}</span>
      )}
    </div>
  );
}

ContactDetail.propTypes = {
  label:  PropTypes.string.isRequired,
  value:  PropTypes.string.isRequired,
  href:   PropTypes.string,
  isLink: PropTypes.bool,
};
ContactDetail.defaultProps = {
  href:   "#",
  isLink: false,
};

// ── FORM FIELD INITIAL STATE ─────────────────────────────────────────────────
const INITIAL_FORM = { name: "", email: "", message: "" };

// ── Contact Page ─────────────────────────────────────────────────────────────
// Demonstrates:
//  - useState for controlled form inputs (dataflow: State → Props → UI)
//  - Form handling / controlled components pattern
//  - Conditional rendering (success state)
//  - Custom child component (ContactDetail) with PropTypes
function Contact() {
  // State: tracks every keystroke in the form (controlled inputs)
  const [form, setForm]       = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors]   = useState({});

  // Generic change handler — works for all inputs via name attribute
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  // Basic validation
  const validate = () => {
    const next = {};
    if (!form.name.trim())    next.name    = "Name is required";
    if (!form.email.trim())   next.email   = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) next.email = "Invalid email";
    if (!form.message.trim()) next.message = "Message is required";
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    // In production: replace this with a real form service
    // e.g. Formspree, EmailJS, or your own backend
    console.log("Form submitted:", form);
    setSubmitted(true);
    setForm(INITIAL_FORM);
  };

  return (
    <div className="contact">
      <div className="contact-bg-text" aria-hidden>CONTACT</div>

      <div className="contact-inner">

        {/* LEFT: Details */}
        <div className="contact-details-col">
          <h1 className="contact-heading">Let's work<br />together.</h1>
          <p className="contact-sub">
            Available for commercial shoots, event coverage,
            brand reels, and collaborations.
          </p>

          <div className="contact-details-list">
            <ContactDetail label="Name"  value="Angelo Ben Charles" />
            <ContactDetail label="Phone" value="+91 9349091500"
              href="tel:+919349091500" isLink />
            <ContactDetail label="Email" value="angelo.bc.official@gmail.com"
              href="mailto:angelo.bc.official@gmail.com" isLink />
            <ContactDetail label="Instagram" value="@angelo_17.3"
              href="https://www.instagram.com/angelo_17.3" isLink />
            <ContactDetail label="Portfolio IG" value="@marlboro.mov"
              href="https://www.instagram.com/marlboro.mov" isLink />
          </div>
        </div>

        {/* RIGHT: Contact form */}
        <div className="contact-form-col">
          {submitted ? (
            // Conditional rendering — success state
            <div className="contact-success">
              <span className="contact-success-icon">✓</span>
              <h3>Message sent!</h3>
              <p>I'll get back to you shortly.</p>
              <button
                className="contact-btn"
                onClick={() => setSubmitted(false)}
              >
                Send another
              </button>
            </div>
          ) : (
            // Form — all inputs are controlled (value tied to state)
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <h3 className="contact-form-heading">Get in touch</h3>

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}            // controlled: reads from state
                  onChange={handleChange}       // updates state on every keystroke
                  className={errors.name ? "input-error" : ""}
                />
                {errors.name && <span className="error-msg">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className={errors.email ? "input-error" : ""}
                />
                {errors.email && <span className="error-msg">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                  className={errors.message ? "input-error" : ""}
                />
                {errors.message && <span className="error-msg">{errors.message}</span>}
              </div>

              <button type="submit" className="contact-btn">
                Send message →
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}

export default Contact;
