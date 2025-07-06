import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <h3 style={{ color: "#3498db", textDecoration: "none" }}>
                카드 비교 연구소
              </h3>
              <p>최고의 신용카드 비교 서비스를 제공합니다</p>
            </div>
          </div>

          <div className="footer-section">
            <h4>서비스</h4>
            <ul>
              <li>
                <Link to="/compare">카드 비교</Link>
              </li>
              <li>
                <Link to="/benefits">카드 혜택</Link>
              </li>
              <li>
                <Link to="/guide">카드 가이드</Link>
              </li>
              <li>
                <Link to="/about">회사 소개</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>고객지원</h4>
            <ul>
              <li>
                <a href="mailto:info@cardcomparepro.com">문의하기</a>
              </li>
              <li>
                <a href="tel:1588-1234">전화상담</a>
              </li>
              <li>
                <a href="/terms">이용약관</a>
              </li>
              <li>
                <a href="/privacy">개인정보처리방침</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>연락처</h4>
            <p>이메일: info@cardcomparepro.com</p>
            <p>전화: 1588-1234</p>
            <div className="social-links">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 카드비교프로. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
