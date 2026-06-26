import "../css/Home.css";

import Navbar from "../components/layout/Navbar/Navbar";
import Hero from "../components/home/Hero/Hero";
import WhyChoose from "../components/home/WhyChoose/WhyChoose";
import Stats from "../components/home/Stats/Stats";
import Membership from "../components/home/Membership/Membership";
import Classes from  "../components/home/Classes/Classes";
import Trainers from "../components/home/Trainers/Trainers";
import CTA from "../components/home/CTA/CTA";
import Footer from "../components/layout/Footer/Footer";

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
      <CTA />
      <Footer />
    </>
  );
}

export default Home;