import React, { useState } from "react";
import { Offcanvas, Dropdown } from "react-bootstrap";
import styles from "./SideBar.module.css";

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <span onClick={handleShow}>🛒</span>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Body>
          <Dropdown.Menu
            style={{ display: "contents" }}
            className={styles.sidebarUnder}
            show
          >
            <Dropdown.Header style={{ textAlign: "center", padding: "30px" }}>
              장바구니가 비어 있습니다.
            </Dropdown.Header>
            <Dropdown.Item className={styles.sidebarMenu}>
              장바구니
            </Dropdown.Item>
            <Dropdown.Item className={styles.sidebarMenu}>
              저장된 항목
            </Dropdown.Item>
            <Dropdown.Item className={styles.sidebarMenu}>주문</Dropdown.Item>
            <Dropdown.Item className={styles.sidebarMenu}>계정</Dropdown.Item>
            <Dropdown.Item className={styles.sidebarMenu}>로그인</Dropdown.Item>
          </Dropdown.Menu>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function SideBar() {
  return (
    <>
      {["end"].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default SideBar;
