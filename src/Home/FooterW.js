import { Dropdown } from "react-bootstrap";
import styles from "./FooterW.module.css";

const FooterW = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gideItem1}>
        <Dropdown.Menu show style={{ position: "relative", border: "none" }}>
          <Dropdown.Header>쇼핑 및 알아보기</Dropdown.Header>
          <Dropdown.Item>스토어</Dropdown.Item>
          <Dropdown.Item>Mac</Dropdown.Item>
          <Dropdown.Item>iPad</Dropdown.Item>
          <Dropdown.Item>iPhone</Dropdown.Item>
          <Dropdown.Item>Watch</Dropdown.Item>
          <Dropdown.Item>AirPods</Dropdown.Item>
          <Dropdown.Item>TV 및 홈</Dropdown.Item>
          <Dropdown.Item>AirTag</Dropdown.Item>
          <Dropdown.Item>액세서리</Dropdown.Item>
        </Dropdown.Menu>
      </div>
      <div className={styles.gideItem2}>
        <Dropdown.Menu show style={{ position: "relative", border: "none" }}>
          <Dropdown.Header>서비스</Dropdown.Header>
          <Dropdown.Item>Apple Music</Dropdown.Item>
          <Dropdown.Item>Apple TV+</Dropdown.Item>
          <Dropdown.Item>Apple Arcade</Dropdown.Item>
          <Dropdown.Item>iClould</Dropdown.Item>
          <Dropdown.Item>Apple Books</Dropdown.Item>
          <Dropdown.Item>Apple Podcast</Dropdown.Item>
          <Dropdown.Item>App Store</Dropdown.Item>
        </Dropdown.Menu>
      </div>
      <div className={styles.gideItem3}>
        <Dropdown.Menu show style={{ position: "relative", border: "none" }}>
          <Dropdown.Header>계정</Dropdown.Header>
          <Dropdown.Item>Apple ID 관리</Dropdown.Item>
          <Dropdown.Item>Apple Store 계정</Dropdown.Item>
          <Dropdown.Item>iClould.com</Dropdown.Item>
        </Dropdown.Menu>
      </div>
      <div className={styles.gideItem4}>
        <Dropdown.Menu show style={{ position: "relative", border: "none" }}>
          <Dropdown.Header>Apple Store</Dropdown.Header>
          <Dropdown.Item>매장 찾기</Dropdown.Item>
          <Dropdown.Item>Genius Bar</Dropdown.Item>
          <Dropdown.Item>Today at Apple</Dropdown.Item>
          <Dropdown.Item>Apple 캠프</Dropdown.Item>
          <Dropdown.Item>Apple Store 앱</Dropdown.Item>
          <Dropdown.Item>리퍼 및 특가 제품</Dropdown.Item>
          <Dropdown.Item>금융 혜택</Dropdown.Item>
          <Dropdown.Item>Apple Trade In</Dropdown.Item>
          <Dropdown.Item>주문 상태</Dropdown.Item>
          <Dropdown.Item>쇼핑 도움말</Dropdown.Item>
        </Dropdown.Menu>
      </div>
      <div className={styles.gideItem5}>
        <Dropdown.Menu show style={{ position: "relative", border: "none" }}>
          <Dropdown.Header>비지니스</Dropdown.Header>
          <Dropdown.Item>Apple과 비지니스</Dropdown.Item>
          <Dropdown.Item>비지니스를 위한 제품 쇼핑하기</Dropdown.Item>
        </Dropdown.Menu>
      </div>
      <div className={styles.gideItem6}>
        <Dropdown.Menu show style={{ position: "relative", border: "none" }}>
          <Dropdown.Header>교육</Dropdown.Header>
          <Dropdown.Item>Apple과 교육</Dropdown.Item>
          <Dropdown.Item>초중고용 제품 쇼핑하기</Dropdown.Item>
          <Dropdown.Item>대학 생활을 위한 제품 쇼핑하기</Dropdown.Item>
        </Dropdown.Menu>
      </div>
      <div className={styles.gideItem7}>
        <Dropdown.Menu show style={{ position: "relative", border: "none" }}>
          <Dropdown.Header>Apple의 가치관</Dropdown.Header>
          <Dropdown.Item>손쉬운 사용</Dropdown.Item>
          <Dropdown.Item>환경</Dropdown.Item>
          <Dropdown.Item>개인정보 보호</Dropdown.Item>
          <Dropdown.Item>협력업체에 대한 책임</Dropdown.Item>
        </Dropdown.Menu>
      </div>
      <div className={styles.gideItem8}>
        <Dropdown.Menu show style={{ position: "relative", border: "none" }}>
          <Dropdown.Header>Apple 정보</Dropdown.Header>
          <Dropdown.Item>Newsroom</Dropdown.Item>
          <Dropdown.Item>Apple 리더쉽</Dropdown.Item>
          <Dropdown.Item>채용 안내</Dropdown.Item>
          <Dropdown.Item>윤리 및 규정 준수</Dropdown.Item>
          <Dropdown.Item>이벤트</Dropdown.Item>
          <Dropdown.Item>일자리 창출</Dropdown.Item>
          <Dropdown.Item>Apple 연락처</Dropdown.Item>
        </Dropdown.Menu>
      </div>
    </div>
  );
};

export default FooterW;
