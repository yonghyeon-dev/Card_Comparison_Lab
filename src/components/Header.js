import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthModal from "./AuthModal";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authModal, setAuthModal] = useState({ isOpen: false, mode: "login" });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openAuthModal = (mode) => {
    setAuthModal({ isOpen: true, mode });
  };

  const closeAuthModal = () => {
    setAuthModal({ isOpen: false, mode: "login" });
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <Link to="/">
                <span className="logo-title">카드 비교 연구소</span>
              </Link>
            </div>

            <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
              <ul className="nav-list">
                <li>
                  <Link to="/" onClick={() => setIsMenuOpen(false)}>
                    홈
                  </Link>
                </li>
                <li>
                  <Link to="/compare" onClick={() => setIsMenuOpen(false)}>
                    카드비교
                  </Link>
                </li>
                <li>
                  <Link to="/benefits" onClick={() => setIsMenuOpen(false)}>
                    혜택
                  </Link>
                </li>
                <li>
                  <Link to="/guide" onClick={() => setIsMenuOpen(false)}>
                    가이드
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                    소개
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="header-actions">
              <button
                className="btn btn-secondary"
                onClick={() => openAuthModal("login")}
              >
                로그인
              </button>
              <button
                className="btn btn-primary"
                onClick={() => openAuthModal("signup")}
              >
                회원가입
              </button>
            </div>

            <button className="mobile-menu-btn" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <AuthModal
        isOpen={authModal.isOpen}
        onClose={closeAuthModal}
        mode={authModal.mode}
      />
    </>
  );
};

export default Header;
