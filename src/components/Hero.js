import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardRecommendModal from "./CardRecommendModal";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();
  const [recommendModal, setRecommendModal] = useState(false);

  const handleCompareClick = () => {
    navigate("/compare");
  };

  const handleRecommendClick = () => {
    setRecommendModal(true);
  };

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                <span className="highlight">카드 비교 연구소</span>에서
                <br />
                최고의 신용카드를 한눈에 비교하세요
              </h1>
              <p className="hero-description">
                연회비, 혜택, 한도를 종합적으로 분석하여
                <br />
                나에게 맞는 최적의 카드를 찾아보세요
              </p>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">카드 정보</span>
                </div>
                <div className="stat">
                  <span className="stat-number">50만+</span>
                  <span className="stat-label">사용자</span>
                </div>
                <div className="stat">
                  <span className="stat-number">99%</span>
                  <span className="stat-label">만족도</span>
                </div>
              </div>
              <div className="hero-actions">
                <button
                  className="btn btn-primary btn-large"
                  onClick={handleCompareClick}
                >
                  카드 비교하기
                </button>
                <button
                  className="btn btn-secondary btn-large"
                  onClick={handleRecommendClick}
                >
                  카드 추천받기
                </button>
              </div>
            </div>
            <div className="hero-image">
              <div className="card-showcase">
                <div className="card card-1">
                  <div className="card-chip"></div>
                  <div className="card-number">**** **** **** 1234</div>
                  <div className="card-info">
                    <span className="card-name">홍길동</span>
                    <span className="card-type">VISA</span>
                  </div>
                </div>
                <div className="card card-2">
                  <div className="card-chip"></div>
                  <div className="card-number">**** **** **** 5678</div>
                  <div className="card-info">
                    <span className="card-name">김철수</span>
                    <span className="card-type">MASTER</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CardRecommendModal
        isOpen={recommendModal}
        onClose={() => setRecommendModal(false)}
      />
    </>
  );
};

export default Hero;
