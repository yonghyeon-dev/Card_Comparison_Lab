import React, { useState } from "react";
import Modal from "./Modal";
import { cards } from "../data/cards";
import "./CardRecommendModal.css";

const CardRecommendModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    age: "",
    income: "",
    spending: "",
    preferences: [],
  });
  const [recommendedCards, setRecommendedCards] = useState([]);
  const [step, setStep] = useState(1);

  const ageRanges = ["20대", "30대", "40대", "50대", "60대 이상"];
  const incomeRanges = [
    "2000만원 미만",
    "2000-4000만원",
    "4000-6000만원",
    "6000만원 이상",
  ];
  const spendingCategories = [
    "온라인 쇼핑",
    "대중교통",
    "편의점",
    "카페",
    "해외여행",
    "주유",
    "영화/문화",
  ];
  const spendingRanges = [
    "월 50만원 미만",
    "월 50-100만원",
    "월 100-200만원",
    "월 200만원 이상",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePreferenceToggle = (preference) => {
    setFormData((prev) => ({
      ...prev,
      preferences: prev.preferences.includes(preference)
        ? prev.preferences.filter((p) => p !== preference)
        : [...prev.preferences, preference],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 간단한 추천 로직
    let filteredCards = cards;

    // 선호도에 따른 필터링
    if (formData.preferences.length > 0) {
      filteredCards = filteredCards.filter((card) =>
        formData.preferences.some((pref) =>
          card.benefits.some((benefit) => benefit.includes(pref))
        )
      );
    }

    // 소득에 따른 필터링 (간단한 로직)
    if (formData.income === "2000만원 미만") {
      filteredCards = filteredCards.filter((card) => card.annualFee === 0);
    }

    // 평점순으로 정렬하고 상위 3개 추천
    filteredCards.sort((a, b) => b.rating - a.rating);
    setRecommendedCards(filteredCards.slice(0, 3));
    setStep(2);
  };

  const resetForm = () => {
    setFormData({
      age: "",
      income: "",
      spending: "",
      preferences: [],
    });
    setRecommendedCards([]);
    setStep(1);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={step === 1 ? "카드 추천받기" : "추천 카드"}
    >
      {step === 1 ? (
        <form onSubmit={handleSubmit} className="recommend-form">
          <div className="form-group">
            <label>연령대</label>
            <select
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              required
            >
              <option value="">연령대를 선택하세요</option>
              {ageRanges.map((age) => (
                <option key={age} value={age}>
                  {age}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>연소득</label>
            <select
              name="income"
              value={formData.income}
              onChange={handleInputChange}
              required
            >
              <option value="">연소득을 선택하세요</option>
              {incomeRanges.map((income) => (
                <option key={income} value={income}>
                  {income}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>월 카드 사용금액</label>
            <select
              name="spending"
              value={formData.spending}
              onChange={handleInputChange}
              required
            >
              <option value="">월 사용금액을 선택하세요</option>
              {spendingRanges.map((spending) => (
                <option key={spending} value={spending}>
                  {spending}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>주요 사용 카테고리 (복수 선택 가능)</label>
            <div className="preferences-grid">
              {spendingCategories.map((category) => (
                <label key={category} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={formData.preferences.includes(category)}
                    onChange={() => handlePreferenceToggle(category)}
                  />
                  <span>{category}</span>
                </label>
              ))}
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-full">
            카드 추천받기
          </button>
        </form>
      ) : (
        <div className="recommendation-results">
          <p className="recommendation-intro">
            입력하신 정보를 바탕으로 최적의 카드를 추천드립니다.
          </p>

          <div className="recommended-cards">
            {recommendedCards.map((card, index) => (
              <div key={card.id} className="recommended-card">
                <div className="card-rank">#{index + 1}</div>
                <div className="card-info">
                  <div className="recommend-card-title">{card.name}</div>
                  <div className="recommend-card-meta">
                    <span className="recommend-card-meta-item recommend-card-fee">
                      연회비:{" "}
                      {card.annualFee === 0 ? "무료" : `${card.annualFee}원`}
                    </span>
                    <span className="recommend-card-meta-item">
                      평점: {card.rating}
                    </span>
                  </div>
                  <div className="recommend-card-desc">{card.description}</div>
                </div>
                <button
                  className="btn btn-primary btn-small"
                  onClick={() => {
                    alert(`${card.name} 상세보기 페이지로 이동합니다.`);
                  }}
                >
                  상세보기
                </button>
              </div>
            ))}
          </div>

          <div className="recommendation-actions">
            <button className="btn btn-secondary" onClick={resetForm}>
              다시 추천받기
            </button>
            <button className="btn btn-primary" onClick={handleClose}>
              닫기
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default CardRecommendModal;
