import React, { useEffect, useState } from "react";
import generateBG from "../../assets/generateBG.jpeg";
import "./right.css";
import Navbar from "./Navbar";
import Testimonial from "./Testmonial";
import HeroRight from "./HeroRight";
import { useNavigate } from "react-router-dom";
import FooterRight from "./FooterRight";

export default function Right({ selectedContent }) {
  const navigate = useNavigate();
  let contentToRender;
  useEffect(() => {
    localStorage.setItem("navbarHtml", "");
    localStorage.setItem("navbarCSS", "");
    localStorage.setItem("testimonialHtml", "");
    localStorage.setItem("testimonialCSS", "");
    localStorage.setItem("footerHTML", "");
    localStorage.setItem("footerCSS", "");
    localStorage.setItem("heroHTML", "");
    localStorage.setItem("heroCSS", "");
  }, []);

  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAddLink = (newLink) => {
    setLinks([...links, newLink]);
  };

  const handlePreview = () => {
    setLoading(true);

    // Add a random delay between 1 and 4 seconds
    const delay = Math.floor(Math.random() * (4000 - 1000 + 1) + 1000);

    // Use setTimeout to simulate the delay
    setTimeout(() => {
      // Get HTML and CSS from localStorage or your state
      const navbarHtml = localStorage.getItem("navbarHtml");
      const testimonialHtml = localStorage.getItem("testimonialHtml");
      const footerHtml = localStorage.getItem("footerHTML");
      const heroHtml = localStorage.getItem("heroHTML");
      let concatenatedHtml = navbarHtml +heroHtml+ testimonialHtml + footerHtml;
      console.log(concatenatedHtml);

      // remove xmlns="http://www.w3.org/1999/xhtml
      concatenatedHtml = concatenatedHtml.replace(
        'xmlns="http://www.w3.org/1999/xhtml"',
        ""
      );

      const navbarCSS = localStorage.getItem("navbarCSS");
      const testimonialCSS = localStorage.getItem("testimonialCSS");
      const footerCSS = localStorage.getItem("footerCSS");
      const heroCSS = localStorage.getItem("heroCSS");
      const concatenatedCSS = navbarCSS + heroCSS +testimonialCSS + footerCSS;

      // Pass the concatenated HTML and CSS to the "/preview" route
      navigate("/preview", {
        state: {
          html: concatenatedHtml,
          css: concatenatedCSS,
        },
      });

      // Reset loading state after the delay
      setLoading(false);
    }, delay);
  };

  switch (selectedContent) {
    case "Navbar":
      contentToRender = (
        <Navbar selectedContent={selectedContent} onAddLink={handleAddLink} />
      );
      break;
    case "Hero Section":
      contentToRender = (
        <HeroRight/>
      );
      break;
    case "Cards":
      contentToRender = (
        <div>
          <h1>Cards</h1>
        </div>
      );
      break;
    case "Testimonials":
      contentToRender = (
        <Testimonial
          selectedContent={selectedContent}
          onAddLink={handleAddLink}
        />
      );

      break;
    case "Forms":
      contentToRender = (
        <div>
          <h1>Forms</h1>
        </div>
      );
      break;
    case "Footer":
      contentToRender = <FooterRight selectedContent={selectedContent} />;
      break;
    case "Others":
      contentToRender = (
        <div>
          <h1>Others</h1>
        </div>
      );
      break;

    default:
      contentToRender = (
        <>
          <img src={generateBG} alt="" />
          <div className="div">
            <h2>Lets Start making</h2>
            <h3>Click on the buttons from side menu to start making website</h3>
            <div className="btn_div">
              <div class="light-button">
                <button class="bt">
                  <div class="light-holder">
                    <div class="dot"></div>
                    <div class="light"></div>
                  </div>
                  <div class="button-holder">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path>
                    </svg>
                    <p>Start</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </>
      );
  }

  return (
    <>
      <>
        {contentToRender}{" "}
        <button className="preview" onClick={handlePreview}>
          Preview
        </button>
        {loading && (
          <div className="loading-screen">
            <div className="loading-spinner"></div>
            <h2>Generating Code</h2>
          </div>
        )}
      </>
    </>
  );
}
