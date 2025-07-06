import React from "react";
import CardItem from "./CardItem";
import "./CardList.css";

const CardList = ({ cards }) => {
  if (cards.length === 0) {
    return (
      <div className="no-results">
        <h3>검색 결과가 없습니다</h3>
        <p>다른 조건으로 검색해보세요.</p>
      </div>
    );
  }

  return (
    <div className="card-list">
      {cards.map((card) => (
        <CardItem key={card.id} card={card} />
      ))}
    </div>
  );
};

export default CardList;
