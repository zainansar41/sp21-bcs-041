import React from "react";
import './footer.css';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="content">
        <div className="left box">
          <div className="upper">
            <div className="topic">About us</div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
              natus consequuntur molestias! Illum adipisci amet ex modi labore
              dignissimos dolor totam, quo dolorem beatae cumque quod autem
              consequuntur saepe sunt.
            </p>
          </div>
          <div className="lower">
            <div className="topic">Contact us</div>
            <div className="phone">
              <Link to="#" className="link">
                <i className="fas fa-phone-volume"></i>+007 9089 6767
              </Link>
            </div>
            <div className="email">
              <Link to="#" className="link">
                <i className="fas fa-envelope"></i>abc@gmail.com
              </Link>
            </div>
          </div>
        </div>
        <div className="middle box">
          <div className="topic">Our Services</div>
          <div>
            <Link to="#" className="link">Web Design, Development</Link>
          </div>
          <div>
            <Link to="#" className="link">Web Design, Development</Link>
          </div>
          <div>
            <Link to="#" className="link">Web Design, Development</Link>
          </div>
          <div>
            <Link to="#" className="link">Web Design, Development</Link>
          </div>
        </div>
        <div className="right box">
          <div className="topic">Subscribe us</div>
          <form action="#">
            <div className="media-icons">
              <Link to="#" className="link">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="https://instagram.com/zain.ansari439?igshid=ZDdkNTZiNTM=" className="link">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="#" className="link">
                <i className="fab fa-youtube"></i>
              </Link>
              <Link to="https://www.linkedin.com/in/zain-ansari-ab5b0522b" className="link">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="bottom">
        <p>
          Copyright © 2020{" "}
          <Link to="https://github.com/zainansar41/" className="link">Zain Ul Abidin</Link> All
          rights reserved
        </p>
      </div>
    </footer>
  );
}
