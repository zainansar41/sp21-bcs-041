// Navbar.jsx

import React, { useState, useEffect } from "react";
import Pagination from "../Pagination/Pagination";
import "./right.css";
import { modifyNavbarHtml } from "../../Helper/helper";
import { getNavbars } from "../../Hooks/hooks";
import Card from "../componentCard/Card";

export default function Navbar({ selectedContent, onAddLink }) {
  const [navbars, setNavbars] = useState([]);
  const [navbarData, setNavbarData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [companyName, setCompanyName] = useState("");
  const [linkName, setLinkName] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [links, setLinks] = useState([]);
  const [navColor, setNavColor] = useState("#000000");
  const itemsPerPage = 1;

  useEffect(() => {
    getNavbars().then((res) => {
      console.log(res);
      setNavbars(res.data);
      localStorage.setItem("navbarHtml", "");
      localStorage.setItem("navbarCSS", "");
    });
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleAddLink = () => {
    const newLink = { name: linkName, url: linkUrl };
    setLinks([...links, newLink]);
    onAddLink(newLink);
    setLinkName("");
    setLinkUrl("");
  };

  const handleSave = () => {
    localStorage.setItem("links", JSON.stringify(links));
    modifyNavbarHtml(
      navbarData.htmlCode,
      navbarData,
      links,
      companyName,
      navColor
    );
  };

  const handleCardClick = (index) => {
    console.log("handleCardClick called");
    setNavbarData(displayedCards[index]);
    console.log(navbarData);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedCards = navbars.slice(startIndex, endIndex);

  return (
    <div className="container">
      <h1>{selectedContent}</h1>
      <div className="cards_container">
        {displayedCards.map((navbar, index) => (
          <button onClick={() => handleCardClick(index)} style={{background:'none', border:'none'}}>
            <Card
              key={navbar._id}
              image={navbar.image}
              name={navbar.navbarName}
              author={navbar.creator}
            />
          </button>
        ))}
      </div>
      <Pagination
        totalItems={navbars.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
      <div className="inputs">
        <h2>Add Basic Info</h2>
        <div className="input">
          <label>Company Name:</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div className="links_input">
          <div className="input">
            <label>Link Name:</label>
            <input
              type="text"
              value={linkName}
              onChange={(e) => setLinkName(e.target.value)}
            />
          </div>
          <div className="input">
            <label>Link URL:</label>
            <input
              type="text"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
            />
          </div>
        </div>
        <div className="input">
          <label>NavBar Primary Color:</label>
          <input
            type="color"
            value={navColor}
            onChange={(e) => setNavColor(e.target.value)}
          />
        </div>
        <div className="button-container">
          <button onClick={handleAddLink}>Add Link</button>
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
}
