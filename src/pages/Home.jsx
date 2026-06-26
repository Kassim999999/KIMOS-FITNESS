import "../css/Home.css";

import Navbar from "../components/layout/Navbar/Navbar";
import Hero from "../components/home/Hero/Hero";
import WhyChoose from "../components/home/WhyChoose/WhyChoose";
import Stats from "../components/home/Stats/Stats";
import Membership from "../components/home/Membership/Membership";
import Classes from  "../components/home/Classes/Classes";
import Trainers from "../components/home/Trainers/Trainers";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChoose />
      <Stats />
      <Membership />
      <Classes />
      <Trainers />
    </>
  );
}

export default Home;