import React from "react";
import "./Guide.css";

const Guide = () => {
  const guides = [
    {
      title: "신용카드 신청 방법",
      steps: [
        "본인인증을 진행합니다",
        "소득 및 신용정보를 확인합니다",
        "원하는 카드를 선택합니다",
        "신청서를 작성하고 제출합니다",
        "승인 후 카드를 받습니다",
      ],
      icon: "📝",
    },
    {
      title: "카드 혜택 활용법",
      steps: [
        "카드별 혜택을 미리 확인합니다",
        "가맹점별 할인 혜택을 체크합니다",
        "월별 사용 실적을 관리합니다",
        "포인트 적립 및 사용을 최적화합니다",
        "연회비 면제 조건을 확인합니다",
      ],
      icon: "💳",
    },
    {
      title: "신용점수 관리",
      steps: [
        "정기적으로 신용점수를 확인합니다",
        "연체나 미납을 방지합니다",
        "카드 사용 한도를 적절히 관리합니다",
        "다양한 금융상품을 이용합니다",
        "신용정보 변경사항을 수시로 확인합니다",
      ],
      icon: "📊",
    },
  ];

  return (
    <div className="guide-page">
      <div className="page-header">
        <div className="container">
          <h1 style={{ color: "#222", textDecoration: "none" }}>
            카드 비교 연구소 이용 가이드
          </h1>
          <p>신용카드 신청부터 활용까지 모든 것을 알아보세요</p>
        </div>
      </div>

      <div className="container">
        <div className="guides-grid">
          {guides.map((guide, index) => (
            <div key={index} className="guide-card">
              <div className="guide-header">
                <div className="guide-icon">{guide.icon}</div>
                <h3>{guide.title}</h3>
              </div>
              <div className="guide-steps">
                {guide.steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="step-item">
                    <div className="step-number">{stepIndex + 1}</div>
                    <div className="step-content">{step}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tips-section">
          <h2>💡 유용한 팁</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <h4>연회비 면제 팁</h4>
              <p>
                연회비 면제 조건을 미리 확인하고, 월 사용금액을 관리하여
                연회비를 절약하세요.
              </p>
            </div>
            <div className="tip-card">
              <h4>포인트 적립 팁</h4>
              <p>
                카드별 포인트 적립률을 비교하고, 가맹점별 추가 적립 혜택을
                활용하세요.
              </p>
            </div>
            <div className="tip-card">
              <h4>안전한 사용 팁</h4>
              <p>
                카드 정보를 안전하게 보관하고, 정기적으로 사용 내역을
                확인하세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
