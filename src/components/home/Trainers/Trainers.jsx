import "../../../css/Trainers.css";

const trainers = [
  {
    name: "John Kamau",
    role: "Head Fitness Coach",
    image: "/src/assets/images/trainers/trainer1.jpg",
  },
  {
    name: "Grace Achieng",
    role: "HIIT & Aerobics Instructor",
    image: "/src/assets/images/trainers/trainer2.jpg",
  },
  {
    name: "Brian Otieno",
    role: "Strength & Conditioning Coach",
    image: "/src/assets/images/trainers/trainer3.jpg",
  },
];

function Trainers() {
  return (
    <section className="trainers">

      <div className="container">

        <div className="section-title">

          <span>OUR TRAINERS</span>

          <h2>Meet The Team Behind Your Success</h2>

          <p>
            Passionate professionals committed to helping every member
            achieve their fitness goals safely and effectively.
          </p>

        </div>

        <div className="trainers-grid">

          {trainers.map((trainer, index) => (

            <article className="trainer-card" key={index}>

              <img
                src={trainer.image}
                alt={trainer.name}
              />

              <div className="trainer-info">

                <h3>{trainer.name}</h3>

                <p>{trainer.role}</p>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Trainers;