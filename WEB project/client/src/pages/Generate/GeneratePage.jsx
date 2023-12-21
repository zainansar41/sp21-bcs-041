import React, { useState } from "react";
import Right from "../../components/generateRIght/Right";
import "./generatePage.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function GeneratePage() {
  const [selectedContent, setSelectedContent] = useState(null);

  const handleContentClick = (content) => {
    setSelectedContent(content);
  };

  return (
    <>
      <Navbar />
      <div className="GenratePage_div">
        <div className="leftOptions">
          <h1>Content</h1>
          <div className="content">
            <div className="content1">
              <button onClick={() => handleContentClick("Navbar")}>Navbar</button>
            </div>
            <div className="content1">
              <button onClick={() => handleContentClick("Hero Section")}>Hero Section</button>
            </div>
            <div className="content1">
              <button onClick={() => handleContentClick("Cards")}>Cards</button>
            </div>
            <div className="content1">
              <button onClick={() => handleContentClick("Testimonials")}>Testimonials</button>
            </div>
            <div className="content1">
              <button onClick={() => handleContentClick("Forms")}>Forms</button>
            </div>
            <div className="content1">
              <button onClick={() => handleContentClick("Footer")}>Footer</button>
            </div>
            <div className="content1">
              <button onClick={() => handleContentClick("Others")}>Others</button>
            </div>
            
          </div>
        </div>
        <div className="rightDiv">
          <Right selectedContent={selectedContent} />
        </div>
      </div>
      <Footer />
    </>
  );
}
