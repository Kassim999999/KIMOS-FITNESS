import "../../../css/CTA.css";

function CTA() {
  return (
    <section className="cta" data-aos="zoom in">

      <div className="cta-overlay"></div>

      <div className="container">

        <div className="cta-content">

          <span>START TODAY</span>

          <h2>
            Your Stronger,
            <br />
            Healthier Future
            <br />
            Starts Here.
          </h2>

          <p>
            Join KIMOS Fitness today and train in a motivating environment with
            experienced trainers, affordable membership plans and exciting
            weekly classes.
          </p>

          <div className="cta-buttons">

            <button className="cta-primary">
              Join Today
            </button>

<a href="tel:+254748444111" className="cta-secondary">
  Call Us
</a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CTA;