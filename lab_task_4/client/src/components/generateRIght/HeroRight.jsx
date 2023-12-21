import React, { useState, useEffect } from "react";
import Pagination from "../Pagination/Pagination";
import Card from "../componentCard/Card";

import { getHero } from "../../Hooks/hooks";

export default function HeroRight() {
  const [heroArray, setHeroArray] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [heroData, setHeroData] = useState({});
  const [heading, setHeading] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [BGcolor, setBGcolor] = useState("");
  const itemsPerPage = 1;

  useEffect(() => {
    getHero().then((res) => {
      setHeroArray(res.data);
    });
  }, []);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedCards = heroArray && heroArray.slice(startIndex, endIndex); // Check if heroArray is defined

  const handleCardClick = (index) => {
    setHeroData(displayedCards[index]);

    console.log(heroData);
  };
  const handleSave = () => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(heroData.htmlCode, "text/html");

    const headingClass = doc.getElementsByClassName(heroData.heading);
    console.log(headingClass);
    if (headingClass) {
      headingClass[0].innerHTML = heading;
    }
    const paragraphClass = doc.getElementsByClassName(heroData.paraClass);
    if (paragraphClass) {
      paragraphClass[0].innerHTML = paragraph;
    }
    const button = doc.getElementsByClassName(heroData.buttonClass);
    if (button) {
      button[0].innerHTML = buttonText;
    }

    const hero = doc.getElementsByClassName("hero_main")[0];
    let updatedHTML = new XMLSerializer().serializeToString(hero);

    updatedHTML = updatedHTML.replace(
      'xmlns="http://www.w3.org/1999/xhtml"',
      ""
    );
    updatedHTML = updatedHTML.replace(
      /style="background-color:.*?"/g,
      `style="background-color:${BGcolor}"`
    );
    console.log(updatedHTML);
    localStorage.setItem("heroHTML", updatedHTML);
    localStorage.setItem("heroCSS", heroData.cssCode);
  };

  return (
    <div className="container">
      <h1>Hero Section</h1>
      <div className="cards_container">
        {displayedCards &&
          displayedCards.map((hero, index) => (
            <button
              onClick={() => handleCardClick(index)}
              style={{ background: "none", border: "none" }}
            >
              <Card
                key={hero._id}
                image={hero.image}
                name={hero.name}
                author={hero.creator}
              />
            </button>
          ))}
      </div>
      <Pagination
        totalItems={heroArray.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
      <div className="inputs">
        <h2>Add Basic Info</h2>
        <div className="input">
          <label>Heading?:</label>
          <input
            type="text"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
          />
        </div>
        <div className="links_input">
          <div className="input">
            <label>paragraph:</label>
            <input
              type="text"
              value={paragraph}
              onChange={(e) => setParagraph(e.target.value)}
            />
          </div>
          <div className="input">
            <label>Button Text:</label>
            <input
              type="text"
              value={buttonText}
              onChange={(e) => setButtonText(e.target.value)}
            />
          </div>
        </div>
        <div className="input">
          <label>Hero background Color:</label>
          <input
            type="color"
            value={BGcolor}
            onChange={(e) => setBGcolor(e.target.value)}
          />
        </div>
        <div className="button-container">
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
}
