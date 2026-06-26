import "../css/Home.css";

import Navbar from "../components/layout/Navbar/Navbar";
import Hero from "../components/home/Hero/Hero";
import WhyChoose from "../components/home/WhyChoose/WhyChoose";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChoose />
    </>
  );
}

export default Home;