import React from "react";
import CardComparison from "../components/CardComparison";
import "./Compare.css";

const Compare = () => {
  return (
    <div className="compare-page">
      <div className="page-header">
        <div className="container">
          <h2
            className="compare-title"
            style={{ color: "#222", textDecoration: "none" }}
          >
            카드 비교 연구소
          </h2>
          <p>다양한 카드를 비교하고 최적의 선택을 하세요</p>
        </div>
      </div>
      <CardComparison />
    </div>
  );
};

export default Compare;
