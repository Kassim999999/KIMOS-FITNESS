import "../css/Home.css";

import Navbar from "../components/layout/Navbar/Navbar";
import Hero from "../components/home/Hero/Hero";
import WhyChoose from "../components/home/WhyChoose/WhyChoose";
import Stats from "../components/home/Stats/Stats";
import Membership from "../components/home/Membership/Membership";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChoose />
      <Stats />
      <Membership />
    </>
  );
}

export default Home;