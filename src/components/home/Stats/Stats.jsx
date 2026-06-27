import "../../../css/Stats.css";

import {
  FaUsers,
  FaDumbbell,
  FaUserTie,
  FaTrophy,
} from "react-icons/fa";

function Stats() {
  const stats = [
    {
      icon: <FaUsers />,
      number: "1500+",
      title: "Happy Members",
    },
    {
      icon: <FaDumbbell />,
      number: "50+",
      title: "Modern Equipment",
    },
    {
      icon: <FaUserTie />,
      number: "12",
      title: "Professional Trainers",
    },
    {
      icon: <FaTrophy />,
      number: "10+",
      title: "Years of Excellence",
    },
  ];

  return (
    <section className="stats" data-aos="fade-up">
      <div className="container">

        <div className="section-title">

          <span>OUR IMPACT</span>

          <h2>Numbers That Speak For Themselves</h2>

          <p>
            Every member, every workout, and every achievement reflects our
            commitment to helping people become stronger every day.
          </p>

        </div>

        <div className="stats-grid">

          {stats.map((stat, index) => (
            <div className="stat-card" key={index}     data-aos="zoom-in-up"
    data-aos-delay={index * 100}>

              <div className="stat-icon">
                {stat.icon}
              </div>

              <h3>{stat.number}</h3>

              <p>{stat.title}</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;