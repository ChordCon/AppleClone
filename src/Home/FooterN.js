import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

import styles from "./FooterN.module.css";

function FooterNItem() {
  return (
    <div className={styles.footer}>
      <Navbar className={styles.nav} expand="fluid">
        <Container>
          <Navbar.Toggle className={styles.toggle}>
            <Navbar.Brand className={styles.brand} href="#home">
              쇼핑 및 알아보기
            </Navbar.Brand>
          </Navbar.Toggle>
          <Navbar.Toggle className={styles.toggle}>+</Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#link">스토어</Nav.Link>
              <Nav.Link href="#link">Mac</Nav.Link>
              <Nav.Link href="#link">iPad</Nav.Link>
              <Nav.Link href="#link">iPhonek</Nav.Link>
              <Nav.Link href="#link">Watch</Nav.Link>
              <Nav.Link href="#link">AirPodk</Nav.Link>
              <Nav.Link href="#link">TV 및 홈</Nav.Link>
              <Nav.Link href="#link">AirTagk</Nav.Link>
              <Nav.Link href="#link">액세서리</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar className={styles.nav} expand="fluid">
        <Container>
          <Navbar.Toggle className={styles.toggle}>
            <Navbar.Brand className={styles.brand} href="#home">
              서비스
            </Navbar.Brand>
          </Navbar.Toggle>
          <Navbar.Toggle className={styles.toggle}>+</Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Apple Music</Nav.Link>
              <Nav.Link href="#link">Apple TV+</Nav.Link>
              <Nav.Link href="#link">Apple Arcade</Nav.Link>
              <Nav.Link href="#link">iClould</Nav.Link>
              <Nav.Link href="#link">Apple Books</Nav.Link>
              <Nav.Link href="#link">Apple Podcast</Nav.Link>
              <Nav.Link href="#link">App Store</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar className={styles.nav} expand="fluid">
        <Container>
          <Navbar.Toggle className={styles.toggle}>
            <Navbar.Brand className={styles.brand} href="#home">
              계정
            </Navbar.Brand>
          </Navbar.Toggle>
          <Navbar.Toggle className={styles.toggle}>+</Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Apple ID 관리</Nav.Link>
              <Nav.Link href="#link">Apple Store 계정</Nav.Link>
              <Nav.Link href="#link">iClould.com</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar className={styles.nav} expand="fluid">
        <Container>
          <Navbar.Toggle className={styles.toggle}>
            <Navbar.Brand className={styles.brand} href="#home">
              Apple Store
            </Navbar.Brand>
          </Navbar.Toggle>
          <Navbar.Toggle className={styles.toggle}>+</Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">매장 찾기</Nav.Link>
              <Nav.Link href="#link">Genius Bar</Nav.Link>
              <Nav.Link href="#link">Today at Apple</Nav.Link>
              <Nav.Link href="#link">Apple 캠프</Nav.Link>
              <Nav.Link href="#link">Apple Store 앱</Nav.Link>
              <Nav.Link href="#link">리퍼 및 특가 제품</Nav.Link>
              <Nav.Link href="#link">금융 혜택</Nav.Link>
              <Nav.Link href="#link">Apple Trade In</Nav.Link>
              <Nav.Link href="#link">주문 상태</Nav.Link>
              <Nav.Link href="#link">쇼핑 도움말</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar className={styles.nav} expand="fluid">
        <Container>
          <Navbar.Toggle className={styles.toggle}>
            <Navbar.Brand className={styles.brand} href="#home">
              비지니스
            </Navbar.Brand>
          </Navbar.Toggle>
          <Navbar.Toggle className={styles.toggle}>+</Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">매장 찾기</Nav.Link>
              <Nav.Link href="#link">Apple과 비지니스</Nav.Link>
              <Nav.Link href="#link">비지니스를 위한 제품 쇼핑하기</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar className={styles.nav} expand="fluid">
        <Container>
          <Navbar.Toggle className={styles.toggle}>
            <Navbar.Brand className={styles.brand} href="#home">
              교육
            </Navbar.Brand>
          </Navbar.Toggle>
          <Navbar.Toggle className={styles.toggle}>+</Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Apple과 교육</Nav.Link>
              <Nav.Link href="#link">초중고용 제품 쇼핑하기</Nav.Link>
              <Nav.Link href="#link">대학 생활을 위한 제품 쇼핑하기</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar className={styles.nav} expand="fluid">
        <Container>
          <Navbar.Toggle className={styles.toggle}>
            <Navbar.Brand className={styles.brand} href="#home">
              Apple의 가치관
            </Navbar.Brand>
          </Navbar.Toggle>
          <Navbar.Toggle className={styles.toggle}>+</Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">손쉬운 사용</Nav.Link>
              <Nav.Link href="#link">환경</Nav.Link>
              <Nav.Link href="#link">개인정보 보호</Nav.Link>
              <Nav.Link href="#link">협력업체에 대한 책임</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar className={styles.nav} expand="fluid">
        <Container>
          <Navbar.Toggle className={styles.toggle}>
            <Navbar.Brand className={styles.brand} href="#home">
              Apple 정보
            </Navbar.Brand>
          </Navbar.Toggle>
          <Navbar.Toggle className={styles.toggle}>+</Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Newsroom</Nav.Link>
              <Nav.Link href="#link">Apple 리더쉽</Nav.Link>
              <Nav.Link href="#link">채용 안내</Nav.Link>
              <Nav.Link href="#link">윤리 및 규정 준수</Nav.Link>
              <Nav.Link href="#link">이벤트</Nav.Link>
              <Nav.Link href="#link">일자리 창출</Nav.Link>
              <Nav.Link href="#link">Apple 연락처</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

const FooterN = () => {
  return <FooterNItem />;
};
export default FooterN;
