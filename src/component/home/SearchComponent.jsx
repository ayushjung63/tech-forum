import React from "react";
import "../../css/search.css";

export default function SearchComponent() {
  return (
    <div className="search-outer-container">
      <div className="search-inner-container">
        <input className="search-input" type="text" placeholder="Search.." />
        <span className="right-content">
          <span className="or-text">or</span>
          <button className="ask-question">Ask Question</button>
        </span>
      </div>
    </div>
  );
}
