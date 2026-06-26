import "../../../css/Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-overlay"></div>

      <div className="container hero-content">

        <span className="hero-tag">
          KIMOS FITNESS • TRAIN • SWEAT • EVOLVE
        </span>

        <h1>
          BECOME THE
          <br />
          <span>STRONGEST</span>
          <br />
          VERSION OF YOURSELF
        </h1>

        <p>
          Whether you're just starting your fitness journey or pushing for your
          next personal best, Kimos Fitness provides expert coaching, modern
          equipment, and a supportive community to help you achieve lasting
          results.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            Join Today
          </button>

          <button className="secondary-btn">
            View Memberships
          </button>

        </div>

      </div>

      <div className="scroll-indicator">
        <span></span>
      </div>

    </section>
  );
}

export default Hero;