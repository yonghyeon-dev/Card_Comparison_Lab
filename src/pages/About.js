import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container">
          <h2
            className="about-title"
            style={{ color: "#222", textDecoration: "none" }}
          >
            카드 비교 연구소 소개
          </h2>
          <p>최고의 신용카드 비교 서비스를 제공합니다</p>
        </div>
      </div>

      <div className="container">
        <div className="about-content">
          <div className="about-section">
            <h2>서비스 소개</h2>
            <p>
              카드비교프로는 국내 최고의 신용카드 비교 서비스입니다. 사용자들이
              복잡한 카드 정보를 쉽게 비교하고, 자신에게 최적화된 카드를 선택할
              수 있도록 도와드립니다.
            </p>
            <p>
              우리는 투명하고 정확한 정보 제공을 통해 사용자들의 합리적인 카드
              선택을 지원합니다.
            </p>
          </div>

          <div className="about-section">
            <h2>핵심 가치</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">🎯</div>
                <h3>정확성</h3>
                <p>최신 카드 정보를 정확하게 제공합니다</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🔍</div>
                <h3>투명성</h3>
                <p>모든 정보를 투명하게 공개합니다</p>
              </div>
              <div className="value-card">
                <div className="value-icon">💡</div>
                <h3>편의성</h3>
                <p>쉽고 직관적인 서비스를 제공합니다</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🤝</div>
                <h3>신뢰성</h3>
                <p>사용자 신뢰를 최우선으로 합니다</p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>서비스 특징</h2>
            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon">📊</div>
                <div className="feature-content">
                  <h3>종합적인 카드 비교</h3>
                  <p>
                    연회비, 혜택, 한도 등 모든 정보를 한눈에 비교할 수 있습니다.
                  </p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎨</div>
                <div className="feature-content">
                  <h3>직관적인 UI/UX</h3>
                  <p>
                    사용자 친화적인 인터페이스로 쉽게 카드를 찾을 수 있습니다.
                  </p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📱</div>
                <div className="feature-content">
                  <h3>모바일 최적화</h3>
                  <p>모든 기기에서 최적화된 경험을 제공합니다.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🔄</div>
                <div className="feature-content">
                  <h3>실시간 정보 업데이트</h3>
                  <p>
                    카드 정보를 실시간으로 업데이트하여 최신 정보를 제공합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>연락처</h2>
            <div className="contact-info">
              <div className="contact-item">
                <strong>이메일:</strong> info@cardcomparepro.com
              </div>
              <div className="contact-item">
                <strong>전화:</strong> 1588-1234
              </div>
              <div className="contact-item">
                <strong>주소:</strong> 서울특별시 강남구 테헤란로 123
              </div>
              <div className="contact-item">
                <strong>운영시간:</strong> 평일 09:00 - 18:00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
