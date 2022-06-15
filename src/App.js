import "./App.css";
import NavbarWide from "./NavbarWide";
import NavbarN from "./NavbarN";
import EventBar from "./EventBar";
import MainGoods from "./MainGoods";
import OtherGoods from "./OtherGoods";
import FooterW from "./FooterW";
import FooterN from "./FooterN";
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
  useEffect(() => {
    alert("진짜 아닙니다.");
  }, []);
  return (
    <div className="App">
      {width <= 1080 ? <NavbarN /> : <NavbarWide />}
      {/* 네브바 밀림 방지용 */}
      <div style={{ height: "47px", width: "100%" }}></div>
      {/* 네브바 밀림 방지용 */}
      <EventBar />
      <MainGoods />
      <OtherGoods />
      {/* 푸터 네로우 다시 고민해봐야함!!!! */}
      {width <= 1080 ? <FooterN /> : <FooterW />}
    </div>
  );
}

export default App;
