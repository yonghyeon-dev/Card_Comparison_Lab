import React from "react";
import "./Benefits.css";

const Benefits = () => {
  const benefits = [
    {
      title: "온라인 쇼핑 혜택",
      description: "온라인 쇼핑몰에서 최대 5%까지 할인받을 수 있습니다.",
      icon: "🛒",
      examples: ["쿠팡", "11번가", "G마켓", "옥션"],
    },
    {
      title: "대중교통 혜택",
      description:
        "지하철, 버스 등 대중교통 이용 시 할인 혜택을 받을 수 있습니다.",
      icon: "🚇",
      examples: ["지하철", "버스", "택시", "공항철도"],
    },
    {
      title: "편의점 혜택",
      description: "편의점에서 음료, 간식 구매 시 할인 혜택을 제공합니다.",
      icon: "🏪",
      examples: ["CU", "GS25", "세븐일레븐", "이마트24"],
    },
    {
      title: "카페 혜택",
      description:
        "스타벅스, 투썸플레이스 등 카페에서 할인 혜택을 받을 수 있습니다.",
      icon: "☕",
      examples: ["스타벅스", "투썸플레이스", "할리스", "이디야"],
    },
    {
      title: "해외 사용 혜택",
      description:
        "해외에서 카드 사용 시 추가 혜택과 안전한 결제를 제공합니다.",
      icon: "✈️",
      examples: ["해외 할인", "수수료 면제", "여행자보험", "긴급현금서비스"],
    },
  ];

  return (
    <div className="benefits-page">
      <div className="page-header">
        <div className="container">
          <h1>카드 혜택 가이드</h1>
          <p>다양한 카드 혜택을 알아보고 나에게 맞는 혜택을 선택하세요</p>
        </div>
      </div>

      <div className="container">
        <h2
          className="benefits-title"
          style={{ color: "#222", textDecoration: "none" }}
        >
          카드 비교 연구소 혜택 안내
        </h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
              <div className="benefit-examples">
                <h4>주요 가맹점</h4>
                <div className="example-tags">
                  {benefit.examples.map((example, idx) => (
                    <span key={idx} className="example-tag">
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
