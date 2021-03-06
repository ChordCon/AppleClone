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
        ๐
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
              placeholder="apple.com ๊ฒ์"
            ></input>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Dropdown.Menu
            style={{ display: "contents" }}
            className={styles.topbarUnder}
            show
          >
            <Dropdown.Header>๋น ๋ฅธ ๋งํฌ</Dropdown.Header>
            <Dropdown.Item className={styles.topbarMenu}>
              Apple Store ์์ ํด๋ฌด ๊ด๋ จ ์์ฃผํ๋ ์ง๋ฌธ
            </Dropdown.Item>
            <Dropdown.Item className={styles.topbarMenu}>
              Apple Store Online์์ ์ผํํ๊ธฐ
            </Dropdown.Item>
            <Dropdown.Item className={styles.topbarMenu}>
              ์ก์ธ์๋ฆฌ
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
