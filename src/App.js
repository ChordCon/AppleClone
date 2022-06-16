import "./App.css";
import NavbarW from "./Home/NavbarW";
import NavbarN from "./Home/NavbarN";
import EventBar from "./Home/EventBar";
import MainGoods from "./Home/MainGoods";
import OtherGoods from "./Home/OtherGoods";
import FooterW from "./Home/FooterW";
import FooterN from "./Home/FooterN";
import { useEffect, useState } from "react";

function App() {
  // 윈도우 사이즈 변경을 감지하고 변경된 사이즈를 스테이트로 사용하는 방법.
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  // 윈도우 사이즈 변경을 감지하고 변경된 사이즈를 스테이트로 사용하는 방법.

  return (
    <div className="App">
      {width <= 1080 ? <NavbarN /> : <NavbarW />}
      <EventBar />
      <MainGoods />
      <OtherGoods />
      {width <= 1080 ? <FooterN /> : <FooterW />}
      <div className="notification">
        <p>본 웹사이트는 클론코딩입니다.</p>
      </div>
    </div>
  );
}

export default App;
