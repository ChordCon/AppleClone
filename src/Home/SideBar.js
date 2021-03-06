import React, { useState } from "react";
import { Offcanvas, Dropdown } from "react-bootstrap";
import styles from "./SideBar.module.css";

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <span style={{ fontSize: "15px" }} onClick={handleShow}>
        ๐
      </span>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Body>
          <Dropdown.Menu
            style={{ display: "contents" }}
            className={styles.sidebarUnder}
            show
          >
            <Dropdown.Header style={{ textAlign: "center", padding: "30px" }}>
              ์ฅ๋ฐ๊ตฌ๋๊ฐ ๋น์ด ์์ต๋๋ค.
            </Dropdown.Header>
            <Dropdown.Item className={styles.sidebarMenu}>
              ์ฅ๋ฐ๊ตฌ๋
            </Dropdown.Item>
            <Dropdown.Item className={styles.sidebarMenu}>
              ์ ์ฅ๋ ํญ๋ชฉ
            </Dropdown.Item>
            <Dropdown.Item className={styles.sidebarMenu}>์ฃผ๋ฌธ</Dropdown.Item>
            <Dropdown.Item className={styles.sidebarMenu}>๊ณ์ </Dropdown.Item>
            <Dropdown.Item className={styles.sidebarMenu}>๋ก๊ทธ์ธ</Dropdown.Item>
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
