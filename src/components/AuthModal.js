import React, { useState } from "react";
import Modal from "./Modal";
import "./AuthModal.css";

const AuthModal = ({ isOpen, onClose, mode = "login" }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });
  const [isLogin, setIsLogin] = useState(mode === "login");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    // 실제 구현에서는 API 호출
    if (isLogin) {
      console.log("로그인:", {
        email: formData.email,
        password: formData.password,
      });
      alert("로그인이 완료되었습니다!");
    } else {
      console.log("회원가입:", formData);
      alert("회원가입이 완료되었습니다!");
    }

    onClose();
    setFormData({ email: "", password: "", confirmPassword: "", name: "" });
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({ email: "", password: "", confirmPassword: "", name: "" });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={isLogin ? "로그인" : "회원가입"}
    >
      <form onSubmit={handleSubmit} className="auth-form">
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="name">이름</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="이름을 입력하세요"
            />
          </div>
        )}

        <div className="form-group">
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="이메일을 입력하세요"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            placeholder="비밀번호를 입력하세요"
          />
        </div>

        {!isLogin && (
          <div className="form-group">
            <label htmlFor="confirmPassword">비밀번호 확인</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
              placeholder="비밀번호를 다시 입력하세요"
            />
          </div>
        )}

        <button type="submit" className="btn btn-primary btn-full">
          {isLogin ? "로그인" : "회원가입"}
        </button>

        <div className="auth-toggle">
          <p>
            {isLogin ? "계정이 없으신가요?" : "이미 계정이 있으신가요?"}
            <button type="button" onClick={toggleMode} className="toggle-btn">
              {isLogin ? "회원가입" : "로그인"}
            </button>
          </p>
        </div>
      </form>
    </Modal>
  );
};

export default AuthModal;
