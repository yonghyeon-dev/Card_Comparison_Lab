import React from "react";
import Modal from "./Modal";
import "./CardDetailModal.css";

const CardDetailModal = ({ isOpen, onClose, card }) => {
  if (!card) return null;

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

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`${card.company} - ${card.name}`}
    >
      <div className="card-detail">
        <div className="card-header-detail">
          <div className="card-company-info">
            <h3>{card.company}</h3>
            <div className="card-rating-detail">
              {renderStars(card.rating)}
              <span className="rating-text">{card.rating}</span>
            </div>
          </div>
        </div>

        <div className="card-info-section">
          <h4>카드 정보</h4>
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">카드명</span>
              <span className="info-value">{card.name}</span>
            </div>
            <div className="info-item">
              <span className="info-label">연회비</span>
              <span className="info-value">
                {card.annualFee === 0 ? "무료" : `${card.annualFee}원`}
              </span>
            </div>
            <div className="info-item">
              <span className="info-label">한도</span>
              <span className="info-value">{card.creditLimit}</span>
            </div>
          </div>
        </div>

        <div className="card-description-section">
          <h4>카드 설명</h4>
          <p>{card.description}</p>
        </div>

        <div className="card-benefits-section">
          <h4>주요 혜택</h4>
          <div className="benefits-list">
            {card.benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span className="benefit-text">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card-actions">
          <button
            className="btn btn-primary"
            onClick={() => {
              alert("카드 신청 페이지로 이동합니다.");
              onClose();
            }}
          >
            카드 신청하기
          </button>
          <button className="btn btn-secondary" onClick={onClose}>
            닫기
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CardDetailModal;
