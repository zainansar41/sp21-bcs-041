import React from "react";

import "./home.css";
import Hero from "../../components/HeroSection/Hero";
import Headline from "../../components/Headline/Headline";
import bg from "../../assets/bg.jpg";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero
        himg={bg}
        htag={"hero_tag"}
        hbtn={"BTN"}
        head={"Start Yout Journey with us"}
        hdesc={"let's build this in a different way"}
      />
      <Headline />
      <div className="headline_main" style={{marginTop:'5rem',marginLeft:'2rem', backgroundColor:"#fff", alignItems:'flex-start'}}>
        <h4 className="headline_title" style={{textAlign:'left'}}>
          <span>&lt;Real support&gt;</span>
        </h4>
        <p className="headline_text" style={{textAlign:'left'}}>
        Our Happiness Engineers are on hand to help. From live chat and email support to community forums, if you get stuck—or just need a hand—we’re here for you.
        </p>
        <button>
          <Link to={"/"} class="btn2">
            <span class="spn2">lets go</span>
          </Link>
        </button>
      </div>

      <Footer />
    </>
  );
}
