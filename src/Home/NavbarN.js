import { Accordion, Nav, Card, useAccordionButton } from "react-bootstrap";
import styles from "./Navbar.module.css";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <button
      style={{
        border: "none",
        color: "white",
        backgroundColor: "rgb(29, 29, 29)",
      }}
      type="button"
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

function NavbarN() {
  return (
    <Accordion defaultActiveKey="0">
      <Card
        style={{
          backgroundColor: "rgb(29, 29, 29)",
          position: "fixed",
          top: "47px",
          left: "0px",
          width: "100%",
          minWidth: "340px",
          zIndex: "90",
        }}
      >
        <Card.Header
          style={{
            backgroundColor: "rgb(29, 29, 29)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "47px",
            width: "100%",
            minWidth: "340px",
            opacity: "0.9",
            position: "fixed",
            top: "0",
            left: "0",
            zIndex: "100",
          }}
        >
          <CustomToggle eventKey="1">=</CustomToggle>

          <Nav.Link href="/home">
            <img src="img/AppleLogo.png" width={"30px"} />
          </Nav.Link>
          <SideBar />
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body
            style={{
              padding: "0",
              backgroundColor: "rgb(29, 29, 29)",
            }}
          >
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Item as="li">
                <Nav.Link eventKey="link-10" className={styles.navbarLink}>
                  <TopBar />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="/home" className={styles.navbarLink}>
                  스토어
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="link-1" className={styles.navbarLink}>
                  Mac
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="link-2" className={styles.navbarLink}>
                  iPad
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="link-4" className={styles.navbarLink}>
                  iPone
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="link-5" className={styles.navbarLink}>
                  Watch
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="link-6" className={styles.navbarLink}>
                  TV 및 홈
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="link-7" className={styles.navbarLink}>
                  Apple 독점 제공
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="link-8" className={styles.navbarLink}>
                  액세서리
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="link-9" className={styles.navbarLink}>
                  고객지원
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default NavbarN;
