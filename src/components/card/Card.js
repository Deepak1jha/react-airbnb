import React from "react";
import "../card/card.css";

export default function Card({src, title, description, price}) {
  return (
    <div className="card">
      <img src={src} alt="icons"/>
      <div className="home_section">
        <div className="card_info">
          <h2>{title}</h2>
          <h4>{description}</h4>
          <h3>{price}</h3>
        </div>
      </div>
    </div>
  )
}
