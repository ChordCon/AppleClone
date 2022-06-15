import { Nav } from "react-bootstrap";

const EventBar = () => {
  return (
    <Nav
      style={{ backgroundColor: "#FFFDEA" }}
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
        하고 무료 배송, 스페셜리스트 지원 등의 혜택을 받으세요.
      </Nav.Item>
    </Nav>
  );
};

export default EventBar;
