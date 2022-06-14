import "./App.css";
import NavbarWide from "./NavbarWide";
import NavbarN from "./NavbarN";
import { useState } from "react";

function App() {
  let [width, setWidth] = useState("");
  return (
    <div className="App">
      {window.innerWidth <= 835 ? <NavbarN /> : <NavbarWide />}
      <NavbarWide />
      {/* 스테이트를 사용해서 변경이 가능하게 만들어야함 */}
      <NavbarN />

      {console.log(window.innerWidth)}
    </div>
  );
}

export default App;
