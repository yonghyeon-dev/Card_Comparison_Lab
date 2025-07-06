import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Compare from "./pages/Compare";
import Benefits from "./pages/Benefits";
import Guide from "./pages/Guide";
import About from "./pages/About";

/*
[2024-06-13 작업 내역]
- 전체 UI/UX 구조 및 폴더 구조 실전 서비스 수준으로 정비
- 모든 꾸밈 요소는 CSS에서만 관리, 인라인 스타일 최소화
- 카드고릴라 스타일 참고, 반응형/여백/정렬/색상/폰트/그림자 일원화
- Header, Footer, Hero, CardList, CardItem, Modal 등 주요 컴포넌트 분리
- 카드 데이터, 카드사/혜택 필터, 정렬, 상세정보, 평점, 혜택 등 구현
- 서비스명: '카드 비교 연구소'로 통일, 브랜딩/로고 적용
- 카드사명 흰색, 추천카드 모달/리스트 시인성 개선, 모바일/PC 대응
- .gitignore, README.md, LICENSE 등 배포/협업 필수 파일 생성
- GitHub Pages 배포(gh-pages), homepage 경로 설정, npm run deploy 적용
- 기타: 경로 점검, import 구조, 배포/업로드 주의사항 등 안내
*/

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
