import React from "react";
import "./FilterSection.css";

const FilterSection = ({
  companies,
  benefits,
  selectedCompany,
  selectedBenefits,
  sortBy,
  onCompanyChange,
  onBenefitToggle,
  onSortChange,
}) => {
  return (
    <div className="filter-section">
      <div className="filter-row">
        <div className="filter-group">
          <label>카드사</label>
          <select
            value={selectedCompany}
            onChange={(e) => onCompanyChange(e.target.value)}
            className="filter-select"
          >
            {companies.map((company) => (
              <option key={company} value={company}>
                {company}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>정렬</label>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="filter-select"
          >
            <option value="rating">평점순</option>
            <option value="annualFee">연회비순</option>
            <option value="creditLimit">한도순</option>
          </select>
        </div>
      </div>

      <div className="filter-row">
        <div className="filter-group">
          <label>혜택</label>
          <div className="benefit-filters">
            {benefits.map((benefit) => (
              <label key={benefit} className="checkbox-label">
                <input
                  type="checkbox"
                  checked={selectedBenefits.includes(benefit)}
                  onChange={() => onBenefitToggle(benefit)}
                />
                <span>{benefit}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
