import "../../../css/Hero.css";

function Hero() {
  return (
    <section className="hero">

      {/* Background Image */}
      <div className="hero-image"></div>

      {/* Gradient Overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="container hero-content">

        <span
          className="hero-tag"
          data-aos="fade-down"
        >
          WELCOME TO KIMOS FITNESS
        </span>

        <h1
          data-aos="fade-up"
          data-aos-delay="200"
        >
          BECOME THE
          <br />
          <span>STRONGEST</span>
          <br />
          VERSION OF YOURSELF
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Train with experienced coaches, state-of-the-art equipment and an
          inspiring fitness community committed to helping you achieve your
          personal goals.
        </p>

        <div
          className="hero-buttons"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <button className="primary-btn">
            Start Your Journey
          </button>

          <button className="secondary-btn">
            Explore Memberships
          </button>
        </div>

      </div>

      {/* Floating Stats */}

      <div
        className="hero-stats"
        data-aos="fade-left"
        data-aos-delay="700"
      >

        <div className="stat-card">
          <h3>6+</h3>
          <p>Weekly Classes</p>
        </div>

        <div className="stat-card">
          <h3>Pro</h3>
          <p>Fitness Coaches</p>
        </div>

      </div>

      {/* Scroll Indicator */}

      <div className="scroll-indicator">
        <div className="mouse">
          <span></span>
        </div>
      </div>

    </section>
  );
}

export default Hero;