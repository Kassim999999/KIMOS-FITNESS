import "../../../css/Classes.css";
import {
  FaRunning,
  FaFire,
  FaHeartbeat,
  FaBolt,
  FaTrophy,
} from "react-icons/fa";

function Classes() {
  const schedule = [
    {
      day: "Monday",
      class: "Steps Aerobics",
      time: "6:00 PM - 7:00 PM",
      icon: <FaRunning />,
    },
    {
      day: "Tuesday",
      class: "Tonic HIIT",
      badge: "MASTER CLASS",
      time: "6:00 PM - 7:00 PM",
      icon: <FaFire />,
    },
    {
      day: "Wednesday",
      class: "Aerobics",
      time: "6:00 PM - 7:00 PM",
      icon: <FaHeartbeat />,
    },
    {
      day: "Thursday",
      class: "Aerobics",
      time: "6:00 PM - 7:00 PM",
      icon: <FaHeartbeat />,
    },
    {
      day: "Friday",
      class: "Circuit",
      time: "6:00 PM - 7:00 PM",
      icon: <FaBolt />,
    },
    {
      day: "Saturday",
      class: "Challenge",
      time: "8:00 AM - 10:30 AM",
      icon: <FaTrophy />,
    },
  ];

  return (
    <section className="classes" data-aos="fade-up">

      <div className="container">

        <div className="section-title">

          <span>WEEKLY SCHEDULE</span>

          <h2>Train With Us Every Week</h2>

          <p>
            Join our exciting group classes designed to keep you motivated,
            active and consistently improving.
          </p>

        </div>

        <div className="schedule" data-aos="fade-down">

          {schedule.map((item, index) => (

            <div className="schedule-card" key={index}     data-aos="zoom-in-up"
    data-aos-delay={index * 100}>

              <div className="schedule-icon">
                {item.icon}
              </div>

              <div className="schedule-info">

                <h3>{item.day}</h3>

                <h4>
                  {item.class}

                  {item.badge && (
                    <span className="badge">
                      {item.badge}
                    </span>
                  )}

                </h4>

              </div>

              <div className="schedule-time">

                {item.time}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Classes;