import "./App.css";
import NavbarWide from "./NavbarWide";

function App() {
  return (
    <div className="App">
      <NavbarWide />
      {/* 창이 줄어들면 네브바네로우로 바뀌게끔 스테이트 써서 밑에저거 콘솔도 써서 만들어야함. */}

      {console.log(window.innerWidth)}
    </div>
  );
}

export default App;
