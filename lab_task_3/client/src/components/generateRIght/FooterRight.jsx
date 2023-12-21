import React, { useState, useEffect } from "react";
import Pagination from "../Pagination/Pagination";
import { getFooters } from "../../Hooks/hooks";
import { modifyFooterHtml } from "../../Helper/helper";
import Card from "../componentCard/Card";

export default function FooterRight() {
  const [currentPage, setCurrentPage] = useState(1);
  const [footerColorBG, setFooterColorBG] = useState("#000000");
  const [footerColorPrimary, setFooterColorPrimary] = useState("#000000");
  const [pageEmail, setPageEmail] = useState("");
  const [pagePhone, setPagePhone] = useState("");
  const [address, setAddress] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [footers, setFooters] = useState([]);
  const [footerData, setFooterData] = useState({});

  const itemsPerPage = 1;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    getFooters().then((res) => {
      setFooters(res.data);
      localStorage.setItem("footerHTML", "");
      localStorage.setItem("footerCSS", "");
    });
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedCards = footers.slice(startIndex, endIndex);

  // Placeholder function for handling save button click
  const handleSaveButtonClick = () => {
    modifyFooterHtml(
      footerData,
      companyName,
      address,
      pageEmail,
      pagePhone,
      footerColorBG,
      footerColorPrimary
    );
  };
  const handleCardClick = (index) => {
    console.log("handleCardClick called");
    setFooterData(displayedCards[index]);
  };

  return (
    <div>
      <h1>Footer</h1>
      <div className="cards_container">
        {displayedCards.map((footer, index) => (
          <button
            onClick={() => handleCardClick(index)}
            style={{ background: "none", border: "none" }}
          >
            <Card
              key={footer._id}
              image={footer.image}
              name={footer.footerName}
              author={footer.creator}
            />
          </button>
        ))}
      </div>
      <Pagination
        totalItems={footers.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />

      <div className="inputs">
        <h2>Add Basic Info</h2>
        <div className="links_input">
          <div className="input">
            <label>Footer Color:</label>
            <input
              type="color"
              value={footerColorPrimary}
              onChange={(e) => setFooterColorPrimary(e.target.value)}
            />
          </div>
          <div className="input">
            <label>Footer Color:</label>
            <input
              type="color"
              value={footerColorBG}
              onChange={(e) => setFooterColorBG(e.target.value)}
            />
          </div>
        </div>
        <div className="links_input">
          <div className="input">
            <label>Email:</label>
            <input
              type="text"
              value={pageEmail}
              onChange={(e) => setPageEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <label>Phone number</label>
            <input
              type="text"
              value={pagePhone}
              onChange={(e) => setPagePhone(e.target.value)}
            />
          </div>
        </div>
        <div className="links_input">
          <div className="input">
            <label>Address:</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="input">
            <label>Company Name</label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
        </div>
        <div className="button-container">
          <button onClick={handleSaveButtonClick}>Save</button>
        </div>
      </div>
    </div>
  );
}
