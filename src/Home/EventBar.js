import { Nav } from "react-bootstrap";

const EventBar = () => {
  return (
    <Nav
      style={{ backgroundColor: "#FFFDEA", marginTop: "47px" }}
      activeKey="/event"
      onSelect={() => alert(`이벤트 안합니다~`)}
    >
      <Nav.Item
        style={{
          fontSize: "12px",
          display: "flex",
          margin: "auto",
          alignItems: "baseline",
          padding: "10px",
        }}
      >
        <Nav.Link style={{ padding: "0" }} href="/event">
          온라인으로 쇼핑
        </Nav.Link>
        본 웹 사이트는 클론코딩입니다.
      </Nav.Item>
    </Nav>
  );
};

export default EventBar;
