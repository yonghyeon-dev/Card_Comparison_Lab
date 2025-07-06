import React, { useState } from "react";
import CardDetailModal from "./CardDetailModal";
import "./CardItem.css";

const CardItem = ({ card }) => {
  const [detailModal, setDetailModal] = useState(false);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="star filled">
          ★
        </span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="star half">
          ★
        </span>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="star">
          ☆
        </span>
      );
    }

    return stars;
  };

  const handleDetailClick = () => {
    setDetailModal(true);
  };

  const handleApplyClick = () => {
    alert(`${card.name} 신청 페이지로 이동합니다.`);
  };

  return (
    <>
      <div className="card-item">
        <div className="card-header">
          <div className="card-company">{card.company}</div>
          <div className="card-rating">
            {renderStars(card.rating)}
            <span className="rating-text">{card.rating}</span>
          </div>
        </div>

        <div className="card-body">
          <h3 className="card-name">{card.name}</h3>
          <p className="card-description">{card.description}</p>

          <div className="card-details">
            <div className="detail-item">
              <span className="detail-label">연회비</span>
              <span className="detail-value">
                {card.annualFee === 0 ? "무료" : `${card.annualFee}원`}
              </span>
            </div>
            <div className="detail-item">
              <span className="detail-label">한도</span>
              <span className="detail-value">{card.creditLimit}</span>
            </div>
          </div>

          <div className="card-benefits">
            <h4>주요 혜택</h4>
            <ul>
              {card.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="card-footer">
          <button className="btn btn-primary" onClick={handleDetailClick}>
            상세보기
          </button>
          <button className="btn btn-secondary" onClick={handleApplyClick}>
            신청하기
          </button>
        </div>
      </div>

      <CardDetailModal
        isOpen={detailModal}
        onClose={() => setDetailModal(false)}
        card={card}
      />
    </>
  );
};

export default CardItem;
