import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Navbar.module.css";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

function NavbarWide() {
  return (
    <div className={styles.navbar}>
      <Nav style={{ alignItems: "center" }} defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/home">
            <img src="img/AppleLogo.png" width={"30px"} />
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
        <Nav.Item as="li">
          <Nav.Link eventKey="link-10" className={styles.navbarLink}>
            <TopBar />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-11" className={styles.navbarLink}>
            <SideBar />
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default NavbarWide;
