import React, { useState, useEffect } from "react";
import { cards, cardCompanies, benefitCategories } from "../data/cards";
import CardList from "./CardList";
import FilterSection from "./FilterSection";
import "./CardComparison.css";

const CardComparison = () => {
  const [filteredCards, setFilteredCards] = useState(cards);
  const [selectedCompany, setSelectedCompany] = useState("전체");
  const [selectedBenefits, setSelectedBenefits] = useState([]);
  const [sortBy, setSortBy] = useState("rating");

  useEffect(() => {
    let filtered = cards;

    // 카드사 필터
    if (selectedCompany !== "전체") {
      filtered = filtered.filter((card) => card.company === selectedCompany);
    }

    // 혜택 필터
    if (selectedBenefits.length > 0) {
      filtered = filtered.filter((card) =>
        selectedBenefits.some((benefit) =>
          card.benefits.some((cardBenefit) => cardBenefit.includes(benefit))
        )
      );
    }

    // 정렬
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "annualFee":
          return a.annualFee - b.annualFee;
        case "creditLimit":
          return parseInt(b.creditLimit) - parseInt(a.creditLimit);
        default:
          return 0;
      }
    });

    setFilteredCards(filtered);
  }, [selectedCompany, selectedBenefits, sortBy]);

  const handleCompanyChange = (company) => {
    setSelectedCompany(company);
  };

  const handleBenefitToggle = (benefit) => {
    setSelectedBenefits((prev) =>
      prev.includes(benefit)
        ? prev.filter((b) => b !== benefit)
        : [...prev, benefit]
    );
  };

  const handleSortChange = (sortType) => {
    setSortBy(sortType);
  };

  return (
    <section className="card-comparison">
      <div className="container">
        <div className="comparison-header">
          <h2>카드 비교</h2>
          <p>나에게 맞는 최적의 카드를 찾아보세요</p>
        </div>

        <FilterSection
          companies={cardCompanies}
          benefits={benefitCategories}
          selectedCompany={selectedCompany}
          selectedBenefits={selectedBenefits}
          sortBy={sortBy}
          onCompanyChange={handleCompanyChange}
          onBenefitToggle={handleBenefitToggle}
          onSortChange={handleSortChange}
        />

        <CardList cards={filteredCards} />
      </div>
    </section>
  );
};

export default CardComparison;
