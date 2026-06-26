import "../../../css/WhyChoose.css";
import {
  FaDumbbell,
  FaUserTie,
  FaFire,
  FaUsers,
} from "react-icons/fa";

function WhyChoose() {
  const features = [
    {
      icon: <FaDumbbell />,
      title: "Premium Equipment",
      description:
        "Train with modern machines and free weights designed for every fitness goal.",
    },
    {
      icon: <FaUserTie />,
      title: "Expert Trainers",
      description:
        "Certified fitness professionals dedicated to helping you succeed.",
    },
    {
      icon: <FaFire />,
      title: "High Energy Classes",
      description:
        "HIIT, Strength, Aerobics and Circuit sessions that keep you motivated.",
    },
    {
      icon: <FaUsers />,
      title: "Strong Community",
      description:
        "Become part of a supportive environment that celebrates every achievement.",
    },
  ];

  return (
    <section className="why-choose">
      <div className="container">

        <div className="section-title">
          <span>WHY CHOOSE KIMOS</span>
          <h2>Built To Inspire. Designed For Results.</h2>
          <p>
            More than just a gym—we're a community committed to helping
            you become stronger, healthier and more confident.
          </p>
        </div>

        <div className="why-grid">
          {features.map((feature, index) => (
            <article className="why-card" key={index}>
              <div className="why-icon">{feature.icon}</div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChoose;