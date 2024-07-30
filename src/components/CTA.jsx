import "./CTA.css";

const CTA = () => {
  const handleEmailClick = () => {
    window.location.href =
      "mailto:theobreaux@gmail.com?subject=Project Inquiry&body=Hello, I'd like to discuss a project.";
  };

  return (
    <section className="cta">
      <p className="cta-text">
        Have a project? <br /> Let's work together!
      </p>
      <button className="cta-btn" onClick={handleEmailClick}>
        Contact
      </button>
    </section>
  );
};

export default CTA;
