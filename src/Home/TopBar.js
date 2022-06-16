import React, { useState } from "react";
import { Dropdown, Offcanvas } from "react-bootstrap/";
import styles from "./TopBar.module.css";

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <span style={{ fontSize: "15px" }} onClick={handleShow}>
        🔍
      </span>
      <Offcanvas
        className={styles.topbar}
        show={show}
        onHide={handleClose}
        {...props}
      >
        <Offcanvas.Header
          style={{ backgroundColor: "rgb(29, 29, 29)", height: "47px" }}
        >
          <Offcanvas.Title className={styles.topbarTitle}>
            <input
              className={styles.topbarInput}
              placeholder="apple.com 검색"
            ></input>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Dropdown.Menu
            style={{ display: "contents" }}
            className={styles.topbarUnder}
            show
          >
            <Dropdown.Header>빠른 링크</Dropdown.Header>
            <Dropdown.Item className={styles.topbarMenu}>
              Apple Store 임시 휴무 관련 자주하는 질문
            </Dropdown.Item>
            <Dropdown.Item className={styles.topbarMenu}>
              Apple Store Online에서 쇼핑하기
            </Dropdown.Item>
            <Dropdown.Item className={styles.topbarMenu}>
              액세서리
            </Dropdown.Item>
            <Dropdown.Item className={styles.topbarMenu}>AirPods</Dropdown.Item>
            <Dropdown.Item className={styles.topbarMenu}> AirTag</Dropdown.Item>
          </Dropdown.Menu>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

function TopBar() {
  return (
    <>
      {["top"].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default TopBar;
