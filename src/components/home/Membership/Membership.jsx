import "../../../css/Membership.css";

import { FaCheck } from "react-icons/fa";

function Membership() {
const plans = [
  {
    title: "Registration",
    price: "KSh 300",
    description: "One-time membership registration fee.",
    button: "Start Your Membership",
    featured: false,
  },
  {
    title: "Daily Pass",
    price: "KSh 400",
    description: "Perfect for occasional workouts.",
    button: "Get Daily Pass",
    featured: false,
  },
  {
    title: "10 Sessions",
    price: "KSh 3,000",
    description: "Save more with our 10-session package.",
    button: "Choose This Package",
    featured: true,
  },
  {
    title: "Monthly Membership",
    price: "KSh 4,000",
    description: "Unlimited monthly access to the gym.",
    button: "Become a Member",
    featured: false,
  },
  {
    title: "Student Daily",
    price: "KSh 350",
    description: "Special discounted daily access for students.",
    button: "Claim Student Pass",
    featured: false,
  },
];

  const handleMembership = (planName) => {
  const message = encodeURIComponent(
    `Hello KIMOS Fitness,

I'm interested in the ${planName} membership package. I'd like to get more information.

Thank you.`
  );

  window.open(`https://wa.me/2547XXXXXXXX?text=${message}`, "_blank");
};

  return (
    <section className="membership">

      <div className="container">

        <div className="section-title">

          <span>MEMBERSHIP PLANS</span>

          <h2>Choose The Perfect Membership</h2>

          <p>
            Flexible plans designed to help you stay consistent
            and achieve your fitness goals.
          </p>

        </div>

        <div className="membership-grid">

          {plans.map((plan, index) => (

  <article
    key={index}
    className={`plan-card ${plan.featured ? "featured" : ""}`}
  >

    {plan.featured && (
      <div className="popular">
        Best Value
      </div>
    )}

    <h3>{plan.title}</h3>

    <div className="price">
      <span>{plan.price}</span>
    </div>

    <p className="plan-description">
      {plan.description}
    </p>

<button onClick={() => handleMembership(plan.title)}>
  {plan.button}
</button>

  </article>

))}

        </div>

      </div>

    </section>
  );
}

export default Membership;