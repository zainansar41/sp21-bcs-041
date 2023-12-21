import React from "react";
import "./headline.css";
import {Link} from 'react-router-dom'

export default function Headline() {
  return (
    <div className="headline_main">
      <h4 className="headline_title">
        Welcome to <span>&lt;Code Generator&gt;</span>
      </h4>
      <p className="headline_text">
        We prioritize supporting the open web. Collaborating with our users, we
        allocate 5% of our time to advancing free and open-source code as well
        as fostering community growth.
      </p>
      <button>
        <Link to={'/'} class="btn2">
          <span class="spn2">lets go</span>
        </Link>
      </button>
    </div>
  );
}
