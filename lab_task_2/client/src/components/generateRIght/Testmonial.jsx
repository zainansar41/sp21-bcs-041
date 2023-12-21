import React, { useState, useEffect } from "react";
import Pagination from "../Pagination/Pagination";
import "./right.css";
import Card from "../componentCard/Card";

import { getTestimonials } from "../../Hooks/hooks";
import { modifyTestimonialHtml } from "../../Helper/helper";

export default function Testimonial({ selectedContent }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [testimoninalText1, setTestimoninalText1] = useState("");
  const [testimoninalName1, setTestimoninalName1] = useState("");
  const [testimoninals, setTestimoninals] = useState([]);
  const [testimoninalsDB, setTestimoninalsDB] = useState([]);
  const [TestimonialData, setTestimonialData] = useState({});

  useEffect(() => {
    getTestimonials().then((res) => {
      setTestimoninalsDB(res.data);
      setTestimonialData(res.data[0]);
      localStorage.setItem("testimonialHtml", "");
      localStorage.setItem("testimonialCSS", "");
    });
  }, []);

  const itemsPerPage = 1; // Change the number of items per page

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleAddTestimonial = () => {
    const newTestimonial = {
      name: testimoninalName1,
      review: testimoninalText1,
    };
    setTestimoninals([...testimoninals, newTestimonial]);
    setTestimoninalName1("");
    setTestimoninalText1("");
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  // const displayedTestimonials = testimoninals.slice(startIndex, endIndex);

  const handleSaveClick = () => {
    modifyTestimonialHtml(
      TestimonialData.htmlCode,
      TestimonialData,
      testimoninals,
      heading,
      subHeading
    );
  };

  const handleCardClick = (index) => {
    console.log(testimoninalsDB[index]);
    setTestimonialData(testimoninalsDB[index]);
  };

  return (
    <div>
      <h1>Testimonials</h1>
      <div className="cards_container">
        {testimoninalsDB.map((testimonial, index) => (
          <button
            onClick={() => handleCardClick(index)}
            style={{ background: "none", border: "none" }}
            key={index}
          >
            <Card
              key={index}
              image={testimonial.image}
              name={testimonial.testimonialName}
              author={testimonial.creator}
            />
          </button>
        ))}
      </div>
      <Pagination
        totalItems={testimoninalsDB.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
      <div className="links_input" style={{ marginTop: "40px" }}>
        <div className="input">
          <label>Heading:</label>
          <input
            type="text"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
          />
        </div>
        <div className="input">
          <label>Sub heading:</label>
          <input
            type="text"
            value={subHeading}
            onChange={(e) => setSubHeading(e.target.value)}
          />
        </div>
      </div>
      <div className="inputs">
        <div className="input">
          <label>Name:</label>
          <input
            type="text"
            value={testimoninalName1}
            onChange={(e) => setTestimoninalName1(e.target.value)}
          />
        </div>
        <div className="input">
          <label>Review:</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            type="text"
            value={testimoninalText1}
            onChange={(e) => setTestimoninalText1(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="button-container">
        <button onClick={handleAddTestimonial}>Add Testimonial</button>
        <button onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  );
}
